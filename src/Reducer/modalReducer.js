const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const SET_SIZE = "SET_SIZE";

export const openModal = (text, event) => ({
  type: OPEN_MODAL,
  text,
  event,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const setSize = (width, height) => ({
  type: SET_SIZE,
  width,
  height,
});

const initModal = {
  modal: false,
  width: "400px",
  height: "185px",
  text: "",
  event: null,
};

const modalReducer = (state = initModal, action) => {
  switch (action.type) {
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
        ...initModal,
      };
    case SET_SIZE:
      return {
        ...state,
        width: action.width || "400px",
        height: action.height || "185px",
      };
    default:
      return state;
  }
};

export default modalReducer;
