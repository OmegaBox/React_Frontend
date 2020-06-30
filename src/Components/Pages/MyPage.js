import React from "react";
import MyMegaBox from "../Templates/MyMegaBox";
import "./mypage.scss";

const MyPage = () => {
  // useEffect(() => {});

  return (
    <>
      <MyMegaBox />
      <main className="clearfix">
        <h2 className="a11yHidden">마이페이지</h2>
        {/* 마이페이지 메뉴 */}
        <nav className="snb">
          <a href="#" className="title">
            나의 메가박스
          </a>
          <ul className="navList">
            <li>
              <a href="#">예매/구매내역</a>
            </li>
            <li>
              <a href="#">영화/스토어 관람권</a>
              <ul className={["subNavList", "bullet"].join(" ")}>
                <li>
                  <a href="#">영화관람권</a>
                </li>
                <li>
                  <a href="#">스토어 교환권</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">할인/제휴쿠폰</a>
            </li>
            <li>
              <a href="#">멤버십 포인트</a>
              <ul className={["subNavList", "bullet"].join(" ")}>
                <li>
                  <a href="#">포인트 이용내역</a>
                </li>
                <li>
                  <a href="#">멤버십 카드관리</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">나의 무비스토리</a>
            </li>
            <li>
              <a href="#">나의 이벤트 응모내역</a>
            </li>
            <li>
              <a href="#">나의 문의내역</a>
            </li>
            <li>
              <a href="#">자주쓰는 카드 관리</a>
            </li>
            <li>
              <a href="#">회원정보</a>
              <ul className={["subNavList", "bullet"].join(" ")}>
                <li>
                  <a href="#">개인정보 수정</a>
                </li>
                <li>
                  <a href="#">선택정보 수정</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* 나의 메가박스 main */}
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
                    className={["btn", "xSmall", "outLine", "lightGray"].join(
                      " "
                    )}
                  >
                    예매취소
                  </button>
                </article>
              </li>
            </ul>
          </section>
        </div>
        {/* 예매내역 */}
        <div className="bookingHistoryWrap">
          <h3 className="mypageTitle">예매내역</h3>
          <section className="bookingHistory">
            <div className="bookingCondition">
              <span>조회기간</span>
              <div className="btnTermSorting">
                <button
                  type="button"
                  className={["btn", "small", "fill", "white"].join(" ")}
                >
                  1주일
                </button>
                <button
                  type="button"
                  className={["btn", "small", "fill", "white"].join(" ")}
                >
                  1개월
                </button>
                <button
                  type="button"
                  className={["btn", "small", "fill", "white"].join(" ")}
                >
                  3개월
                </button>
                <button
                  type="button"
                  className={["btn", "small", "fill", "white"].join(" ")}
                >
                  6개월
                </button>
              </div>
            </div>
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
                    <li className="bookingNumber">
                      <h5>예매번호</h5>
                      <p>2020-156-5456</p>
                    </li>
                    <li className="title">
                      <h5>영화명</h5>
                      <p>결백</p>
                    </li>
                    <li className="theater">
                      <h5>극장/상영관</h5>
                      <p>강남/4관</p>
                    </li>
                    <li className="peopleCounter">
                      <h5>관람인원</h5>
                      <p>성인 1명</p>
                    </li>
                    <li className="viewingDate">
                      <h5>관람일시</h5>
                      <p>2020.06.30 14:20</p>
                    </li>
                    <li className="viewingSeat">
                      <h5>관람좌석</h5>
                      <p>B열 10</p>
                    </li>
                    <li className="paymentDate">
                      <h5>결제일시</h5>
                      <p>2020.06.30 14:20</p>
                    </li>
                    <li className="point">
                      <h5>적립예정포인트</h5>
                      <p>600p</p>
                    </li>
                    <li className="btnWrap">
                      <button
                        type="button"
                        className={["btn", "fill", "small", "main"].join(" ")}
                      >
                        교환권출력
                      </button>
                      <button
                        type="button"
                        className={["btn", "fill", "small", "darkGray"].join(
                          " "
                        )}
                      >
                        예매취소
                      </button>
                    </li>
                  </ul>
                </article>
              </li>
            </ul>
          </section>
          <section className="bookingCancel">
            <div className="subTitleWrap">
              <h4 className="titleText">예매취소내역</h4>
            </div>
            <p className="bullet">
              상영일 기준 7일간 취소내역을 확인하실 수 있습니다.
            </p>
            <table cellPadding="0" cellSpacing="0" className="cancelList">
              <thead>
                <tr>
                  <th>취소일시</th>
                  <th>영화명</th>
                  <th>극장</th>
                  <th>상영일시</th>
                  <th>취소금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2020.06.26 (23:16)</td>
                  <td>결백</td>
                  <td>코엑스</td>
                  <td>2020.06.30 (화) 21:00</td>
                  <td>10,000원</td>
                </tr>
                <tr>
                  <td>2020.06.26 (23:16)</td>
                  <td>결백</td>
                  <td>코엑스</td>
                  <td>2020.06.30 (화) 21:00</td>
                  <td>10,000원</td>
                </tr>
              </tbody>
            </table>
            <ul className="paging">
              <li>
                <a href="#">1</a>
              </li>
            </ul>
          </section>
          <section className="useInfo">
            <button
              type="button"
              className={["btn", "fill", "white"].join(" ")}
            >
              이용안내
              <span className={["icon", "arrowBottom"].join(" ")}></span>
            </button>
            <div className="explanation">
              <h4>[예매안내]</h4>
              <ul className="bullet">
                <li>
                  만 4세(48개월)이상부터는 영화티켓을 반드시 구매하셔야 입장
                  가능합니다.
                </li>
                <li>
                  예매 변경은 불가능하며, 취소 후 재 예매를 하셔야만 합니다.
                </li>
                <li>
                  메가 박스 모바일앱을 이용할 경우 티켓출력없이 모바일티켓을
                  통해 바로 입장하실 수 있습니다.
                </li>
              </ul>
              <h4>[티켓교환 안내]</h4>
              <ul className="bullet">
                <li>
                  극장의 무인발권기(KIOSK)를 통해 예매번호 또는
                  고객확인번호(생년월일+휴대폰번호)를 입력하여 편리하게 티켓을
                  발권하실 수 있습니다.
                </li>
                <li>
                  무인발권기 이용이 어려우신경우, 티켓교환권을 출력하여 매표소에
                  방문하시면 티켓을 발권하실 수 있습니다.
                </li>
                <li>
                  (티켓교환권 출력이 어려운경우 예매번호와 신분증을 지참하여
                  매표소에 방문하시면 티켓을 발권하실 수 있습니다)
                </li>
              </ul>
              <h4>[예매취소 안내]</h4>
              <ul className="bullet">
                <li>
                  온라인(홈페이지/모바일) 예매 취소는 상영시간 20분전까지
                  입니다.
                </li>
                <li>
                  위탁 예매 사이트 이용 시 취소 및 환불 규정은 해당 사이트
                  규정을 따릅니다.
                </li>
                <li>
                  LIVE 공연 콘텐트는 취소 기준은 아래와 같습니다.
                  <ul className="bullet">
                    <li>관람 4일전 : 취소 가능</li>
                    <li>관람 3일 ~ 1일전 : 취소 수수료 부담 후 취소 가능</li>
                    <li>관람 당일 : 취소 및 환불 불가</li>
                  </ul>
                </li>
                <li>공연 관람시 시작 시간 이후에는 입장이 제한 됩니다.</li>
                <li>
                  발권된 티켓은 상영시간 전까지 현장 방문 시에만 취소가
                  가능합니다.
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* 멤버십 포인트 */}
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
        {/* 나의 무비스토리 */}
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
                        className={[
                          "btn",
                          "xSmall",
                          "outLine",
                          "lightGray",
                        ].join(" ")}
                      >
                        수정
                      </button>
                      <button
                        type="button"
                        className={[
                          "btn",
                          "xSmall",
                          "outLine",
                          "lightGray",
                        ].join(" ")}
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
                className={["btn", "outLine", "samll", "main"].join(" ")}
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
                      className={["btn", "outLine", "lightGray", "small"].join(
                        " "
                      )}
                    >
                      <span className={["icon", "write"].join(" ")}></span>
                      관람평보기
                    </button>
                    <button
                      type="button"
                      className={["btn", "outLine", "lightGray", "small"].join(
                        " "
                      )}
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
                      className={["btn", "outLine", "lightGray", "small"].join(
                        " "
                      )}
                    >
                      <span className={["icon", "write"].join(" ")}></span>
                      관람평보기
                    </button>
                    <button
                      type="button"
                      className={["btn", "outLine", "lightGray", "small"].join(
                        " "
                      )}
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
                        className={[
                          "btn",
                          "small",
                          "outLine",
                          "lightGray",
                        ].join(" ")}
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
        {/* 비밀번호 확인 */}
        <div className="confirmPassword">
          <h3 className="mypageTitle">회원정보</h3>
          <section>
            <div>
              <p className="notice">
                회원님의 개인정보 보호를 위해 비밀번호를 입력하셔야 합니다.
              </p>
              <p>메가박스 로그인시 사용하시는 비밀번호를 입력해 주세요.</p>
              <input type="text" className={["input", "large"].join(" ")} />
            </div>
            <button
              type="button"
              className={["btn", "xLarge", "outLine", "main"].join(" ")}
            >
              취소
            </button>
            <button
              type="button"
              className={["btn", "xLarge", "fill", "main"].join(" ")}
            >
              확인
            </button>
          </section>
        </div>
        {/* 개인정보 수정 */}
        <div className="editUserInfo">
          <h3 className="mypageTitle">개인정보 수정</h3>
          <section>
            <h4 className="titleText">기본정보</h4>
            <p className="bullet">회원님의 정보를 정확히 입력해주세요.</p>
            <table cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <th>아이디</th>
                  <td>test1</td>
                </tr>
                <tr>
                  <th>
                    이름 <span className="textRed">*</span>
                  </th>
                  <td className="name">
                    김규리
                    <button
                      type="button"
                      className={["btn", "xSmall", "outLine", "lightGray"].join(
                        " "
                      )}
                    >
                      이름변경
                    </button>
                    &#8251; 개명으로 이름이 변경된 경우, 회원정보의 이름을
                    변경하실 수 있습니다.
                  </td>
                </tr>
                <tr>
                  <th>
                    생년월일 <span className="textRed">*</span>
                  </th>
                  <td>1984년 8월 25일</td>
                </tr>
                <tr>
                  <th>
                    휴대폰 <span className="textRed">*</span>
                  </th>
                  <td>
                    010-7137-1722{" "}
                    <button
                      type="button"
                      className={["btn", "xSmall", "outLine", "lightGray"].join(
                        " "
                      )}
                    >
                      휴대폰 변경
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>
                    이메일 <span className="textRed">*</span>
                  </th>
                  <td className="email">
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    비밀번호 <span className="textRed">*</span>
                  </th>
                  <td className="password">
                    <button
                      type="button"
                      className={["btn", "xSmall", "outLine", "lightGray"].join(
                        " "
                      )}
                    >
                      비밀번호 변경
                    </button>{" "}
                    마지막 비밀번호 변경 : 2일전에 함 (2020-06-25 02:54:13)
                  </td>
                </tr>
                <tr>
                  <th>회원탈퇴</th>
                  <td className="memberOut">
                    <button
                      type="button"
                      className={["btn", "xSmall", "outLine", "darkGray"].join(
                        " "
                      )}
                    >
                      회원탈퇴
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btnWrap">
              <button
                type="button"
                className={["btn", "xLarge", "outLine", "main"].join(" ")}
              >
                취소
              </button>
              <button
                type="button"
                className={["btn", "xLarge", "fill", "main"].join(" ")}
              >
                수정
              </button>
            </div>
          </section>
        </div>
        {/* 비밀번호 변경 */}
        <div className="editPassword">
          <h3 className="mypageTitle">비밀번호 변경</h3>
          <section>
            <p className="bullet">
              현재 비밀번호를 입력한 후 새로 사용할 비밀번호를 입력하세요
            </p>
            <table cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <th>현재 비밀번호</th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>새 비밀번호</th>
                  <td className="newPassword">
                    <input type="text" />
                    &#8251; 영문, 숫자, 특수문자 중 2가지 이상 조합하여 10자리
                    이상으로 입력 해 주세요.
                  </td>
                </tr>
                <tr>
                  <th>새 비밀번호 재입력</th>
                  <td className="newPassword">
                    <input type="text" />
                    &#8251; 비밀번호 확인을 위해 한 번 더 입력해 주시기
                    바랍니다.
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="bullet">
              <li>
                생년월일, 전화번호 등 개인 정보와 관련된 숫자, 연속된 숫자와
                같이 쉬운 비밀번호는 다른 사람이 쉽게 알아낼 수 있으니 사용을
                자제해 주세요.
              </li>
              <li>비밀번호는 3~6개월마다 꼭 바꿔주세요.</li>
              <li>
                비밀번호 변경시 모바일 기기와 홈페이지에서 모두 로그아웃됩니다.
                변경한 비밀번호로 다시 로그인해주세요.
              </li>
              <li>
                비밀번호 설정 시 사용가능한 특수문자는 ~ ! # $ % ^ & * + = ? _
                입니다.
              </li>
            </ul>
            <div className="btnWrap">
              <button
                type="button"
                className={["btn", "xLarge", "outLine", "main"].join(" ")}
              >
                취소
              </button>
              <button
                type="button"
                className={["btn", "xLarge", "fill", "main"].join(" ")}
              >
                수정
              </button>
            </div>
          </section>
        </div>
        {/* 선택정보 수정 */}
        <div className="editOption">
          <h3 className="mypageTitle">선택정보 수정</h3>
          <h4 className="titleText">부가정보</h4>
          <table cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <th>선호극장</th>
                <td className="selectTheater">
                  선호 영화관은 최대 3개까지 등록 가능합니다.
                  <ul className="preferredTheater">
                    <li>
                      <span>1 순위</span>
                      <div className="selectWrap">
                        <select className={["select", "large"].join(" ")}>
                          <option>서울</option>
                        </select>
                        <span
                          className={["icon", "arrowBottom"].join(" ")}
                        ></span>
                      </div>
                      <div className="selectWrap">
                        <select className={["select", "large"].join(" ")}>
                          <option>서울</option>
                        </select>
                        <span
                          className={["icon", "arrowBottom"].join(" ")}
                        ></span>
                      </div>
                    </li>
                    <li>
                      <span>2 순위</span>
                      <div className="selectWrap">
                        <select className={["select", "large"].join(" ")}>
                          <option>서울</option>
                        </select>
                        <span
                          className={["icon", "arrowBottom"].join(" ")}
                        ></span>
                      </div>
                      <div className="selectWrap">
                        <select className={["select", "large"].join(" ")}>
                          <option>서울</option>
                        </select>
                        <span
                          className={["icon", "arrowBottom"].join(" ")}
                        ></span>
                      </div>
                    </li>
                    <li>
                      <span>3 순위</span>
                      <select>
                        <option>서울</option>
                      </select>
                      <select>
                        <option>송파파크하비오</option>
                      </select>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>선호장르 (3개 선택)</th>
                <td className="genre">
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>선호시간</th>
                <td>
                  <ul className="preferredTime">
                    <li className="inputWrap">
                      <input type="radio" name="timeGroup" id="timeBefore10" />
                      <label for="timeBefore10">
                        <span className="inputIcon"></span>10시 이전
                      </label>
                    </li>
                    <li className="inputWrap">
                      <input type="radio" name="timeGroup" id="time10to13" />
                      <label for="time10to13">
                        <span className="inputIcon"></span>10시 ~ 13시
                      </label>
                    </li>
                    <li className="inputWrap">
                      <input type="radio" name="timeGroup" id="time13to16" />
                      <label for="time13to16">
                        <span className="inputIcon"></span>13시 ~ 16시
                      </label>
                    </li>
                    <li className="inputWrap">
                      <input type="radio" name="timeGroup" id="time16to18" />
                      <label for="time16to18">
                        <span className="inputIcon"></span>16시 ~ 18시
                      </label>
                    </li>
                    <li className="inputWrap">
                      <input type="radio" name="timeGroup" id="time18to21" />
                      <label for="time18to21">
                        <span className="inputIcon"></span>18시 ~ 21시
                      </label>
                    </li>
                    <li className="inputWrap">
                      <input type="radio" name="timeGroup" id="timeAfter21" />
                      <label for="timeAfter21">
                        <span className="inputIcon"></span>21시 이후
                      </label>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btnWrap">
            <button
              type="button"
              className={["btn", "xLarge", "outLine", "main"].join(" ")}
            >
              취소
            </button>
            <button
              type="button"
              className={["btn", "xLarge", "fill", "main"].join(" ")}
            >
              수정
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyPage;
