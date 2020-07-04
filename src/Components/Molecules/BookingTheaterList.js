import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style/BookingTheaterList.scss";
import { setSelectRegion, selectTheater } from "../../Reducer/bookingReducer";
import { theaterLoaction } from "../../Utils/theaterLoaction";

const BookingTheaterList = (props) => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);
  const canSelectTheaters = useSelector(
    (state) => state.Booking.canSelectTheaters
  ); // 선택 가능한 지역별 영화관 수
  const dispatch = useDispatch();

  const selectedRegion = theaterLoaction.filter((theater) => {
    return theater.region === selectedOption.selectedRegion;
  })[0]; // 선택한 지역

  const selectedTheaters = selectedOption.selectedTheaters; // 선택한 영화관들
  const unSelectedTheaters = new Array(3 - selectedTheaters.length).fill(0); // 선택하지 않은 영화관 체크용 빈배열

  return (
    <div className="bookingTheaterList">
      <h3 className="theaterHeading">극장</h3>
      <div className="theaterLocationList">
        <ul className="region">
          {theaterLoaction.map((theater) => {
            const className =
              theater.region === selectedOption.selectedRegion
                ? "selectedInfoLighter"
                : "";
            return (
              <li className={className}>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(setSelectRegion(theater.region));
                  }}
                >
                  <span>
                    {theater.region}({canSelectTheaters[theater.region]})
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="localRegionTheater">
          {selectedRegion
            ? selectedRegion.theaters.map((theater) => {
                let calssName = "theater";
                calssName += selectedTheaters.find(
                  (th) => th.name === theater.name
                )
                  ? " selectedTheater"
                  : "";
                return (
                  <li className={calssName}>
                    <button onClick={() => dispatch(selectTheater(theater))}>
                      <span>{theater.name}</span>
                    </button>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
      <ul className="seletedTheaterLists">
        {unSelectedTheaters.length !== 3 ? (
          <>
            {selectedTheaters.map((theater) => {
              return (
                <li>
                  <span>{theater.name}</span>
                  <button onClick={() => dispatch(selectTheater(theater))}>
                    x
                  </button>
                </li>
              );
            })}
            {unSelectedTheaters.map(() => {
              return (
                <li>
                  <span className="bigPlusMark">+</span>
                </li>
              );
            })}
          </>
        ) : (
          <div className="emptySeletedList">
            <span>전체극장</span>
            <span>목록에서 극장을 선택하세요.</span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default BookingTheaterList;
