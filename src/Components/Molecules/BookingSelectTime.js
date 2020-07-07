import React from "react";

import "./style/BookingSelectTime.scss";
import { useSelector } from "react-redux";

const BookingSelectTime = () => {
  const schedules = useSelector((state) => state.Booking.schedules);

  return (
    <ol className="BookingSelectTimeContainer">
      {schedules.map((schedule) => {
        return (
          <li>
            <div className="screeningTime">
              <strong>{schedule.start_time}</strong>
              <span>~{schedule.end_time}</span>
            </div>
            <div className="screeningMovieTitle">
              <strong>{schedule.movie}</strong>
              <span>{schedule.screen_type}</span>
            </div>
            <div className="screeningTheaterAndHall">
              <strong>{schedule.theater}</strong>
              <span>{schedule.screen}</span>
              <div className="bookingSeats">
                <span className="availableSeats">
                  {schedule.total_seats - schedule.reserved_seats}
                </span>
                /<span>{schedule.total_seats}</span>
              </div>
            </div>
          </li>
        );
      })}
      {/* <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li>
      <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li>
      <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li>
      <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li>
      <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li>
      <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li>
      <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li>
      <li>
        <div className="screeningTime">
          <strong>11:10</strong>
          <span>~13:19</span>
        </div>
        <div className="screeningMovieTitle">
          <strong>소리꾼</strong>
          <span>2D</span>
        </div>
        <div className="screeningTheaterAndHall">
          <strong>강남</strong>
          <span>5관</span>
          <div className="bookingSeats">
            <span className="availableSeats">60</span>/<span>150</span>
          </div>
        </div>
      </li> */}
    </ol>
  );
};

export default BookingSelectTime;
