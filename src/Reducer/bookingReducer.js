import { select, put, call, takeLatest } from "redux-saga/effects";
import { getToday, getCurrentHour, transformDateFormat } from "../Utils/ultil";
import { movieApi } from "../Api/api";

const SUCCESS = "booking/SUCCESS";
const ERROR = "booking/ERROR";
const LOADING = "booking/LOADING";

const SET_SELECTED_MOVIE = "booking/SELECTED_MOVIE";
const SET_SELECTED_DATE = "booking/SELECTED_DATE";
const SET_SELECTED_HOUR = "booking/SELECTED_HOUR";
const SET_SELECTED_REGION = "booking/SELECTED_REGION";
const SET_SELECTED_THEATERS = "booking/SELECTED_THEATER";
const SET_NEARBY_THEATERS = "booking/NEARBY_THEATERS";
const SET_CAN_SELECT_REGIONS = "booking/SET_CAN_SELECT_REGIONS";
const SET_CAN_SELECT_THEATERS = "booking/SET_CAN_SELECT_THEATERS";

const SET_SCHEDULES_LOG = "booking/SET_SCHEDULES_LOG";

const SELECT_MOVIE = "booking/SELECT_MOVIE";
const SELECT_THEATER = "booking/SELECT_THEATER";

// const GET_SCHEDULES = "booking/GET_SCHEDULES";
const GET_SCHEDULES_SUCCESS = "booking/GET_SCHEDULES_SUCCESS";
const GET_SCHEDULES_LOADING = "booking/GET_SCHEDULES_LOADING";
const GET_SCHEDULES_ERROR = "booking/GET_SCHEDULES_ERROR";

// 단순 상태 변환용 액션들
const setSelectedMovies = (movies) => ({ type: SET_SELECTED_MOVIE, movies });
const setSelectedDate = (date) => ({ type: SET_SELECTED_DATE, date });
const setSelectedHour = (hour) => ({ type: SET_SELECTED_HOUR, hour });
const setSelectRegion = (region) => ({ type: SET_SELECTED_REGION, region });
const setSelectTheaters = (theaters) => ({
  type: SET_SELECTED_THEATERS,
  theaters,
});
const setNearbyTheaters = (theaters) => ({
  type: SET_NEARBY_THEATERS,
  theaters,
});
const setCanSelectRegions = (regions) => ({
  type: SET_CAN_SELECT_REGIONS,
  regions,
});
const setCanSelectTheaters = (theaters) => ({
  type: SET_CAN_SELECT_THEATERS,
  theaters,
});

// 외부 api로 정보 가져오는 Thunk
const getSchedules = () => async (dispatch, state) => {
  const scheduleLogs = state().Booking.scheduleLogs;

  const selectedOption = state().Booking.selectedOption;
  const selectedTheaters = selectedOption.selectedTheaters;
  const selectedDate = selectedOption.selectedDate;
  const selectedMovies = selectedOption.selectedMovies.length
    ? selectedOption.selectedMovies
    : undefined;

  const searchLog = {
    searchOption: {
      date: selectedDate,
      theaters: selectedTheaters,
      movies: selectedMovies,
    },
    schedules: [],
  };

  const pastLog = scheduleLogs.find(
    (log) =>
      JSON.stringify(log.searchOption) ===
      JSON.stringify(searchLog.searchOption)
  );

  if (pastLog) {
    dispatch({ type: GET_SCHEDULES_SUCCESS, payload: pastLog.schedules });
    return;
  }

  try {
    for (let i = 0; i < selectedTheaters.length; i++) {
      const res = await movieApi.getSchedules({
        date: selectedDate,
        theaterId: selectedTheaters[i].theater_id,
        movies: selectedMovies,
      });
      if (res.status === 200) {
        searchLog.schedules = [...searchLog.schedules, ...res.data];
      } else {
        console.log("status 에러발생");
      }
    }
    dispatch({ type: GET_SCHEDULES_SUCCESS, payload: searchLog.schedules });
    dispatch({ type: SET_SCHEDULES_LOG, payload: searchLog });
    console.log(searchLog);
  } catch (e) {
    console.log("에러발생", e);
  }
};

