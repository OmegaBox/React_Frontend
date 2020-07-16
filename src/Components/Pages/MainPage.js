import React, { useEffect } from "react";
import Main from "../Templates/Main";
import { useDispatch } from "react-redux";
import { getMovies } from "../../Reducer/movieReducer";
import { checkLogin } from "../../Reducer/userInfoReducer";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMovies());
    dispatch(checkLogin());
  }, [dispatch]);

  return <Main />;
};

export default React.memo(MainPage);
