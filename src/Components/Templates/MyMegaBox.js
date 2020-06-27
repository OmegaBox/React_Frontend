import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import Snb from "../Organisms/MyPage/Snb";
import BookingHistoryWrap from "../Organisms/MyPage/BookingHistoryWrap";

const MyMegaBox = () => {
  return (
    <div>
      <Header />
      <Snb />
      <BookingHistoryWrap />
      <Footer />
    </div>
  );
};

export default MyMegaBox;
