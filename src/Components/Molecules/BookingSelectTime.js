import React from "react";

import "./style/BookingSelectTime.scss";
import { useSelector } from "react-redux";

const BookingSelectTime = () => {
  const schedules = useSelector((state) => state.Booking.schedule.schedules);

  return (
    <ol className="BookingSelectTimeContainer">
      {schedules.map((schedule) => {
        return (
          <li key={`scheduleId${schedule.schedule_id}`}>
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
    </ol>
  );
};

export default React.memo(BookingSelectTime);
