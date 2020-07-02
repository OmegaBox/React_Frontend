import { combineReducers } from "redux";

import { bookingReducer } from "../Reducer/bookingReducer";
import { movieReducer } from "../Reducer/movieReducer";
import { userInfoReducer } from "../Reducer/userInfoReducer";
import seatReducer from "../Reducer/bookingSeatReducer";
import modalReducer from "../Reducer/modalReducer";

const rootReducer = combineReducers({
  Booking: bookingReducer,
  Movie: movieReducer,
  userInfo: userInfoReducer,
  Seat: seatReducer,
  modal: modalReducer,
});

export { rootReducer };
