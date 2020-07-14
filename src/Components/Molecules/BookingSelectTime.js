import React, { useEffect } from "react";

import "./style/BookingSelectTime.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setDefaultTicketInfo,
  setScheduleRef,
} from "../../Reducer/bookingReducer";
import { Link } from "react-router-dom";
import SkeletonTimeSelect from "../Atoms/SkeletonTimeSelect";
import EmptySchedules from "../Atoms/EmptySchedules";

const BookingSelectTime = () => {
  const schedules = useSelector((state) => state.Booking.schedule.schedules);
  const isLoading = useSelector((state) => state.Booking.schedule.loading);
  const refs = useSelector((state) => state.Booking.schedule.loading);
  const dispatch = useDispatch();

  const scheduleRef = {};
  const TimeSelect = schedules.length ? (
    schedules.map((schedule) => {
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

      const hour = schedule.start_time.slice(0, 2);
      // const ref = React.createRef();

      // if (!scheduleRef[hour].current) scheduleRef[hour] = ref;
      let ref = React.createRef();
      if (scheduleRef[hour]) {
        ref = !scheduleRef[hour].current ? scheduleRef[hour] : ref;
        console.log("들어온 후 ref 설정", !scheduleRef[hour].current);
      }

      return (
        <li key={`scheduleId${schedule.schedule_id}`} ref={ref}>
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
    })
  ) : (
    <EmptySchedules />
  );
  // console.log(scheduleRef);

  // dispatch(setScheduleRef(scheduleRef));

  // useEffect(() => {
  //   dispatch(setScheduleRef(scheduleRef));
  // }, []);

  return (
    <ol className="BookingSelectTimeContainer">
      {isLoading ? <SkeletonTimeSelect /> : TimeSelect}
    </ol>
  );
};

export default React.memo(BookingSelectTime);
