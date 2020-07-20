import React from "react";

const MegaPick = () => {
  return (
    <section className="megaPick">
      <div className="sectionTitleWrap">
        <h3 className="title">메가 Pick</h3>
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
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/09/l7d2Hn5fAzSW5GV8DxJCWMgC7OTDjOm4.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">오리지널 티켓 No.17 &lt;반도&gt;</h4>
              <p className="eventDate">2020.07.15 ~ 2020.07.31</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/08/ZOPduw7LHNOwyCVHEhp3jJ2ufhzcjVxC.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">모바일오더런칭! 슬기로운 소비생활!</h4>
              <p className="eventDate">2020.07.08 ~ 2020.08.31</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/06/15/41KkBMTucXIUt1P6eaXUQVJ0wEd6i709.jpg"
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
                src="https://img.megabox.co.kr/SharedImg/event/2020/04/20/WIJLaFbRkGTbm4J3DQjg5oWSIDkWHygH.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">새로워진 포인트 찐! 활용법</h4>
              <p className="eventDate">2020.04.29 ~ 2020.07.31</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};
export default MegaPick;
