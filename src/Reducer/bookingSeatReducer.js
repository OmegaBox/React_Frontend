export const RESET = "RESET";
export const CHANGE_COUNT = "CHANGE_COUNT";
export const SET_PRICE = "SET_PRICE";
export const SET_SELECTSEAT = "SET_SELECTSEAT";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

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

const initSeatModal = {
  modal: false,
  text: "",
  event: null,
};

const seatReducer = (
  state = { ...initSeatState, ...initSeatModal },
  action
) => {
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
    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
        text: action.text,
        event: action.event || null,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        ...initSeatModal,
      };
    default:
      return state;
  }
};

export default seatReducer;
