const RESET = "RESET";
const CHANGE_COUNT = "CHANGE_COUNT";
const SET_PRICE = "SET_PRICE";
const SET_SELECTSEAT = "SET_SELECTSEAT";

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
        selectedSeat: [...state.selectedSeat, action.seat],
      };
    default:
      return state;
  }
};

export default seatReducer;