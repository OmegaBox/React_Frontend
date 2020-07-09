import React from "react";

const TheaterEvent = () => {
  return (
    <section className="megaPick">
      <div className="sectionTitleWrap">
        <h3 className="title">극장</h3>
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
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/02/lyfP2NsUYaLxILQSWGfBaAo1yRO5q3tc.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">함께 만드는 안전한 영화관람</h4>
              <p className="eventDate">2020.06.02 ~ 2020.12.31</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/30/2Sx1dL0sMteqhP7a4CWkHxv7tMxeW9DR.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                ARTNINE 극장에서 다시 봄, 영화 6,000원 할인 이벤트
              </h4>
              <p className="eventDate">2020.06.30 ~ 2020.07.31</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/17/fyUZMt0VbsGQSgxidD33vq3wwosnFY5J.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                힐링 프리미엄 극장, 창원내서 6월 24일 (수) OPEN!
              </h4>
              <p className="eventDate">2020.06.17 ~ 2020.08.31</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/17/1JrUfY3Os1RSUbr77IrrOG9nLuMxPkS1.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                세종에서 제일 편안한 극장, 세종청사 6월 24일(수) OPEN!
              </h4>
              <p className="eventDate">2020.06.17 ~ 2020.08.31</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};
export default TheaterEvent;
