import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import BookingRouter from "../../Router/SubBookingRouter";

const Booking = () => {
  return (
    <div>
      <Header />
      <BookingRouter />
      <Footer />
    </div>
  );
};

export default Booking;
