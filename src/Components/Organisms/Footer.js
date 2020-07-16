import React from "react";
import "./style/Footer.scss";
import logo from "../../images/omegaGray.png";

const Footer = () => {
  return (
    <div>
      <footer className="footerLayout">
        <div className="footerWrap">
          <img className="footerLogo" alt="omegaboxLogo" src={logo} />
          <ul className="madeIn">
            <li>
              FRONT-END. &nbsp; 유성균 김규리 정호영 송치원 &emsp;
              BACK-END.&nbsp; 권효진 신동현
            </li>
            <li>
              GITHUB.&nbsp;{" "}
              <a href="https://github.com/OmegaBox">
                https://github.com/OmegaBox
              </a>
            </li>
            <li>
              Copyright &copy; 2020 OMEGABOX CORPORATION ALL RIGHTS RESERVED.
            </li>
          </ul>
          <ul className="snsIcons">
            <li className="snsTwitter">
              <a
                href="https://twitter.com/megaboxon"
                target="_blank"
                title="메가박스 트위터 이동"
              >
                <img
                  alt="트위터"
                  src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-twitter.png"
                />
              </a>
            </li>
            <li className="snsFacebook">
              <a
                href="https://www.facebook.com/megaboxon"
                target="_blank"
                title="메가박스 페이스북 이동"
              >
                <img
                  alt="페이스북"
                  src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-facebook.png"
                />
              </a>
            </li>
            <li className="snsInstagram">
              <a
                href="https://www.instagram.com/accounts/login/?next=/megaboxon/"
                target="_blank"
                title="메가박스 인스타그램 이동"
              >
                <img
                  alt="인스타그램"
                  src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-instagram.png"
                />
              </a>
            </li>
            <li className="snsGoogle">
              <a
                href="https://play.google.com/store/apps/details?id=com.megabox.mop"
                target="_blank"
                title="구글 플레이스토어 이동"
              >
                <img
                  alt="구글 플레이스토어"
                  src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-googleplay.png"
                />
              </a>
            </li>
            <li className="snsApple">
              <a
                href="https://apps.apple.com/kr/app/megabox/id894443858?l=ko&ls=1"
                target="_blank"
                title="애플 앱스토어 이동"
              >
                <img
                  alt="애플스토어"
                  src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-appstore.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
