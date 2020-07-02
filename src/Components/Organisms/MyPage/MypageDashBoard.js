import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import BookingCancel from "../../Molecules/BookingCancel";
import PopupNotice from "../../Molecules/PopupNotice";
import ModalPortal from "../../../Modules/ModalPortal";
const MypageDashBoard = () => {
  /* 개인정보 데이터 */
  const { name, tier, point, scheduledPoint, expiredPoint } = useSelector(
    (state) => ({
      name: state.userInfo.name,
      tier: state.userInfo.tier,
      point: state.userInfo.point,
      scheduledPoint: state.userInfo.scheduledPoint,
      expiredPoint: state.userInfo.expiredPoint,
    })
  );

  const { bookingHistory } = useSelector((state) => ({
    bookingHistory: state.userInfo.bookingHistory,
  }));

  const [modal, text, event, w, h] = useSelector((state) => {
    const Modal = state.modal;
    return [Modal.modal, Modal.text, Modal.event, Modal.width, Modal.height];
  });

  return (
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
          <p className="totalPoint">{point} P</p>
          <p>
            적립예정 <span className="textMedium">{scheduledPoint} P</span>
          </p>
          <p>
            소멸예정{" "}
            <span className={["textRed", "textMedium"].join(" ")}>
              {expiredPoint} P
            </span>
          </p>
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
              <li>
                <article className="movieItem">
                  <div className="poster">
                    <img
                      src={booking.poster}
                      alt={[booking.title, "포스터"].join(" ")}
                    />
                  </div>
                  <ul className={["info", "clearfix"].join(" ")}>
                    <li className="paymentDate">
                      <h5>결제일시</h5>
                      <p>
                        {booking.paymentDate} ({booking.paymentTime})
                      </p>
                    </li>
                    <li className="bookingNumber">
                      <h5 className="a11yHidden">예매번호</h5>
                      <p>{booking.ticketNumber}</p>
                    </li>
                    <li className="title">
                      <h5 className="a11yHidden">영화명</h5>
                      <p>{booking.title}</p>
                    </li>
                    <li className="theater">
                      <h5 className="a11yHidden">극장/상영관</h5>
                      <p>
                        {booking.theater} / {booking.screeningHall}
                      </p>
                    </li>
                    <li className="viewingDate">
                      <h5 className="a11yHidden">관람일시</h5>
                      <p>
                        {booking.date} {booking.time}
                      </p>
                    </li>
                  </ul>
                  <BookingCancel />
                </article>
              </li>
            ))
          ) : (
            <li className="listNull">리스트가 없습니다.</li>
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
  );
};

export default MypageDashBoard;
