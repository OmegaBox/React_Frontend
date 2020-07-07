import React, { useState } from "react";
import { useSelector } from "react-redux";

const MyMovieStoryTimeLine = () => {
  const { commentMovie, favoriteMovies, watchedMovies } = useSelector(
    (state) => ({
      commentMovie: state.userInfo.commentMovies,
      favoriteMovies: state.userInfo.favoriteMovies,
      watchedMovies: state.userInfo.watchedMovies,
    })
  );

  const [timeLine, setTimeLine] = useState(
    commentMovie.concat(favoriteMovies).concat(watchedMovies)
  );
  return (
    <section className="timeLine">
      <h4 className="a11yHidden">무비타임라인</h4>
      <div className="yearCarouselWrap">
        <button type="button" className="btnPrev"></button>
        <ul className="carousel">
          <li>
            <button type="button" className="active">
              2020
            </button>
          </li>
        </ul>
        <button type="button" className="btnNext"></button>
      </div>
      <ul className="movieList">
        {timeLine.length ? (
          <li className="dateDivision">
            <div className="date">2020.06.29</div>
            <article className="movieItem">
              <div className="poster">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
                  alt=""
                />
              </div>
              <ul className={["info", "clearfix"].join(" ")}>
                <li className="tag">
                  <h5 className="a11yHidden">구분</h5>
                  <p>관람평</p>
                </li>
                <li className="title">
                  <h5 className="a11yHidden">영화명</h5>
                  <p>결백</p>
                </li>
                <li className="evalPoint">
                  <h5 className="a11yHidden">평가점수</h5>
                  <p>7.4</p>
                  <span className="hashTag">OST</span>
                  <span className="hashTag">배우</span>
                </li>
                <li className="evalComment">
                  <h5 className="a11yHidden">관람평</h5>
                  <p>겁나 강추! 꼭 봐요! 안보면 후회!</p>
                </li>
              </ul>
            </article>
          </li>
        ) : (
          <li className="listNull">리스트가 없습니다.</li>
        )}

        <li>
          <article className="movieItem">
            <div className="poster">
              <img
                src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
                alt=""
              />
            </div>
            <ul className={["info", "clearfix"].join(" ")}>
              <li className="tag">
                <h5 className="a11yHidden">구분</h5>
                <p>본영화</p>
              </li>
              <li className="title">
                <h5 className="a11yHidden">영화명</h5>
                <p>결백</p>
              </li>
              <li className="theater">
                <h5 className="a11yHidden">극장</h5>
                <p>강남</p>
              </li>
              <li className="theater2">
                <h5 className="a11yHidden">상영관</h5>
                <p>4관</p>
              </li>
              <li className="viewingDate">
                <h5 className="a11yHidden">관람일시</h5>
                <p>2020.06.30 14:20</p>
              </li>
            </ul>
          </article>
        </li>
        <li>
          <article className="movieItem">
            <div className="poster">
              <img
                src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
                alt=""
              />
            </div>
            <ul className={["info", "clearfix"].join(" ")}>
              <li className="tag">
                <h5 className="a11yHidden">구분</h5>
                <p>보고싶어</p>
              </li>
              <li className="title">
                <h5 className="a11yHidden">영화명</h5>
                <p>결백</p>
              </li>
              <li className="point">
                <h5>개봉일</h5>
                <p>2020.06.05</p>
              </li>
              <li className="director">
                <h5>감독</h5>
                <p>박상현</p>
              </li>
              <li className="genre">
                <h5>장르</h5>
                <p>드라마/111분</p>
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default MyMovieStoryTimeLine;
