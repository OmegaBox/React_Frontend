import React from "react";

const DiscountEvent = () => {
  return (
    <section className="megaPick">
      <div className="sectionTitleWrap">
        <h3 className="title">제휴/할인</h3>
        <button type="button" className={["btn", "xSmall", "more"].join(" ")}>
          <span>더보기</span>
          <span className={["icon", "arrowRight"].join(" ")}></span>
        </button>
      </div>
      <ul className="eventList">
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/ZSXFKr4TQFcybGQnY2N7Si3U3BLZnCHd.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                [KB 랩비트 페스티벌 X 메가박스] 티켓패키지 판매!!
              </h4>
              <p className="eventDate">2020.06.16 ~ 2020.09.20</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/30/xwGzvHgKEsRcBTh2e789Z4WItjU5aUFj.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                [서울시민카드 X 메가박스] 영화 & 콤보 할인 이벤트
              </h4>
              <p className="eventDate">2020.03.02 ~ 2020.12.31</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/02/04/6xwb3vDWiMlilkd7Qa9ahgIOIpHpKVHG.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">SKT 데이터 PLUS 혜택패키지!</h4>
              <p className="eventDate">2020.04.15 ~ 2021.01.31</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/02/04/PmnJGzXWLESAHYLXPrTIV5rWF24BvPu4.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">T멤버십 VIP Pick!</h4>
              <p className="eventDate">2020.04.12 ~ 2020.01.31</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};
export default DiscountEvent;
