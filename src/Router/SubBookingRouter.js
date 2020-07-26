import React from "react";
import { Switch, Route } from "react-router-dom";
import BookingSelectSeat from "../Components/Organisms/Booking/BookingSelectSeat";
import BookingPayment from "../Components/Organisms/Booking/BookingPayment";
import BookingTicket from "../Components/Organisms/Booking/BookingTicket";
import BookingSelectMovie from "../Components/Organisms/Booking/BookingSelectMovie";

const SubBookingRouter = () => {
  return (
    <Switch>
      <Route exact path="/booking" component={BookingSelectMovie} />
      <Route path="/booking/seat" component={BookingSelectSeat} />
      <Route path="/booking/payment" component={BookingPayment} />
      <Route path="/booking/ticket" component={BookingTicket} />
    </Switch>
  );
};

export default SubBookingRouter;
