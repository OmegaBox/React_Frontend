const RESET = "RESET";
const CHANGE_COUNT = "CHANGE_COUNT";
const SET_SELECTSEAT = "SET_SELECTSEAT";

const initSeatState = {
  personal: {
    adult: 0,
    teen: 0,
    preferential: 0,
  },
  selectedSeat: [],
};

export const resetSeat = () => ({
  type: RESET,
});
export const changePersonalCount = (type, value) => ({
  type: CHANGE_COUNT,
  personType: type,
  value: value,
});
export const setSelectSeat = (seat) => ({
  type: SET_SELECTSEAT,
  selected: seat,
});

export const resetThunk = (url) => (dispatch) => {
  console.log("thunk", url);
  if (url === "/booking/seat") dispatch(resetSeat());
};

const seatReducer = (state = initSeatState, action) => {
  switch (action.type) {
    case RESET:
      return { ...initSeatState };
    case CHANGE_COUNT:
      return {
        ...state,
        personal: {
          ...state.personal,
          [action.personType]: action.value,
        },
      };
    case SET_SELECTSEAT:
      return {
        ...state,
        selectedSeat:
          state.selectedSeat.indexOf(action.selected) > -1
            ? state.selectedSeat.filter((seat) => seat != action.selected)
            : [...state.selectedSeat, action.selected].sort(
                (a, b) =>
                  a[0].charCodeAt() - b[0].charCodeAt() ||
                  +a.slice(1) - +b.slice(1)
              ),
      };
    default:
      return state;
  }
};

export default seatReducer;
