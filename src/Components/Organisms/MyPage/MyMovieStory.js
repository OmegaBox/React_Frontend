import React from "react";

const MyMovieStory = () => {
  return (
    <div className="myMovieStoryWrap">
      <h3 className="mypageTitle">나의 무비스토리</h3>
      <ul className="myMovieStoryTab">
        <li className="active">
          <a href="#">무비타임라인</a>
        </li>
        <li>
          <a href="#">한줄평</a>
        </li>
        <li>
          <a href="#">본영화</a>
        </li>
        <li>
          <a href="#">보고싶어</a>
        </li>
      </ul>
      <section className="timeLine">
        <h4 className="a11yHidden">무비타임라인</h4>
        <div className="yearCarouselWrap">
          <button type="button" className="btnPrev"></button>
          <ul className="carousel">
            <li>
              <button type="button" class="active">
                2020
              </button>
            </li>
          </ul>
          <button type="button" className="btnNext"></button>
        </div>
        <ul className="movieList">
          <li className="listNull">리스트가 없습니다.</li>
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
      <section className="comment">
        <h4 className="a11yHidden">한줄평</h4>
        <p className="listCounter">
          총<span>0</span>건
        </p>
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
                <li className="writeDate">
                  <h5 className="a11yHidden">작성일시</h5>
                  <p>
                    <span className={["icon", "like"].join(" ")}></span>
                    4일전
                  </p>
                </li>
                <li className="btnWrap">
                  <button
                    type="button"
                    className={["btn", "xSmall", "outLine", "lightGray"].join(
                      " "
                    )}
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    className={["btn", "xSmall", "outLine", "lightGray"].join(
                      " "
                    )}
                  >
                    삭제
                  </button>
                </li>
              </ul>
            </article>
          </li>
        </ul>
        <ul className="paging">
          <li>
            <a href="#">1</a>
          </li>
        </ul>
      </section>
      <section className="watched">
        <h4 className="a11yHidden">본영화</h4>
        <div className="notice">
          <ul class="bullet">
            <li>
              극장에서 발권하신 티켓 바코드 하단의 거래번호를 통해 본 영화
              등록을 하실 수 있습니다.
            </li>
            <li>본 영화는 관람한 인원수에 한해 등록이 가능합니다.</li>
          </ul>
          <button
            type="button"
            className={["btn", "outLine", "small", "main"].join(" ")}
          >
            본 영화 등록
          </button>
        </div>
        <p className="listCounter">
          총 <span>0</span>건
        </p>
        <ul className={["movieList", "clearfix"].join(" ")}>
          <li className="listNull">리스트가 없습니다.</li>
          <li className="watchedMovie">
            <article className="movieItem">
              <div className="poster">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
                  alt=""
                />
              </div>
              <ul className={["info", "clearfix"].join(" ")}>
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
                  <p>
                    2020.06.30(월)
                    <br />
                    14:20 (3회차)
                  </p>
                </li>
              </ul>
              <div className="btnWrap">
                <button
                  type="button"
                  className={["btn", "outLine", "lightGray", "small"].join(" ")}
                >
                  <span className={["icon", "write"].join(" ")}></span>
                  관람평보기
                </button>
                <button
                  type="button"
                  className={["btn", "outLine", "lightGray", "small"].join(" ")}
                >
                  삭제
                </button>
              </div>
            </article>
          </li>
          <li className="watchedMovie">
            <article className="movieItem">
              <div className="poster">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
                  alt=""
                />
              </div>
              <ul className={["info", "clearfix"].join(" ")}>
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
                  <p>
                    2020.06.30(월)
                    <br />
                    14:20 (3회차)
                  </p>
                </li>
              </ul>
              <div className="btnWrap">
                <button
                  type="button"
                  className={["btn", "outLine", "lightGray", "small"].join(" ")}
                >
                  <span className={["icon", "write"].join(" ")}></span>
                  관람평보기
                </button>
                <button
                  type="button"
                  className={["btn", "outLine", "lightGray", "small"].join(" ")}
                >
                  삭제
                </button>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section class="likeMovie">
        <h4 className="a11yHidden">보고싶어</h4>
        <p className="listCounter">
          총 <span>0</span>건
        </p>
        <ul className="movieList">
          <li className="listNull">리스트가 없습니다.</li>
          <li className="wantMovie">
            <article className="movieItem">
              <div className="poster">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
                  alt=""
                />
              </div>
              <ul className={["info", "clearfix"].join(" ")}>
                <li className="title">
                  <h5 className="a11yHidden">영화명</h5>
                  <p>
                    <span className={["icon", "ageGrade"].join(" ")}></span>
                    결백
                  </p>
                </li>
                <li className="btnWrap">
                  <button
                    type="button"
                    className={["btn", "small", "outLine", "lightGray"].join(
                      " "
                    )}
                  >
                    <span className={["icon", "favorite"].join(" ")}></span>
                    848
                  </button>
                  <button
                    type="button"
                    className={["btn", "small", "fill", "main"].join(" ")}
                  >
                    예매
                  </button>
                </li>
              </ul>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MyMovieStory;
