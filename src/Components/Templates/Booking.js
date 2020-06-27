import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import NavSample from "../Organisms/NavSample";
import SubBookingRouter from "../../Router/SubBookingRouter";

const Booking = () => {
  return (
    <div>
      <Header />
      <SubBookingRouter />
      <Footer />
      <NavSample />
    </div>
  );
};

export default Booking;
