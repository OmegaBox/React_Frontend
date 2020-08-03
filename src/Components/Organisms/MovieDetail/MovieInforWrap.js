import React, { useState } from "react";
import "./style/MovieInforWrap.scss";
import { useSelector } from "react-redux";
import RatingChart from "../../Molecules/ChartBookingRating";
import DayAudienceLine from "../../Molecules/LineDayAudience";
import RaderChartKeyPoint from "../../Molecules/RaderChartKeyPoint";
import { numWithComma } from "../../../Utils/util";
import { useHistory, Link } from "react-router-dom";

const MovieInforWrap = () => {
  const movie = useSelector((state) => state.Movie.detail);
  console.log(movie);
  const [fullStoryState, setfullStoryState] = useState({
    fullStory: false,
  });
  const history = useHistory();

  const fullStoryOpen = () => {
    setfullStoryState({
      ...fullStoryState,
      fullStory: !fullStoryState.fullStory,
    });
  };
  return (
    <div>
      <div className="movieStoryWrap">
        <p
          className={[
            "story",
            `${fullStoryState.fullStory ? "open" : ""}`,
          ].join(" ")}
        >
          {movie.description}
        </p>
        <button
          type="button"
          className={["btn", "large", "white", "outline"].join(" ")}
          onClick={() => fullStoryOpen()}
        >
          {fullStoryState.fullStory ? "닫기" : "더보기"}
          <span
            className={[
              "icon",
              `${fullStoryState.fullStory ? "arrowTop" : "arrowBottom"}`,
            ].join(" ")}
          ></span>
        </button>
      </div>
      <ul className="movieInfoWrap">
        <li className="movieType">
          <h3 className="title">상영타입</h3>
          <span>2D, 2D ATMOS, 디지털가치봄</span>
        </li>
        <li className="director">
          <h3 className="title">감독</h3>
          {movie.directors !== undefined &&
            movie.directors.map((director, i) => {
              return <span key={`movie.$${director}`}>{director}</span>;
            })}
        </li>
        <li className="genre">
          <h3 className="title">장르</h3>
          <span>
            {movie.genres !== undefined &&
              movie.genres.map((genre, i) => {
                return <span key={`movie.${genre}`}>{genre}</span>;
              })}
          </span>
          /<span className="runningTime">{movie.running_time}분</span>
        </li>
        <li className="ageGrade">
          <h3 className="title">등급</h3>
          <span>15세 이상 관람가</span>
        </li>
        <li className="openingDate">
          <h3 className="title">개봉일</h3>
          <span>{movie.open_date}</span>
        </li>
        <li className="cast">
          <h3 className="title">출연진</h3>
          {movie.actors !== undefined &&
            movie.actors.map((actor, i) => {
              return <span key={`movie.${actor}`}>{actor}</span>;
            })}
        </li>
      </ul>
      <ul className="movieInfoGraphicWrap">
        <li>
          <h3 className="title">관람포인트</h3>
          <p className="content">배우·연출</p>
          <div className="graph">
            <RaderChartKeyPoint />
          </div>
        </li>
        <li>
          <h3 className="title">실관람 평점</h3>
          <p className="content">{Math.ceil(movie.average_point * 10) / 10}</p>
          <div className="scoreGraphWrap">
            <div className="scoreGraph">
              <strong>{Math.ceil(movie.average_point * 10) / 10}</strong>
            </div>
            <span>관람 후</span>
          </div>
        </li>
        <li>
          <h3 className="title">예매율</h3>
          <p className="content">{movie.reservation_rate}%</p>
          <div className="graph">
            <RatingChart />
          </div>
        </li>
        <li>
          <h3 className="title">일자별 관객수</h3>
          <p className="content">{numWithComma(movie.acc_audience)}</p>
          <div className="dayAudienceGraph">
            <DayAudienceLine />
          </div>
        </li>
      </ul>
      <div className="movieCommentWrap">
        <p className="sTitle">
          {movie.name_kor}에 대한{" "}
          <span>{movie.ratings && movie.ratings.length}</span>개의 이야기가
          있어요!
        </p>
        <div className="myComment">
          <div className="profile">
            <div className="photo">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mega-profile.png"
                alt=""
              />
            </div>
            <p className="id">MEGABOX</p>
          </div>
          <div className="box">
            <p className="content">
              <span className="movieTitle">{movie.name_kor}</span> 재미있게
              보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.
            </p>
            <button
              type="button"
              className={["btn", "xSmall", "outLine", "white"].join(" ")}
            >
              <span className={["icon", "write"].join(" ")}></span>
              <span>관람평쓰기</span>
            </button>
          </div>
        </div>
        <ul className="commentList">
          {movie.ratings !== undefined &&
            movie.ratings.map((rating, i) => {
              return (
                <li key={`rating.${i}`} className="movieComment">
                  <div className="profile">
                    <div className="photo"></div>
                    <p className="id">{rating.member}</p>
                  </div>
                  <div className="box">
                    <h3 className="title">관람평</h3>
                    <p className="ratePoint">{rating.score}</p>
                    <p className="hashTag">
                      <span>{rating.key_point}</span>
                    </p>
                    <p className="comment">{rating.comment}</p>
                    {/* <button type="button">
                    <span className={["icon", "like"].join(" ")}></span>
                    <span>0</span>
                  </button> */}
                    <button type="button">
                      <span className={["icon", "btnMore"].join(" ")}></span>
                    </button>
                  </div>
                  <div className="writeDateCount">5일전</div>
                </li>
              );
            })}
        </ul>
      </div>
      {/* <div className="moviePostWrap">
        <div className="subTitleWrap">
          <h3 className="title">무비포스트</h3>
          <button type="button" className={["btn", "regular"].join(" ")}>
            더보기
            <span className={["icon", "arrowRightWhite"].join(" ")}></span>
          </button>
        </div>
        <ul className="postList">
          <li className="post">
            <div className="movieStillCut">
              <img
                src="https://img.megabox.co.kr/SharedImg/2020/06/26/Q4hUYE1kpUxuFZwgNCfZqSgKyIkDsnAf.jpg"
                alt=""
              />
              <span className={["icon", "text"].join(" ")}></span>
            </div>
            <ul className="postComment">
              <li className="userId">testUserId</li>
              <li className="movieTitle">#살아있다</li>
              <li className="comment">돈주고 보지마라!!</li>
              <li className="writeDate">3일전</li>
              <li className="like">
                <span className={["icon", "like"].join(" ")}></span>
                <span>0</span>
              </li>
              <li className="replyComment">
                <span className={["icon", "reply"].join(" ")}></span>
                <span>0</span>
              </li>
            </ul>
          </li>
          <li className="post">
            <div className="movieStillCut">
              <img
                src="https://img.megabox.co.kr/SharedImg/2020/06/26/Q4hUYE1kpUxuFZwgNCfZqSgKyIkDsnAf.jpg"
                alt=""
              />
              <span className={["icon", "text"].join(" ")}></span>
            </div>
            <ul className="postComment">
              <li className="userId">testUserId</li>
              <li className="movieTitle">#살아있다</li>
              <li className="comment">돈주고 보지마라!!</li>
              <li className="writeDate">3일전</li>
              <li className="like">
                <span className={["icon", "like"].join(" ")}></span>
                <span>0</span>
              </li>
              <li className="replyComment">
                <span className={["icon", "reply"].join(" ")}></span>
                <span>0</span>
              </li>
            </ul>
          </li>
          <li className="post">
            <div className="movieStillCut">
              <img
                src="https://img.megabox.co.kr/SharedImg/2020/06/26/Q4hUYE1kpUxuFZwgNCfZqSgKyIkDsnAf.jpg"
                alt=""
              />
              <span className={["icon", "text"].join(" ")}></span>
            </div>
            <ul className="postComment">
              <li className="userId">testUserId</li>
              <li className="movieTitle">#살아있다</li>
              <li className="comment">돈주고 보지마라!!</li>
              <li className="writeDate">3일전</li>
              <li className="like">
                <span className={["icon", "like"].join(" ")}></span>
                <span>0</span>
              </li>
              <li className="replyComment">
                <span className={["icon", "reply"].join(" ")}></span>
                <span>0</span>
              </li>
            </ul>
          </li>
          <li className="post">
            <div className="movieStillCut">
              <img
                src="https://img.megabox.co.kr/SharedImg/2020/06/26/Q4hUYE1kpUxuFZwgNCfZqSgKyIkDsnAf.jpg"
                alt=""
              />
              <span className={["icon", "text"].join(" ")}></span>
            </div>
            <ul className="postComment">
              <li className="userId">testUserId</li>
              <li className="movieTitle">#살아있다</li>
              <li className="comment">돈주고 보지마라!!</li>
              <li className="writeDate">3일전</li>
              <li className="like">
                <span className={["icon", "like"].join(" ")}></span>
                <span>0</span>
              </li>
              <li className="replyComment">
                <span className={["icon", "reply"].join(" ")}></span>
                <span>0</span>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
      <div className="eventWrap">
        <div className="subTitleWrap">
          <h3 className="title">이벤트</h3>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => {
              history.push("/event");
              window.scrollTo(0, 0);
            }}
          >
            더보기
            <span className={["icon", "arrowRight"].join(" ")}></span>
          </button>
        </div>
        <ul className="eventList">
          <Link to="/event">
            <li>
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/03/4UHs4ki7JVk2hwI0PTDbDT3aVyL5aWYu.jpg"
                alt=""
              />
            </li>
          </Link>
          <Link to="/event">
            <li>
              <img
                src="https://img.megabox.co.kr/SharedImg/event/2020/07/22/EplWadj7fl7bcYkYEvGnormf42d25dto.jpg"
                alt=""
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MovieInforWrap;
