const SELECT_REGION = "theaterInfo/SELECT_REGION";
const SELECT_THEATER = "theaterInfo/SELECT_THEATER";

const initialState = {
  selectedRegion: "서울",
  selectedTheater: {
    name: "강남",
    location: {
      lat: 37.498023,
      lng: 127.026437,
    },
  },
};

const theaterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_REGION:
      return {
        ...state,
        selectedRegion: action.region,
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

export { theaterInfoReducer, SELECT_REGION, SELECT_THEATER };
