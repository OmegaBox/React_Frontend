const RESET = "RESET";
const CHANGE_COUNT = "CHANGE_COUNT";
const SET_PRICE = "SET_PRICE";
const SET_SELECTSEAT = "SET_SELECTSEAT";

export const resetSeat = () => ({
  type: RESET,
});
export const changePersonalCount = (type, value) => ({
  type: CHANGE_COUNT,
  personType: type,
  value: value,
});
export const setPrice = (price) => ({
  type: SET_PRICE,
  price: price,
});
export const setSelectSeat = (seat) => ({
  type: SET_SELECTSEAT,
  selected: seat,
});

const initSeatState = {
  personal: {
    adult: 0,
    teen: 0,
    preferential: 0,
  },
  price: {
    adult: 0,
    teen: 0,
    preferential: 0,
  },
  selectedSeat: [],
};

const seatReducer = (state = initSeatState, action) => {
  switch (action.type) {
    case RESET:
      return initSeatState;
    case CHANGE_COUNT:
      return {
        ...state,
        personal: {
          ...state.personal,
          [action.personType]: action.value,
        },
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.price,
      };
    case SET_SELECTSEAT:
      return {
        ...state,
        selectedSeat:
          state.selectedSeat.indexOf(action.selected) > -1
            ? state.selectedSeat.filter((seat) => seat != action.selected)
            : [...state.selectedSeat, action.selected],
      };
    default:
      return state;
  }
};

export default seatReducer;
