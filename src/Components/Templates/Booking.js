import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubBookingRouter from "../../Router/SubBookingRouter";

const Booking = () => {
  return (
    <div>
      <Header />
      <SubBookingRouter />
      <Footer />
    </div>
  );
};

export default Booking;
