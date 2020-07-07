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
const SET_REGION_THEATER_LOG = "booking/SET_REGION_THEATER_LOG";

const SELECT_MOVIE = "booking/SELECT_MOVIE";
const SELECT_THEATER = "booking/SELECT_THEATER";
const SELECT_DATE = "booking/SELECT_DATE";

// const GET_SCHEDULES = "booking/GET_SCHEDULES";
const GET_SCHEDULES = "booking/GET_SCHEDULES";
const GET_SCHEDULES_SUCCESS = "booking/GET_SCHEDULES_SUCCESS";
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
  dispatch({ type: GET_SCHEDULES });
  const scheduleLogs = state().Booking.schedule.scheduleLogs;

  const selectedOption = state().Booking.selectedOption;
  const selectedTheaters = selectedOption.selectedTheaters;
  const selectedDate = selectedOption.selectedDate;
  const selectedMovies = selectedOption.selectedMovies.length
    ? selectedOption.selectedMovies
    : undefined;

  const newSearchLog = {
    searchOption: {
      date: selectedDate,
      theaters: selectedTheaters,
      movies: selectedMovies,
    },
    schedules: [],
  };

  // 로그 처리
  const pastLog = scheduleLogs.find(
    (log) =>
      JSON.stringify(log.searchOption) ===
      JSON.stringify(newSearchLog.searchOption)
  );
  if (pastLog) {
    dispatch({ type: GET_SCHEDULES_SUCCESS, payload: pastLog.schedules });
    dispatch(
      setSelectedHour(
        pastLog.schedules.length
          ? +pastLog.schedules[0].start_time.slice(0, 2)
          : 0
      )
    );
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
        newSearchLog.schedules = [
          ...newSearchLog.schedules,
          ...res.data.results,
        ]; // for문 돌면서 누적 기록
      } else {
        console.log("status 에러발생");
      }
    }

    newSearchLog.schedules = newSearchLog.schedules.sort((a, b) =>
      a.start_time < b.start_time ? -1 : 1
    );

    dispatch({ type: GET_SCHEDULES_SUCCESS, payload: newSearchLog.schedules });
    dispatch({ type: SET_SCHEDULES_LOG, payload: newSearchLog });
    dispatch(
      setSelectedHour(
        newSearchLog.schedules.length
          ? +newSearchLog.schedules[0].start_time.slice(0, 2)
          : 0
      )
    );
  } catch (e) {
    console.log("에러발생", e);
  }
};

// 날짜 or 날짜 & 타이틀로 상영 가능한 지역과 영화관 정보 가져오는 Thunk
const getTheatersCanBooking = (movies = []) => async (dispatch, state) => {
  const selectedOption = state().Booking.selectedOption;
  const selectedMovies = selectedOption.selectedMovies;
  const selectedTheaters = selectedOption.selectedTheaters;
  const selectedDate = transformDateFormat(selectedOption.selectedDate)
    .dateStringNoDash;
  const canSelectRegionTheatersLogs = state().Booking.canSelectLocation.logs;

  const newRegionTheaterLog = {
    searchOption: {
      selectedDate,
      selectedTheaters,
      selectedMovies,
    },
    regions: [],
    theaters: [],
  };

  const pastLog = canSelectRegionTheatersLogs.find(
    (log) =>
      JSON.stringify(log.searchOption) ===
      JSON.stringify(newRegionTheaterLog.searchOption)
  );

  if (pastLog) {
    dispatch(setCanSelectRegions(pastLog.regions));
    dispatch(setCanSelectTheaters(pastLog.theaters));
  } else {
    try {
      const resRegions = await movieApi.getScreeningRegions(
        selectedDate,
        movies.length ? movies : ""
      );
      const resTheaters = await movieApi.getScreeningTheaters(
        selectedDate,
        movies.length ? movies : ""
      );

      if (resRegions.status === 200 && resTheaters.status === 200) {
        const regions = {
          "가까운 영화관": 3,
          서울: 0,
          경기: 0,
          인천: 0,
          "대전/충청/세종": 0,
          "부산/대구/경상": 0,
          "광주/전라": 0,
          강원: 0,
          제주: 0,
        };
        for (let i = 0; i < resRegions.data.results.length; i++) {
          regions[resRegions.data.results[i].region_name] =
            resRegions.data.results[i].region_count;
        }
        dispatch(setCanSelectRegions(regions));
        dispatch(setCanSelectTheaters(resTheaters.data.results));

        // 로그로 기록하기
        newRegionTheaterLog.regions = regions;
        newRegionTheaterLog.theaters = resTheaters.data.results;
        dispatch({
          type: SET_REGION_THEATER_LOG,
          payload: newRegionTheaterLog,
        });
      } else {
        console.log("에러 발생");
      }
    } catch (e) {
      console.log("에러 발생", e);
    }
  }

  // 만약 이미 선택한 상영관이 선택 불가능하게 바뀌었을 경우 선택을 취소해준다
  const canSelectTheaters = state().Booking.canSelectLocation.theaters;

  const newSelectedTheaters = canSelectTheaters.filter((theater) =>
    selectedTheaters.find((th) => th.name === theater.name)
  );
  // 상영관 선택과 지역 선택 처리
  dispatch(setSelectTheaters(newSelectedTheaters));
  if (newSelectedTheaters.length) {
    dispatch(
      setSelectRegion(
        newSelectedTheaters[newSelectedTheaters.length - 1].region
      )
    );
  } else dispatch(setSelectRegion(""));
};

