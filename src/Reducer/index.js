import { combineReducers } from "redux";

import { bookingReducer } from "../Reducer/bookingReducer";
import { movieReducer } from "../Reducer/movieReducer";
import { userInfoReducer } from "../Reducer/userInfoReducer";

const rootReducer = combineReducers({
  Booking: bookingReducer,
  Movie: movieReducer,
  userInfo: userInfoReducer,
});

export { rootReducer };
