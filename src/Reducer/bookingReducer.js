import { select, put, call, takeLatest } from "redux-saga/effects";

const SUCCESS = "booking/SUCCESS";
const ERROR = "booking/ERROR";
const LOADING = "booking/LOADING";

const SET_SELECTED_DATE = "booking/SELECTED_DATE";
const SET_SELECTED_HOUR = "booking/SELECTED_HOUR";
const SET_SELECTED_REGION = "booking/SELECTED_REGION";
const SET_SELECTED_THEATERS = "booking/SELECTED_THEATER";

const SELECT_THEATER = "booking/SELECT_THEATER";
const GET_SCHEDULES = "booking/GET_SCHEDULES";

const setSelectedDate = (date) => ({ type: SET_SELECTED_DATE, date });
const setSelectedHour = (hour) => ({ type: SET_SELECTED_HOUR, hour });
const setSelectRegion = (region) => ({ type: SET_SELECTED_REGION, region });
const setSelectTheaters = (theaters) => ({
  type: SET_SELECTED_THEATERS,
  theaters,
});

const selectTheater = (theater) => ({ type: SELECT_THEATER, theater });

function* selectTheaterSaga(action) {
  let selectedTheaters = yield select();
  selectedTheaters = selectedTheaters.Booking.selectedOption.selectedTheathers;

  let newSelectedTheaters = [];

  // 이미 리스트에 있다면 상태에서 빼고, 없다면 넣는다. 3개이상 못들어간다.
  if (selectedTheaters.includes(action.theater)) {
    newSelectedTheaters = selectedTheaters.filter(
      (theater) => theater !== action.theater
    );
  } else {
    if (selectedTheaters.length === 3) return;

    newSelectedTheaters = selectedTheaters.slice();
    newSelectedTheaters.push(action.theater);
  }

  yield put(setSelectTheaters(newSelectedTheaters));
}

function* bookingSaga() {
  yield takeLatest(SELECT_THEATER, selectTheaterSaga);
}

const initialState = {
  selectedOption: {
    selectedDate: "",
    selectedRegion: "",
    selectedTheathers: [],
    selectedMovieTitle: ["살아있다", "결백"],
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
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
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
          selectedTheathers: action.theaters,
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
  setSelectedDate,
  setSelectedHour,
  setSelectRegion,
  setSelectTheaters,
  selectTheater,
};
