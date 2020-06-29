const SUCCESS = "booking/SUCCESS";
const ERROR = "booking/ERROR";
const LOADING = "booking/LOADING";

const initialState = {
  selectedOption: {
    selectedDate: "2020-07-10",
    selectedtheather: ["강남", "목동"],
    selectedMovieTitle: ["살아있다", "결백"],
    seletedTime: "19:40",
    seletedSeat: [],
  },
  ticket: {
    selectedDate: "2020-07-10",
    selectedtheather: "강남",
    selectedMovieTitle: "살아있다",
    movieAgeGrade: "All",
    seletedTime: "19:40",
    seats: [],
    ticketType: [],
    price: 30000,
  },
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export { bookingReducer };
