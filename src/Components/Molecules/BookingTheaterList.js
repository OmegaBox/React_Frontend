import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style/BookingTheaterList.scss";
import { setSelectRegion, selectTheater } from "../../Reducer/bookingReducer";

const theaterList = [
  {
    region: "서울",
    theaters: [
      "강남",
      "강남대로(씨티)",
      "강동",
      "군자",
      "동대문",
      "마곡",
      "목동",
      "상봉",
      "상암월드컵경기장",
      "성수",
      "센트럴",
      "송파파크하비오",
      "신촌",
      "은평",
      "이수",
      "창동",
      "코엑스",
      "홍대",
      "화곡",
      "ARTNINE",
    ],
  },
  {
    region: "경기",
    theaters: [
      "고양스타필드",
      "김포한강신도시",
      "남양주",
      "동탄",
      "미사강변",
      "백석",
      "별내",
      "부천스타필드시티",
      "분당",
      "수원",
      "수원남문",
      "시흥배곧",
      "안산중앙",
      "양주",
      "영통",
      "용인기흥",
      "용인테크노밸리",
      "의정부민락",
      "일산",
      "일산벨라시타",
      "킨텍스",
      "파주금촌",
      "파주운정",
      "파주출판도시",
      "평택",
      "하남스타필드",
    ],
  },
  {
    region: "인천",
    theaters: ["검단", "송도", "영종", "인천논현", "청라", "청라지젤"],
  },
  {
    region: "대전/충청/세종",
    theaters: [
      "공주",
      "대전",
      "대전유성",
      "대전중앙로",
      "대전현대아울렛",
      "세종(조치원)",
      "세종나성",
      "세종청사",
      "오창",
      "제천",
      "진천",
      "천안",
      "청주사창",
      "충주",
      "홍성내포",
    ],
  },
  {
    region: "부산/대구/경상",
    theaters: [
      "거창",
      "경북도청",
      "경산하양",
      "경주",
      "구미강동",
      "김천",
      "남포항",
      "대구(칠성로)",
      "대구신세계(동대구)",
      "대구이시아",
      "덕천",
      "마산",
      "문경",
      "부산극장",
      "부산대",
      "북대구(칠곡)",
      "사천",
      "삼천포",
      "양산",
      "양산라피에스타",
      "울산",
      "정관",
      "창원",
      "창원내서",
      "해운대(장산)",
    ],
  },
  {
    region: "광주/전라",
    theaters: [
      "광주상무",
      "광주하남",
      "남원",
      "목포하당(포르모)",
      "송천",
      "순천",
      "여수웅천",
      "전대(광주)",
      "첨단",
    ],
  },
  {
    region: "강원",
    theaters: ["남춘천", "속초", "원주", "원주센트럴"],
  },
  {
    region: "제주",
    theaters: ["제주"],
  },
];

const BookingTheaterList = (props) => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);
  const dispatch = useDispatch();

  const selectedRegion = theaterList.filter((theater) => {
    return theater.region === selectedOption.selectedRegion;
  })[0];

  // const expectedSelectedTheaters = theaterList
  //   .filter((theater) => {
  //     return selectedOption.selectedRegion.includes(theater.region);
  //   })
  //   .map((theater) => theater.theaters);
  // console.log(expectedSelectedTheaters);

  const selectedTheaters = selectedOption.selectedTheathers;
  const unSelectedTheaters = new Array(3 - selectedTheaters.length).fill(0);

  return (
    <div className="bookingTheaterList">
      <h3 className="theaterHeading">극장</h3>
      <div className="theaterLocationList">
        <ul className="region">
          {theaterList.map((theater) => {
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
                  <span>{theater.region}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="localRegionTheater">
          {selectedRegion
            ? selectedRegion.theaters.map((theater) => {
                let calssName = "theater";
                calssName += selectedTheaters.includes(theater)
                  ? " selectedTheater"
                  : "";
                return (
                  <li className={calssName}>
                    <button onClick={() => dispatch(selectTheater(theater))}>
                      <span>{theater}</span>
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
                  <span>{theater}</span>
                  <button onClick={() => dispatch(selectTheater(theater))}>
                    x
                  </button>
                </li>
              );
            })}
            {unSelectedTheaters.map((theater) => {
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
