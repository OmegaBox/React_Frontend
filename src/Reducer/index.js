import { combineReducers } from "redux";

import { bookingReducer } from "../Reducer/bookingReducer";
import { movieReducer } from "../Reducer/movieReducer";
import { userInfoReducer } from "../Reducer/userInfoReducer";
import seatReducer from "../Reducer/bookingSeatReducer";
import utilModalReducer from "../Reducer/utilModalReducer";

const rootReducer = combineReducers({
  Booking: bookingReducer,
  Movie: movieReducer,
  userInfo: userInfoReducer,
  Seat: seatReducer,
  Modal: utilModalReducer,
});

export { rootReducer };
