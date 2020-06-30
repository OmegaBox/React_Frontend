import React from "react";
import "./Footer.scss";
import logo from "../../images/omegabox_logo.jpg"

const Footer = () => {
  return (
    <div>
      <footer className="footerLayout">
        <div>
          <img
            className="footerLogo"
            alt="omegaboxLogo"
            src={logo}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
