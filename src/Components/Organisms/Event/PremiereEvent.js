import React from "react";

const PremiereEvent = () => {
  return (
    <section className="megaPick">
      <div className="sectionTitleWrap">
        <h3 className="title">시사회/무대인사</h3>
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
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/03/dchyDV5Quoxr0HZp0KGT0dxTqcId3zck.jpg"
                alt=""
              />
            </div>
            <div className="eventContent">
              <h4 className="eventTitle">
                &lt;불량한 가족&gt; 개봉주 무대인사
              </h4>
              <p className="eventDate">2020.07.10 ~ 2020.07.10</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};
export default PremiereEvent;
