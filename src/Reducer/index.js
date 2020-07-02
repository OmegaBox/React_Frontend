import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { bookingReducer, bookingSaga } from "../Reducer/bookingReducer";
import { movieReducer } from "../Reducer/movieReducer";
import { userInfoReducer } from "../Reducer/userInfoReducer";
import { initMovieReducer } from "../Reducer/initMovieReducer";
import seatReducer from "../Reducer/bookingSeatReducer";
import modalReducer from "../Reducer/modalReducer";

const rootReducer = combineReducers({
  Booking: bookingReducer,
  Movie: movieReducer,
  initMovie: initMovieReducer,
  userInfo: userInfoReducer,
  Seat: seatReducer,
  modal: modalReducer,
});

function* rootSaga() {
  yield all([bookingSaga()]);
}

export { rootReducer, rootSaga };
