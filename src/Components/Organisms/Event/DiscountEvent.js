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
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/GcDx0cF1WsWfm11gJYI1J88kzV60DFD9.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                오리지널 티켓 No.16 온워드오리지널 티켓 No.16 온워드
              </h4>
              <p className="eventDate">2020.06.17 ~ 2020.07.14</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/GcDx0cF1WsWfm11gJYI1J88kzV60DFD9.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">오리지널 티켓 No.16 온워드</h4>
              <p className="eventDate">2020.06.17 ~ 2020.07.14</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/GcDx0cF1WsWfm11gJYI1J88kzV60DFD9.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">오리지널 티켓 No.16 온워드</h4>
              <p className="eventDate">2020.06.17 ~ 2020.07.14</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/16/GcDx0cF1WsWfm11gJYI1J88kzV60DFD9.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">오리지널 티켓 No.16 온워드</h4>
              <p className="eventDate">2020.06.17 ~ 2020.07.14</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};
export default DiscountEvent;