// 사가로 바꿀것 -> 날짜 or 날짜 & 타이틀로 상영 가능한 지역과 영화관 정보 가져오는 Thunk
const getTheatersCanBooking = (title) => async (dispatch, state) => {
  const selectedOption = state().Booking.selectedOption;
  const selectedDate = transformDateFormat(selectedOption.selectedDate)
    .dateStringNoDash;

  try {
    const resRegions = await movieApi.getScreeningRegions(
      selectedDate,
      title ? title : ""
    );
    const resTheaters = await movieApi.getScreeningTheaters(
      selectedDate,
      title ? title : ""
    );

    if (resRegions.status === 200 && resTheaters.status === 200) {
      const canSelectRegions = {};
      for (let i = 0; i < resRegions.data.length; i++) {
        canSelectRegions[resRegions.data[i].region_name] =
          resRegions.data[i].region_count;
      }
      dispatch(setCanSelectRegions(canSelectRegions));
      dispatch(setCanSelectTheaters(resTheaters.data));
    } else {
      console.log("에러 발생");
    }
  } catch (e) {
    console.log("에러 발생", e);
  }
};

// 사가 진입용 액션들
const selectMovie = (movie) => ({ type: SELECT_MOVIE, movie });
const selectTheater = (theater) => ({ type: SELECT_THEATER, theater });

// 영화 선택용 미들웨어 Saga
function* selectMovieSaga(action) {
  const state = yield select();
  const selectedMovies = state.Booking.selectedOption.selectedMovies;
  const selectedDate = state.Booking.selectedOption.selectedDate;
  const selectedTheaters = state.Booking.selectedOption.selectedTheaters;

  let newSelectedMovies = [];

  // 이미 리스트에 있다면 상태에서 빼고, 없다면 넣는다. 3개이상 못들어간다.
  if (selectedMovies.find((movie) => movie.title === action.movie.title)) {
    newSelectedMovies = selectedMovies.filter(
      (movie) => movie.title !== action.movie.title
    );
  } else {
    if (selectedMovies.length === 3) return;

    newSelectedMovies = selectedMovies.slice();
    newSelectedMovies.push(action.movie);
  }

  if (selectedDate === "") yield put(setSelectedDate("2020-07-01")); // 날짜 선택
  yield put(setSelectedHour(getCurrentHour())); // 현재 시간을 선택
  yield put(setSelectedMovies(newSelectedMovies)); // 영화 선택
  if (selectedTheaters.length) yield put(getSchedules()); // 상영관 선택을 했다면 스케쥴 가져오기
}

// 영화관 선택용 미들웨어 Saga
function* selectTheaterSaga(action) {
  const state = yield select();
  const selectedTheaters = state.Booking.selectedOption.selectedTheaters;

  let newSelectedTheaters = [];

  // 이미 리스트에 있다면 상태에서 빼고, 없다면 넣는다. 3개이상 못들어간다.
  if (
    selectedTheaters.find(
      (selectedTheater) => selectedTheater.name === action.theater.name
    )
  ) {
    newSelectedTheaters = selectedTheaters.filter(
      (selectedTheater) => selectedTheater.name !== action.theater.name
    );
  } else {
    if (selectedTheaters.length === 3) return;

    newSelectedTheaters = selectedTheaters.slice();

    newSelectedTheaters.push(action.theater);
  }

  yield put(setSelectedHour(getCurrentHour())); // 현재 시간을 선택
  yield put(setSelectTheaters(newSelectedTheaters)); // 상영관 선택 처리
  yield put(getSchedules());
}

function* bookingSaga() {
  yield takeLatest(SELECT_MOVIE, selectMovieSaga);
  yield takeLatest(SELECT_THEATER, selectTheaterSaga);
}

