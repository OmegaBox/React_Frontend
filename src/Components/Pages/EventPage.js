import React, { useEffect } from "react";
import Event from "../Templates/Event";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../Reducer/userInfoReducer";

const EventPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
    window.scrollTo(0, 0);
  });
  return <Event />;
};

export default EventPage;
