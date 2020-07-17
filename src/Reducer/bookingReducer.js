import { select, put, takeLatest } from "redux-saga/effects";
import { transformDateFormat, makeRefs } from "../Utils/util";
import { movieApi } from "../Api/api";
import { setReservedSeat, resetSeat } from "./bookingSeatReducer";
import { checkLogin } from "./userInfoReducer";
import { openModal, setOneBtn } from "./modalReducer";

const SUCCESS = "booking/SUCCESS";
const ERROR = "booking/ERROR";
const LOADING = "booking/LOADING";

// 사가 진입용
const SELECT_MOVIE = "booking/SELECT_MOVIE";
const SELECT_THEATER = "booking/SELECT_THEATER";
const SELECT_DATE = "booking/SELECT_DATE";

// 상태 설정용
const SET_SELECTED_MOVIE = "booking/SELECTED_MOVIE";
const SET_SELECTED_DATE = "booking/SELECTED_DATE";
const SET_SELECTED_HOUR = "booking/SELECTED_HOUR";
const SET_SELECTED_REGION = "booking/SELECTED_REGION";
const SET_SELECTED_THEATERS = "booking/SELECTED_THEATER";
const SET_NEARBY_THEATERS = "booking/NEARBY_THEATERS";

const SET_CAN_SELECT_MOVIES = "booking/SET_CAN_SELECT_MOVIES";

const SET_SCHEDULE_REF = "booking/SET_SCHEDULE_REF";
const SET_SCHEDULES_LOG = "booking/SET_SCHEDULES_LOG";
const SET_REGION_THEATER_LOG = "booking/SET_REGION_THEATER_LOG";

const SET_DEFAULT_TICKET_INFO = "booking/SET_DEFAULT_TICKET_INFO";
const SET_TICKET_NUMBER = "booking/SET_TICKET_NUMBER";

const CLEAR_SELECTED_MOVIES = "booking/SET_CLEAR_SELECTED_MOVIES";

// 영화관 가져오기
const GET_THEATERS_CAN_BOOKING = "booking/GET_THEATERS_CAN_BOOKING";
const GET_THEATERS_CAN_BOOKING_SUCCESS =
  "booking/GET_THEATERS_CAN_BOOKING_SUCCESS";

// 영화 스케쥴 가져오기
const GET_SCHEDULES = "booking/GET_SCHEDULES";
const GET_SCHEDULES_SUCCESS = "booking/GET_SCHEDULES_SUCCESS";
const GET_SCHEDULES_ERROR = "booking/GET_SCHEDULES_ERROR";

// 예매 가능한 영화목록 가져오기
const GET_POSSIBLE_MOVIES = "booking/GET_POSSIBLE_MOVIES";
const GET_POSSIBLE_MOVIES_SUCCESS = "booking/GET_POSSIBLE_MOVIES_SUCCESS";
const GET_POSSIBLE_MOVIES_ERROR = "booking/GET_POSSIBLE_MOVIES_ERROR";

// 전체 영화 목록
const GET_MOVIES_SUCCESS = "booking/GET_MOVIES_SUCCESS";

// 단순 상태 변환용 액션들 (리듀서 외부에서 사용)
const setSelectedMovies = (movies) => ({ type: SET_SELECTED_MOVIE, movies });
const setSelectedDate = (date) => ({ type: SET_SELECTED_DATE, date });
const setSelectedHour = (hour) => ({ type: SET_SELECTED_HOUR, hour });
const setSelectRegion = (region) => ({ type: SET_SELECTED_REGION, region });
const setNearbyTheaters = (theaters) => ({
  type: SET_NEARBY_THEATERS,
  theaters,
});
const setDefaultTicketInfo = (payload) => ({
  type: SET_DEFAULT_TICKET_INFO,
  payload,
});
const setTicketNumber = (number) => ({
  type: SET_TICKET_NUMBER,
  number,
});

const setScheduleRef = (payload) => ({
  type: SET_SCHEDULE_REF,
  payload,
});

const clearSelectedMovies = () => ({
  type: CLEAR_SELECTED_MOVIES,
});