const initialState = {
  canSelectRegions: {
    "가까운 영화관": 3,
    서울: 0,
    경기: 0,
    인천: 0,
    "대전/충청/세종": 0,
    "부산/대구/경상": 0,
    "광주/전라": 0,
    강원: 0,
    제주: 0,
  },
  canSelectTheaters: [],
  schedules: [],
  scheduleLogs: [],
  selectedOption: {
    selectedDate: "2020-07-01",
    selectedRegion: "", // 선택한 지역
    selectedTheaters: [], // 선택한 영화관들
    nearbyTheaters: [], // 가까운 영화관
    selectedMovies: [],
    movieAgeGrade: "All",
    screenHall: "2관",
    selectedHour: "19",
    selectedTime: "19:40",
    endTime: "",
    seletedSeat: [],
  },
  ticket: {
    selectedDate: "2020-07-10",
    selectedTheather: "강남",
    selectedMovieTitle: "살아있다",
    movieAgeGrade: "All",
    screenHall: "2관",
    seletedTime: "19:40",
    endTime: "",
    seats: [],
    ticketType: {
      adult: 0,
      teen: 0,
      preferential: 0,
    },
    price: 0,
  },
  movies: [
    {
      id: 101,
      name_kor: "#살아있다",
      reservation_rate: 57.9,
      running_time: "97",
      rank: 1,
      acc_audience: 1342958,
      acc_favorite: 0,
      open_date: "2020-06-24",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20193069.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20193069.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 102,
      name_kor: "결백",
      reservation_rate: 10.5,
      running_time: "110",
      rank: 2,
      acc_audience: 770103,
      acc_favorite: 0,
      open_date: "2020-06-10",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20183813.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20183813.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 103,
      name_kor: "소리꾼",
      reservation_rate: 7.8,
      running_time: "118",
      rank: 3,
      acc_audience: 26982,
      acc_favorite: 0,
      open_date: "2020-07-01",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20196201.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20196201.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 104,
      name_kor: "다크 나이트",
      reservation_rate: 6.1,
      running_time: "152",
      rank: 4,
      acc_audience: 4194189,
      acc_favorite: 0,
      open_date: "2008-08-06",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20081056.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20081056.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 105,
      name_kor: "온워드: 단 하루의 기적",
      reservation_rate: 5.7,
      running_time: "102",
      rank: 5,
      acc_audience: 312568,
      acc_favorite: 0,
      open_date: "2020-06-17",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20191048.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20191048.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 106,
      name_kor: "인베이젼 2020",
      reservation_rate: 2.6,
      running_time: "130",
      rank: 6,
      acc_audience: 9742,
      acc_favorite: 0,
      open_date: "2020-07-01",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20208617.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20208617.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 107,
      name_kor: "아무튼, 아담",
      reservation_rate: 1.0,
      running_time: "100",
      rank: 7,
      acc_audience: 2954,
      acc_favorite: 0,
      open_date: "2020-07-02",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20200361.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20200361.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 108,
      name_kor: "위대한 쇼맨",
      reservation_rate: 0.8,
      running_time: "104",
      rank: 8,
      acc_audience: 1688503,
      acc_favorite: 0,
      open_date: "2017-12-20",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20179462.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20179462.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 109,
      name_kor: "트로이 디렉터스 컷",
      reservation_rate: 0.8,
      running_time: "196",
      rank: 9,
      acc_audience: 757,
      acc_favorite: 0,
      open_date: "2020-07-03",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20200836.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20200836.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
    {
      id: 110,
      name_kor: "야구소녀",
      reservation_rate: 0.6,
      running_time: "104",
      rank: 10,
      acc_audience: 31770,
      acc_favorite: 0,
      open_date: "2020-06-18",
      close_date: "2020-08-31",
      description: "",
      poster:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20196702.jpg",
      trailer:
        "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20196702.mp4",
      comments: [],
      liked: 0,
      average_point: 0,
    },
  ],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: action.payload,
      };
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          selectedMovies: action.movies,
        },
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          selectedDate: action.date,
        },
      };
    case SET_SELECTED_HOUR:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          selectedHour: action.hour,
        },
      };
    case SET_SELECTED_REGION:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          selectedRegion: action.region,
        },
      };
    case SET_SELECTED_THEATERS:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          selectedTheaters: action.theaters,
        },
      };
    case SET_NEARBY_THEATERS:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          nearbyTheaters: action.theaters,
        },
      };
    case SET_CAN_SELECT_REGIONS:
      return {
        ...state,
        canSelectRegions: {
          ...state.canSelectRegions,
          ...action.regions,
        },
      };
    case SET_CAN_SELECT_THEATERS:
      return {
        ...state,
        canSelectTheaters: action.theaters,
      };
    case SET_SCHEDULES_LOG:
      return {
        ...state,
        scheduleLogs: [...state.scheduleLogs, action.payload],
      };

    case SUCCESS:
    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export {
  bookingReducer,
  bookingSaga,
  selectMovie,
  selectTheater,
  setSelectedDate,
  setSelectedHour,
  setSelectRegion,
  setNearbyTheaters,
  getSchedules,
  getTheatersCanBooking,
};
