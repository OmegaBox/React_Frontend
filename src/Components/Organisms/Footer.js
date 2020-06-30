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
          <ul className="madeIn">
            <li>FRONT-END. &nbsp; 유성균 김규리 정호영 송치원 &emsp; BACK-END.&nbsp; 권효진 신동현</li>
            <li>GITHUB.&nbsp; <a href="https://github.com/OmegaBox"
            >https://github.com/OmegaBox</a></li>
            <li>Copyright &copy; 2020 OMEGABOX CORPORATION ALL RIGHTS RESERVED.</li>
          </ul>
          <ul className="snsIcons">
            <li className="snsTwitter">
              <img
                alt="트위터 아이콘"
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-twitter.png"
              />
            </li>
            <li className="snsFacebook">
              <img
                alt="페이스북 아이콘"
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-facebook.png"
              />
            </li>
            <li className="snsInstagram">
              <img
                alt="인스타그램 아이콘"
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-instagram.png"
              />
            </li>
            <li className="snsApple">
              <img
                alt="애플스토어 아이콘"
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-appstore.png"
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
