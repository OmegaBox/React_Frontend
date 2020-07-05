import React from "react";

import "./style/BookingNotice.scss";

const BookingNotice = () => (
  <ul className="bookingNotice">
    <li>
      <span>상영안내</span>
      <ul className="noticeDetail">
        <li>쾌적한 관람 환경을 위해 상영시간 이전에 입장 부탁드립니다.</li>
        <li>
          지연입장에 의한 관람불편을 최소화하고자 본 영화는 10분 후 시작됩니다.
        </li>
        <li>
          상영시간 20분전까지는 취소가 가능하며, 캡처화면으로는 입장하실 수
          없습니다.
        </li>
      </ul>
    </li>
    <li>
      <span>주차안내</span>
      <ul className="noticeDetail">
        <li>
          송파 파크하비오 푸르지오단지 지하 1층 ~ 지하 2층 주차장 / 매표소 및 각
          상영관 입구에서 영화 티켓 제시 후 주차할인 인증
        </li>
        <li>영화 관람시 4시간 무료</li>
      </ul>
    </li>
  </ul>
);

export default BookingNotice;