// 사가 진입용 액션들
const selectMovie = (movie) => ({ type: SELECT_MOVIE, movie });
const selectTheater = (theater) => ({ type: SELECT_THEATER, theater });
const selectDate = (date) => ({ type: SELECT_DATE, date });

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
  // yield put(setSelectedHour(getCurrentHour())); // 현재 시간을 선택
  yield put(setSelectedMovies(newSelectedMovies)); // 영화 선택
  yield put(getTheatersCanBooking(newSelectedMovies));
  if (selectedTheaters.length) {
    yield put(getSchedules());
  } // 상영관 선택을 했다면 스케쥴 가져오기
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

  // yield put(setSelectedHour(getCurrentHour())); // 현재 시간을 선택
  yield put(setSelectTheaters(newSelectedTheaters)); // 상영관 선택 처리
  yield put(getSchedules());
}

function* selectDateSaga(action) {
  const state = yield select();
  const selectedTheaters = state.Booking.selectedOption.selectedTheaters;
  const selectedMovies = state.Booking.selectedOption.selectedMovies;

  yield put(setSelectedDate(action.date));
  yield put(getTheatersCanBooking(selectedMovies));
  if (selectedTheaters.length) yield put(getSchedules());
}

function* bookingSaga() {
  yield takeLatest(SELECT_MOVIE, selectMovieSaga);
  yield takeLatest(SELECT_THEATER, selectTheaterSaga);
  yield takeLatest(SELECT_DATE, selectDateSaga);
}

const initialState = {
  canSelectLocation: {
    regions: {
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
    theaters: [],
    logs: [],
  },
  schedule: {
    schedules: [],
    scheduleLogs: [],
  },
  selectedOption: {
    selectedDate: "2020-07-01",
    selectedRegion: "", // 선택한 지역
    selectedTheaters: [], // 선택한 영화관들
    nearbyTheaters: [], // 가까운 영화관
    selectedMovies: [],
    movieAgeGrade: "All",
    screenHall: "2관",
    selectedHour: "0",
    selectedTime: "0",
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
    case GET_SCHEDULES:
      return {
        ...state,
        isLoading: state.isLoading + 1,
      };
    case GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          schedules: action.payload,
        },
        isLoading: state.isLoading - 1,
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
        canSelectLocation: {
          ...state.canSelectLocation,
          regions: action.regions,
        },
      };
    case SET_CAN_SELECT_THEATERS:
      return {
        ...state,
        canSelectLocation: {
          ...state.canSelectLocation,
          theaters: action.theaters,
        },
      };
    case SET_SCHEDULES_LOG:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          scheduleLogs: [...state.schedule.scheduleLogs, action.payload],
        },
      };
    case SET_REGION_THEATER_LOG:
      return {
        ...state,
        canSelectLocation: {
          ...state.canSelectLocation,
          logs: [...state.canSelectLocation.logs, action.payload],
        },
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
  selectDate,
};
