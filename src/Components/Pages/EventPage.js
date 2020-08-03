import React, { useEffect } from "react";
import Event from "../Templates/Event";

const EventPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <Event />;
};

export default EventPage;
