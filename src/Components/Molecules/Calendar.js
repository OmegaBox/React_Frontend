import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate } from "../../Reducer/bookingReducer";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import "./style/Calendar.scss";
import { Korean } from "flatpickr/dist/l10n/ko.js";
import { transformDateFormat } from "../../Utils/ultil";

// flatpickr(".flatpickr", { wrap: true });

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.Booking.selectedOption);

  let calendarHook = React.createRef();
  return (
    <div className="calendarContainer">
      <button
        type="button"
        className="calendarIconBtn"
        onClick={() => {
          if (calendarHook) {
            calendarHook.flatpickr.open();
          }
        }}
      >
        <span className="calendarIcon"></span>
      </button>
      <Flatpickr
        ref={(fp) => (calendarHook = fp)}
        options={{
          locale: Korean,
          enable: ["2020-06-29", "2020-06-30", "2020-07-01"],
        }}
        value={selectedOption.selectedDate}
        onChange={(date) => {
          dispatch(setSelectedDate(transformDateFormat(date).dateString));
        }}
      />
    </div>
  );
};

export default Calendar;