// Thunk
const getPossibleMovies = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POSSIBLE_MOVIES });
    const res = await movieApi.getMovies();
    if (res.status === 200) {
      dispatch({ type: GET_POSSIBLE_MOVIES_SUCCESS, movies: res.data.results });
      dispatch({ type: GET_MOVIES_SUCCESS, movies: res.data.results });
    } else {
      dispatch({
        type: GET_POSSIBLE_MOVIES_ERROR,
        error: {
          state: true,
          message: res.statusText,
        },
      });
    }
  } catch (e) {
    dispatch({
      type: GET_POSSIBLE_MOVIES_ERROR,
      error: {
        state: true,
        message: e.response,
      },
    });
  }
};

const getCanSelectMovies = () => async (dispatch, state) => {
  const movies = state().Booking.movies.allMovies;
  const schedules = state().Booking.schedule.schedules;
  // const selectedTheaters = state().Booking.selectedOption.selectedTheaters;

  if (!schedules.length) {
    dispatch({
      type: SET_CAN_SELECT_MOVIES,
      movies,
    });
    return;
  }

  const canSelectMovies = schedules.filter((schedule) =>
    movies.find((movie) => movie.name_kor === schedule.movie)
  );

  dispatch({
    type: SET_CAN_SELECT_MOVIES,
    movies: canSelectMovies,
  });
};

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
    dispatch(setScheduleRef(makeRefs(pastLog.schedules)));
    dispatch(
      setSelectedHour(
        pastLog.schedules.length
          ? +pastLog.schedules[0].start_time.slice(0, 2)
          : 0
      )
    );
    dispatch(getCanSelectMovies());
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
    dispatch(setScheduleRef(makeRefs(newSearchLog.schedules)));
    dispatch({ type: SET_SCHEDULES_LOG, payload: newSearchLog });
    dispatch(getCanSelectMovies());
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

const setReservation = (
  scheduleId,
  selectedSeat,
  seatPersonalType,
  totalPrice,
  basePrice,
  nextFunc,
  LoginFalseFunc
) => async (dispatch, useState) => {
  await dispatch(checkLogin());
  if (useState().userInfo.isLogin) {
    try {
      const SeatIds = await movieApi.getSeatId(scheduleId, selectedSeat);
      const reservationInfos = await movieApi.makeReservation(
        scheduleId,
        SeatIds.data.map((v) => v.seat_id).reverse(),
        seatPersonalType
      );
      console.log(reservationInfos);
      dispatch(
        setDefaultTicketInfo({
          seats: SeatIds.data,
          ticketType: seatPersonalType,
          price: totalPrice,
          reservationInfos: reservationInfos.data,
          priceList: {
            adult: basePrice * seatPersonalType.adult,
            teen: basePrice * 0.75 * seatPersonalType.teen,
            preferential: basePrice * 0.75 * seatPersonalType.preferential,
          },
        })
      );
      nextFunc();
    } catch (e) {
      console.error(e.response);
      if (e.status === 400) {
        dispatch(setOneBtn());
        dispatch(
          openModal(e.response.data.detail, () => {
            dispatch(setReservedSeat());
            dispatch(resetSeat());
          })
        );
      } else {
        dispatch(setOneBtn());
        dispatch(
          openModal("좌석 선택에 실패했습니다", () => {
            dispatch(setReservedSeat());
            dispatch(resetSeat());
          })
        );
      }
    }
  } else {
    console.error("로그인 만료");
    LoginFalseFunc();
  }
};

