import React from "react";

const Point = () => {
  return (
    <div className="pointWrap">
      <h3 className="mypageTitle">포인트 이용내역</h3>
      <section className="pointInfo">
        <div>
          <h4>사용가능 포인트</h4>
          <p>0p</p>
        </div>
        <ul>
          <li>
            적립예정 <span>0p</span>
          </li>
          <li>
            소멸예정 <span>0p</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Point;
