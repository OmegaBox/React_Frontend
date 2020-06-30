import React from "react";

const MypageDashBoard = () => {
  return (
    <div className="mypageDashBoard">
      <h3 className="a11yHidden">마이페이지 정보</h3>
      <section className="mypagePersnalInfo">
        <article className="grade">
          <p className="name">
            김규리님은
            <br />
            일반등급입니다.
          </p>
          <a href="#" className="btnPersnalEdit">
            개인정보수정
            <span className={["icon", "arrowRight"].join(" ")}></span>
          </a>
        </article>
        <article className="point">
          <div className="subTitleWrap">
            <h4 className="titleText">총 보유 포인트</h4>
            <a href="#" className={["icon", "arrowRight"].join(" ")}></a>
          </div>
          <p className="totalPoint">0 P</p>
          <p>
            적립예정 <span className="textMedium">0 P</span>
          </p>
          <p>
            소멸예정{" "}
            <span className={["textRed", "textMedium"].join(" ")}>0 P</span>
          </p>
        </article>
        <article className="likeTheater">
          <div className="subTitleWrap">
            <h4 className="titleText">선호극장</h4>
            <button type="button" className={["btn", "xSmall"].join(" ")}>
              변경
              <span className={["icon", "arrowRight"].join(" ")}></span>
            </button>
          </div>
          <ul className="theaterList">
            <li>송파파크하비오</li>
            <li>강남대로(씨티)</li>
            <li>코엑스</li>
          </ul>
        </article>
      </section>

      <section className="mypageMovieStoryInfo">
        <div className="subTitleWrap">
          <h4 className="titleText">나의 무비스토리</h4>
          <button
            type="button"
            className={["btn", "xSmall", "white", "fill"].join(" ")}
          >
            본 영화 등록
          </button>
        </div>
        <ul className={["roundBox", "movieStoryInfoList"].join(" ")}>
          <li>
            <a href="#">
              <span className="amount">0</span>
              본영화
            </a>
          </li>
          <li>
            <a href="#">
              <span className="amount">0</span>
              한줄평
            </a>
          </li>
          <li>
            <a href="#">
              <span className="amount">0</span>
              보고싶어
            </a>
          </li>
        </ul>
      </section>
      <section className="mypagePreferenceInfo">
        <div className="subTitleWrap">
          <h4 className="titleText">선호관람정보</h4>
          <button
            type="button"
            className={["btn", "xSmall", "white", "fill"].join(" ")}
          >
            설정
          </button>
        </div>
        <ul className={["roundBox", "bullet"].join(" ")}>
          <li>내 선호장르</li>
          <li>내 선호시간</li>
        </ul>
      </section>
      <section className="mypageBookingHistory">
        <div className="subTitleWrap">
          <h4 className="titleText">나의 예매내역</h4>
          <a href="#" className={["btnMore", "btn", "xSmall"].join(" ")}>
            더보기
            <span className={["icon", "arrowRight"].join(" ")}></span>
          </a>
        </div>
        <ul className="movieList">
          <li className="listNull">리스트가 없습니다.</li>
          <li>
            <article className="movieItem">
              <div className="poster">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
                  alt=""
                />
              </div>
              <ul className={["info", "clearfix"].join(" ")}>
                <li className="paymentDate">
                  <h5>결제일시</h5>
                  <p>2020.06.30 14:20</p>
                </li>
                <li className="bookingNumber">
                  <h5 className="a11yHidden">예매번호</h5>
                  <p>2020-156-5456</p>
                </li>
                <li className="title">
                  <h5 className="a11yHidden">영화명</h5>
                  <p>결백</p>
                </li>
                <li className="theater">
                  <h5 className="a11yHidden">극장/상영관</h5>
                  <p>강남/4관</p>
                </li>
                <li className="viewingDate">
                  <h5 className="a11yHidden">관람일시</h5>
                  <p>2020.06.30 14:20</p>
                </li>
              </ul>
              <button
                type="button"
                className={["btn", "xSmall", "outLine", "lightGray"].join(" ")}
              >
                예매취소
              </button>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MypageDashBoard;
