import React from "react";
import "./MainLink.scss";

const MainLink = () => {
  return <div>
    <ul className="mainLink">
      <li className="linkVIP">VIP LOUNGE</li>
      <li className="linkMember">멤버십</li>
      <li className="linkCard">할인카드안내</li>
      <li className="linkEvent">이벤트</li>
      <li>스토어</li>
    </ul>
  </div>;
};

export default MainLink;
