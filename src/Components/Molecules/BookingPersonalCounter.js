import React from "react";
import { useSelector, useDispatch } from "react-redux";

const BookingPersonalCounter = ({ type }) => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.Seat.personal[type]);

  const AllCount = Object.values(
    useSelector((state) => state.Seat.personal)
  ).reduce((p, n) => p + n, 0);

  const optionArray = new Array(9 - AllCount + count).fill(0).map((v, i) => i);

  return (
    <div className="bookingPersonalCounter">
      <button
        className={["btn", "fill", "white", "xSmall", "minus"].join(" ")}
        onClick={() => {
          dispatch({
            type: "CHANGE_COUNT",
            personType: `${type}`,
            value: count <= 0 ? 0 : count - 1,
          });
        }}
      >
        -
      </button>
      <select
        className={["select", "small", "count"].join(" ")}
        value={count}
        onChange={(e) => {
          dispatch({
            type: "CHANGE_COUNT",
            personType: `${type}`,
            value: +e.target.value,
          });
        }}
      >
        {optionArray.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <button
        className={["btn", "fill", "white", "xSmall", "plus"].join(" ")}
        onClick={() => {
          dispatch({
            type: "CHANGE_COUNT",
            personType: `${type}`,
            value: AllCount >= 8 ? count : count + 1,
          });
        }}
      >
        +
      </button>
    </div>
  );
};

export default BookingPersonalCounter;
