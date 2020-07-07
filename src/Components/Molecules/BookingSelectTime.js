import React from "react";

import "./style/BookingSelectTime.scss";
import { useSelector, useDispatch } from "react-redux";
import { setDefaultTicketInfo } from "../../Reducer/bookingReducer";
import { Link } from "react-router-dom";

const BookingSelectTime = () => {
  const schedules = useSelector((state) => state.Booking.schedule.schedules);
  const dispatch = useDispatch();

  return (
    <ol className="BookingSelectTimeContainer">
      {schedules.map((schedule) => {
        const ticket = {
          selectedDate: schedule.date,
          selectedTheather: schedule.theater,
          selectedMovieTitle: schedule.movie,
          movieAgeGrade: schedule.grade,
          screenHall: schedule.screen,
          seletedTime: schedule.start_time,
          endTime: schedule.end_time,
          ticketType: {
            adult: 0,
            teen: 0,
            preferential: 0,
          },
          seatType: schedule.seats_type,
          scheduleId: schedule.schedule_id,
          region: schedule.region,
          poster: schedule.poster,
          screenType: schedule.screen_type,
          price: 0,
        };

        return (
          <li key={`scheduleId${schedule.schedule_id}`}>
            <Link to="/booking/seat">
              <button onClick={() => dispatch(setDefaultTicketInfo(ticket))}>
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
              </button>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default React.memo(BookingSelectTime);
