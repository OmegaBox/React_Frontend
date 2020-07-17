import React from "react";
import "./style/MainNotice.scss";

const MainNotice = () => {
  return (
    <div>
      <div className="mainNoticeLayout">
        <ul className="mainNotice">
          <li className="customCenter">
            <div className="customerIcon"></div>
            <span>고객센터</span>
          </li>
          <li className="qestions">
            <div className="qestionsIcon"></div>
            <span>자주 묻는 질문</span>
          </li>
          <li className="inquiry">
            <div className="inquiryIcon"></div>
            <span>1:1 문의</span>
          </li>
          <li className="groupInquiry">
            <div className="groupInquiryIcon"></div>
            <span>단체/대관문의</span>
          </li>
          <li className="lostInquiry">
            <div className="lostInquriyIcon"></div>
            <span>분실물 문의/접수</span>
          </li>
          <li className="privateInquiry">
            <div className="privateIcon"></div>
            <span>
              더 부티크 프라이빗 <br /> 대관예매
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNotice;
