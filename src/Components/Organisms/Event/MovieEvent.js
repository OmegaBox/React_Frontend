import React from "react";

const MovieEvent = () => {
  return (
    <section className="megaPick">
      <div className="sectionTitleWrap">
        <h3 className="title">영화</h3>
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
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/09/EhhZHKXVOPSohlN8mulOaDI8mjvszoqL.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                &lt;트로이 디렉터스 컷&gt; 2주차 스페셜 포스터 증정 이벤트
              </h4>
              <p className="eventDate">2020.07.09 ~ 2020.07.15</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/03/vTGZuqAzhxjhX5ORjsczzZChtthkp5LZ.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                &lt;너와 파도를 탈 수 있다면&gt;스페셜 현장 경품 이벤트
              </h4>
              <p className="eventDate">2020.07.08 ~ 2020.07.28</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/03/aGdD4WmAlIbiNqTxZmd0HJu22vYn3BGp.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                &lt;#살아있다&gt; 앵콜! 선착순 빵원 티켓
              </h4>
              <p className="eventDate">2020.07.06 ~ 2020.07.14</p>
            </div>
          </article>
        </li>
        <li>
          <article className="eventItem">
            <div className="imgWrap">
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/07/Dubhntna3ihPudFbhNZwlgndBKIHvRWc.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                &lt;라스 폰 트리에 감독전&gt; 추가 특별 상영 회차 안내
              </h4>
              <p className="eventDate">2020.06.25 ~ 2020.07.14</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};
export default MovieEvent;
