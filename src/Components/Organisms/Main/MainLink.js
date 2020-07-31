import React from "react";
import "./style/MainLink.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  SELECT_REGION,
  SELECT_THEATER,
} from "../../../Reducer/theaterInfoReducer";

const MainLink = () => {
  const dispatch = useDispatch();
  return (
    <div className="mainLinkLayout">
      <ul className="mainLink">
        <li className="linkVIP">
          <span>VIP LOUNGE</span>
        </li>
        <li className="linkMember">
          <span>멤버십</span>
        </li>
        <li className="linkCard">
          <span>할인카드안내</span>
        </li>
        <li className="linkEvent">
          <span>이벤트</span>
        </li>
        <li className="linkStore">
          <span>스토어</span>
        </li>
      </ul>
      <div className="grandOpeningLayout">
        <h3>LIFE THEATER MEGABOX</h3>
        <p>
          <strong>
            GRAND <br />
            OPENING
          </strong>
        </p>
        <ul className="openingTheaters">
          <li
            className="openInfor"
            onClick={() => {
              dispatch({ type: SELECT_REGION, region: "부산/대구/경상" });
              dispatch({
                type: SELECT_THEATER,
                theater: {
                  name: "창원내서",
                  location: {
                    lat: 35.248928,
                    lng: 128.510666,
                  },
                },
              });
            }}
          >
            <Link to="/theaters">
              <div className="openInforText">
                <span>
                  <em>신규오픈</em>
                </span>
                <p>
                  <span>부산/대구/경상</span>
                  <br />
                  <strong>창원내서</strong>
                </p>
                <p>20.06.24</p>
              </div>
            </Link>
          </li>
          <li
            className="openInfor"
            onClick={() => {
              dispatch({ type: SELECT_REGION, region: "대전/충청/세종" });
              dispatch({
                type: SELECT_THEATER,
                theater: {
                  name: "세종청사",
                  location: {
                    lat: 36.502848,
                    lng: 127.258078,
                  },
                },
              });
            }}
          >
            <Link to="/theaters">
              <div className="openInforText">
                <span>
                  <em>신규오픈</em>
                </span>
                <p>
                  <span>대전/충청/세종</span>
                  <br />
                  <strong>세종청사</strong>
                </p>
                <p>20.06.24</p>
              </div>
            </Link>
          </li>
          <li
            className="openInfor"
            onClick={() => {
              dispatch({ type: SELECT_REGION, region: "대전/충청/세종" });
              dispatch({
                type: SELECT_THEATER,
                theater: {
                  name: "대전현대아울렛",
                  location: {
                    lat: 36.423539,
                    lng: 127.397241,
                  },
                },
              });
            }}
          >
            <Link to="/theaters">
              <div className="openInforText">
                <span>
                  <em>신규오픈</em>
                </span>
                <p>
                  <span>대전/충청/세종</span>
                  <br />
                  <strong>대전현대아울렛</strong>
                </p>
                <p>20.06.24</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLink;