// 사가로 바꿔야함 날짜 or 날짜 & 타이틀로 상영 가능한 지역과 영화관 정보 가져오는 Thunk
const getTheatersCanBooking = (movies = []) => async (dispatch, state) => {
  dispatch({ type: GET_THEATERS_CAN_BOOKING });

  const selectedOption = state().Booking.selectedOption;
  const selectedMovies = selectedOption.selectedMovies;
  console.log("지역정보 가져올때 selectedMovies 확인", selectedMovies);
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
    dispatch({
      type: GET_THEATERS_CAN_BOOKING_SUCCESS,
      regions: pastLog.regions,
      theaters: pastLog.theaters,
    });
  } else {
    try {
      const resRegions = await movieApi.getScreeningRegions(
        selectedDate,
        movies.length ? movies : selectedMovies
      );

      const resTheaters = await movieApi.getScreeningTheaters(
        selectedDate,
        movies.length ? movies : selectedMovies
      );
      console.log("가져온 지역과 상영관", resRegions, resTheaters);

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

        dispatch({
          type: GET_THEATERS_CAN_BOOKING_SUCCESS,
          regions,
          theaters: resTheaters.data.results,
        });

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
  const canSelectRegions = state().Booking.canSelectLocation.regions;

  const newSelectedTheaters = canSelectTheaters.filter((theater) =>
    selectedTheaters.find((th) => th.name === theater.name)
  );

  let newSelectedRegion = "";
  if (selectedOption.selectedRegion) {
    newSelectedRegion =
      canSelectRegions[selectedOption.selectedRegion] > 0
        ? selectedOption.selectedRegion
        : "";
  }

  // 상영관 선택과 지역 선택 처리
  // dispatch(setSelectTheaters(newSelectedTheaters));
  dispatch({ type: SET_SELECTED_THEATERS, theaters: newSelectedTheaters });
  // dispatch(setSelectRegion(newSelectedRegion));
  dispatch({ type: SET_SELECTED_REGION, region: newSelectedRegion });
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

  console.log("뉴실렉트무비", newSelectedMovies);

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

  // yield put(setSelectTheaters(newSelectedTheaters)); // 상영관 선택 처리
  yield put({ type: SET_SELECTED_THEATERS, theaters: newSelectedTheaters });
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
  movies: {
    allMovies: [],
    canSelectMovies: [],
    loading: false,
  },
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
    loading: false,
  },
  schedule: {
    schedules: [],
    scheduleLogs: [],
    refs: {},
    loading: false,
  },
  selectedOption: {
    selectedDate: "2020-07-01",
    selectedRegion: "", // 선택한 지역
    selectedTheaters: [], // 선택한 영화관들
    nearbyTheaters: [], // 가까운 영화관
    selectedMovies: [],
    movieAgeGrade: "",
    screenHall: "",
    selectedHour: "0",
    selectedTime: "0",
    endTime: "",
    seletedSeat: [],
  },
  ticket: {
    number: "",
    reservationInfos: {},
    selectedDate: "",
    selectedTheather: "",
    selectedMovieTitle: "",
    movieAgeGrade: "",
    screenHall: "",
    screenType: "",
    seletedTime: "",
    endTime: "",
    seats: [],
    ticketType: {
      adult: 0,
      teen: 0,
      preferential: 0,
    },
    priceList: {
      adult: 0,
      teen: 0,
      preferential: 0,
    },
    price: 0,
    poster: "",
  },
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          allMovies: action.movies,
          loading: false,
        },
      };
    case GET_POSSIBLE_MOVIES:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true,
        },
      };
    case GET_POSSIBLE_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          canSelectMovies: action.movies,
          loading: false,
        },
      };
    case GET_SCHEDULES:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          loading: true,
        },
      };
    case GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          schedules: action.payload,
          loading: false,
        },
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
    case GET_THEATERS_CAN_BOOKING:
      return {
        ...state,
        canSelectLocation: {
          ...state.canSelectLocation,
          loading: true,
        },
      };
    case GET_THEATERS_CAN_BOOKING_SUCCESS:
      return {
        ...state,
        canSelectLocation: {
          ...state.canSelectLocation,
          regions: action.regions,
          theaters: action.theaters,
          loading: false,
        },
      };
    case SET_CAN_SELECT_MOVIES:
      return {
        ...state,
        movies: {
          ...state.movies,
          canSelectMovies: action.movies,
        },
      };

    case SET_SCHEDULE_REF:
      console.log("스케쥴 만든 것들", action.payload);
      return {
        ...state,
        schedule: {
          ...state.schedule,
          refs: action.payload,
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
    case SET_DEFAULT_TICKET_INFO:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          ...action.payload,
        },
      };
    case SET_TICKET_NUMBER:
      // console.log("티켓넘버", action.number);
      return {
        ...state,
        ticket: {
          ...state.ticket,
          number: action.number,
        },
      };

    case CLEAR_SELECTED_MOVIES:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          selectedMovies: [],
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
  setDefaultTicketInfo,
  getSchedules,
  setScheduleRef,
  getTheatersCanBooking,
  getPossibleMovies,
  setReservation,
  selectDate,
  setTicketNumber,
  clearSelectedMovies,
};
