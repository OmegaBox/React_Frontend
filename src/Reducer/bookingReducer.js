const SUCCESS = "booking/SUCCESS";
const ERROR = "booking/ERROR";
const LOADING = "booking/LOADING";

const SET_SELECTED_DATE = "booking/SELECTED_DATE";

const setSelectedDate = (date) => ({ type: SET_SELECTED_DATE, date });

const initialState = {
  selectedOption: {
    selectedDate: "",
    selectedtheather: ["강남", "목동"],
    selectedMovieTitle: ["살아있다", "결백"],
    seletedTime: "19:40",
    seletedSeat: [],
  },
  ticket: {
    selectedDate: "2020-07-10",
    selectedtheather: "강남",
    selectedMovieTitle: "살아있다",
    seletedTime: "19:40",
    seats: [],
    ticketType: [],
    price: 30000,
  },
};

const bookingReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedOption: {
          ...state.selectedOption,
          selectedDate: action.date,
        },
      };
    case SUCCESS:
    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export { bookingReducer, setSelectedDate };
