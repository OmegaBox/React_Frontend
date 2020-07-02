const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (width, height, text, event) => ({
  type: OPEN_MODAL,
  width,
  height,
  text,
  event,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
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
        width: action.width,
        height: action.height,
        text: action.text,
        event: action.event || null,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        ...initModal,
      };
    default:
      return state;
  }
};

export default modalReducer;
