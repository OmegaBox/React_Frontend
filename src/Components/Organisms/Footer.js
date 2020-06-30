import React from "react";
import "./Footer.scss";
import logo from "../../images/omegaGray.png"

const Footer = () => {
  return (
    <div>
      <footer className="footerLayout">
        <div className="footerWrap">
          <img
            className="footerLogo"
            alt="omegaboxLogo"
            src={logo}
          />
          <p>
            FRONT-END 유성균 김규리 정호영 송치원
          </p>
          <p>
            BACK-END 권효진 신동현
          </p>
          <p>Copyright since &copy; OMEGABOX CORPORATION ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
