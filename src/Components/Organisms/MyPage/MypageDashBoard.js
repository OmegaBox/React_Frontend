import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookingCancel from "../../Molecules/BookingCancel";
import PopupNotice from "../../Molecules/PopupNotice";
import ModalPortal from "../../../Modules/ModalPortal";
import { numWithComma } from "../../../Utils/util";
import "./style/MypageDashBoard.scss";

const MypageDashBoard = () => {
  /* 개인정보 데이터 */
  const { name, tier, point, isLogin } = useSelector((state) => ({
    isLogin: state.userInfo.isLogin,
    name: state.userInfo.name,
    tier: state.userInfo.profile.tier,
    point: state.userInfo.profile.point,
  }));
  /* 예매내역 */
  const { bookingHistory } = useSelector((state) => ({
    bookingHistory: state.userInfo.bookingHistory,
  }));
  /* 한줄평 작성 */
  const { commentMovies, commentMoviesCount } = useSelector((state) => ({
    commentMovies: state.userInfo.commentMovies,
    commentMoviesCount: state.userInfo.ratingMoviesCount,
  }));

  /* 본 영화 */
  const { watchedMovies, watchedMoviesCount } = useSelector((state) => ({
    watchedMovies: state.userInfo.watchedMovies,
    watchedMoviesCount: state.userInfo.watchedMoviesCount,
  }));

  /* 보고싶은영화 */
  const { favoriteMovies, favoriteMoviesCount } = useSelector((state) => ({
    favoriteMovies: state.userInfo.favoriteMovies,
    favoriteMoviesCount: state.userInfo.likeMoviesCount,
  }));

  /* 모달 팝업 */
  const [modal, text, event, w, h] = useSelector((state) => {
    const Modal = state.modal;
    return [Modal.modal, Modal.text, Modal.event, Modal.width, Modal.height];
  });

  return (
    <div>
      {isLogin ? "" : "링크로 돌림"}

      <div className="mypageDashBoard">
        <h3 className="a11yHidden">마이페이지 정보</h3>
        <section className="mypagePersnalInfo">
          <article className="grade">
            <p className="name">
              {name}님은
              <br />
              {tier}입니다.
            </p>
            <Link to="/mypage/confirmpassword" className="btnPersnalEdit">
              개인정보수정
              <span className={["icon", "arrowRight"].join(" ")}></span>
            </Link>
          </article>
          <article className="point">
            <div className="subTitleWrap">
              <h4 className="titleText">총 보유 포인트</h4>
              <Link
                to="/mypage/point"
                className={["icon", "arrowRight"].join(" ")}
              ></Link>
            </div>
            <p className="totalPoint">{numWithComma(String(point))} P</p>
            <p>
              적립예정 <span className="textMedium">500 P</span>
            </p>
            <p>
              소멸예정{" "}
              <span className={["textRed", "textMedium"].join(" ")}>
                1,200 P
              </span>
            </p>
          </article>
        </section>

        <section className="mypageMovieStoryInfo">
          <div className="subTitleWrap">
            <h4 className="titleText">나의 무비스토리</h4>
            <Link
              to="/mypage/myMovieStory"
              className={["icon", "arrowRight"].join(" ")}
            ></Link>
          </div>
          <ul className={["roundBox", "movieStoryInfoList"].join(" ")}>
            <li>
              <Link to="/mypage/myMovieStory">
                <span className="amount">{watchedMoviesCount}</span>본영화
              </Link>
            </li>
            <li>
              <Link to="/mypage/myMovieStory">
                <span className="amount">{commentMoviesCount}</span>한줄평
              </Link>
            </li>
            <li>
              <Link to="/mypage/myMovieStory">
                <span className="amount">{favoriteMoviesCount}</span>
                보고싶어
              </Link>
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
            <Link
              to="/mypage/bookinghistory"
              className={["btnMore", "btn", "xSmall"].join(" ")}
            >
              더보기
              <span className={["icon", "arrowRight"].join(" ")}></span>
            </Link>
          </div>
          <ul className="movieList">
            {bookingHistory.length ? (
              bookingHistory.map((booking) => (
                <li key={booking.reservation_id}>
                  <article className="movieItem">
                    <div className="poster">
                      <img
                        src={booking.poster}
                        alt={[booking.movie_name, "포스터"].join(" ")}
                      />
                    </div>
                    <ul className={["info", "clearfix"].join(" ")}>
                      <li className="paymentDate">
                        <h5>결제일시</h5>
                        <p>
                          {booking.payed_at} ({booking.paymentTime})
                        </p>
                      </li>
                      <li className="bookingNumber">
                        <h5 className="a11yHidden">예매번호</h5>
                        <p>{booking.reservation_code}</p>
                      </li>
                      <li className="title">
                        <h5 className="a11yHidden">영화명</h5>
                        <p>
                          {booking.movie_name} / {booking.screen_type}
                        </p>
                      </li>
                      <li className="theater">
                        <h5 className="a11yHidden">극장/상영관</h5>
                        <p>
                          {booking.theater_name} / {booking.screen_name}
                        </p>
                      </li>
                      <li className="viewingDate">
                        <h5 className="a11yHidden">관람일시</h5>
                        <p>{booking.start_time}</p>
                      </li>
                    </ul>
                    <BookingCancel
                      classSet={["btn", "xSmall", "outLine", "lightGray"].join(
                        " "
                      )}
                    />
                  </article>
                </li>
              ))
            ) : (
              <li className="listNull" key={bookingHistory.length}>
                리스트가 없습니다.
              </li>
            )}
          </ul>

          {modal && (
            <ModalPortal>
              <PopupNotice
                text={text}
                onEvent={event}
                popupSize={{
                  width: w,
                  height: h,
                }}
              />
            </ModalPortal>
          )}
        </section>
      </div>
    </div>
  );
};

export default MypageDashBoard;
