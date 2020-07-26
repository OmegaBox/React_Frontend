const SELECT_LOCATION = "theaterInfo/SELECT_LOCATION";
const SELECT_THEATER = "theaterInfo/SELECT_THEATER";

const initialState = {
  selectedLoaction: "서울",
  selectedTheater: "강남",
};

const theaterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return {
        ...state,
        selectedLoaction: action.loaction,
      };
    case SELECT_THEATER:
      return {
        ...state,
        selectedTheater: action.theater,
      };
    default:
      return state;
  }
};

export { theaterInfoReducer, SELECT_LOCATION, SELECT_THEATER };
