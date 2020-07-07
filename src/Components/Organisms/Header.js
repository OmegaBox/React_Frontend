import React from "react";
import "./style/Header.scss";
import SubHeader from "./SubHeader";
import MainHeader from "./MainHeader";
import { useLocation } from 'react-router-dom'

const Header = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      < MainHeader />
    </div>
  );
};

export default Header;