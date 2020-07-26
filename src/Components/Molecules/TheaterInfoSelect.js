import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style/BookingTheaterList.scss";
import {
  setSelectRegion,
  selectTheater,
  setNearbyTheaters,
} from "../../Reducer/bookingReducer";
import {
  theaterLocation,
  findNearbyTheaters,
} from "../../Utils/theaterLocation";

const TheaterInfoSelect = () => {
  const selectedOption = useSelector((state) => state.TheaterInfo);

  const dispatch = useDispatch();

  const theaterLocs = theaterLocation.slice();

  const dispatchNearby = useCallback(
    async () => dispatch(setNearbyTheaters(await findNearbyTheaters())),
    [dispatch]
  );

  const selectedRegion = theaterLocs.filter((theater) => {
    return theater.region === selectedOption.selectedRegion;
  })[0]; // 선택한 지역

  const selectedTheater = selectedOption.selectedTheater; // 선택한 영화관

  useEffect(() => {
    dispatchNearby();
  }, [dispatchNearby]);

  return (
    <div className="bookingTheaterList">
      <h3 className="theaterHeading">극장</h3>
      <div className="theaterLocationList">
        <ul className="region">
          {theaterLocs.map((theater, i) => {
            let className =
              theater.region === selectedOption.selectedRegion
                ? "selectedInfoLighter"
                : "";

            return (
              <li key={`selectedRegion${i}`} className={className}>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(setSelectRegion(theater.region));
                  }}
                >
                  <span>{theater.region}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="localRegionTheater">
          {selectedRegion &&
            selectedRegion.theaters.map((theater, i) => {
              const isSelected = theater.name === selectedTheater;

              let className = "theater";
              className += isSelected ? " selectedTheater" : "";

              return (
                <li key={`slectedTheater${i}`} className={className}>
                  <button onClick={() => dispatch(selectTheater(theater))}>
                    <span>{theater.name}</span>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(TheaterInfoSelect);
