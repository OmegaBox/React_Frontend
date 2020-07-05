import React from "react";
import { Switch, Route } from "react-router-dom";
import BookingSelectTimeAndTheater from "../Components/Organisms/Booking/BookingSelectTimeAndTheater";
import BookingSelectSeat from "../Components/Organisms/Booking/BookingSelectSeat";
import BookingPayment from "../Components/Organisms/Booking/BookingPayment";
import BookingTicket from "../Components/Organisms/Booking/BookingTicket";

const SubBookingRouter = () => {
  return (
    <Switch>
      <Route exact path="/booking" component={BookingSelectTimeAndTheater} />
      <Route path="/booking/seat" component={BookingSelectSeat} />
      <Route path="/booking/payment" component={BookingPayment} />
      <Route path="/booking/ticket" component={BookingTicket} />
    </Switch>
  );
};

export default SubBookingRouter;
