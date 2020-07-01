import React from "react";
import "./style/MainLink.scss";

const MainLink = () => {
  return (
    <div className="mainLinkLayout">
      <ul className="mainLink">
        <li className="linkVIP">
          <span>VIP LOUNGE</span>
        </li>
        <li className="linkMember">
          <span>멤버십</span>
          </li>
        <li className="linkCard">
          <span>할인카드안내</span>
          </li>
        <li className="linkEvent">
          <span>이벤트</span>
        </li>
        <li className="linkStore">
          스토어
        </li>
      </ul>
      <div className="grandOpeningLayout">
        <h3>LIFE THEATER MEGABOX</h3>
        <p><strong>GRAND <br />OPENING</strong></p>
        <ul className="openingTheaters">
          <li className="openInfor">
            <div className="openInforText">
              <span>
                <em>신규오픈</em>
              </span>
              <p>
                <span>부산/대구/경상</span><br />
                <strong>창원내서</strong>
              </p>
              <p>20.06.24</p>
            </div>
          </li>
          <li className="openInfor">
            <div className="openInforText">
              <span>
                <em>신규오픈</em>
              </span>
              <p>
                <span>대전/충청/세종</span><br />
                <strong>세종청사</strong>
              </p>
              <p>20.06.24</p>
            </div>
          </li>
          <li className="openInfor">
            <div className="openInforText">
              <span>
                <em>신규오픈</em>
              </span>
              <p>
                <span>대전/충청/세종</span><br />
                <strong>대전현대아울렛</strong>
              </p>
              <p>20.06.24</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLink;
