import React from "react";
import "./style/MainCuration.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectMovie } from "../../../Reducer/bookingReducer";


const MainCuration = () => {
  const movie = useSelector((state) => state.Movie.movies);
  const movieInfor = movie.filter((movie) => movie.id === 10)

  const dispatch = useDispatch();
  return (
    <div className="curationContainer">
      <div className="mainCurationLayout">
        <div className="mainCuration">
          <div className="mainHeader">
            <h2>큐레이션</h2>
            <div className="moreCurationWrap">
              <div className="moreCuration">큐레이션 더보기</div>
              <div className="icon moreMovieIcon"></div>
            </div>
          </div>
          <div className="curationPoster">
            {movieInfor.map((movie, i) => {
              return (
                <div key={`movie.${i}`}>
                  <img
                    className="curationImg"
                    src={movie.poster}
                    alt="야구소녀"
                  />
                  <Link to="/detail/10">
                    <button
                      className={["btn", "outLine", "lightGray", "xLarge", "curationdetailButton"].join(" ")}>
                      상세정보
              </button>
                  </Link>
                  <Link to="/booking">
                    <button
                      onClick={() =>
                        dispatch(
                          selectMovie({
                            title: movie.name_kor,
                            poster: movie.poster,
                            id: movie.id,
                          })
                        )}
                      className={["btn", "fill", "subDark", "main", "xLarge", "curationBookingButton"].join(" ")}>
                      예매
              </button>
                  </Link>
                </div>
              )
            })}
            <div className="filmSociety"></div>
            <div className="curationComment">
              <h2>#필름소사이어티</h2>
              <h3>야구소녀</h3>
              <br />
              <p className="storySummary">“사람들이 내 미래를 어떻게 알아요? 나도 모르는데…”
            </p>
              <br />
              <br />
              <p>최고구속 134km, 볼 회전력의 강점으로 ‘천재 야구소녀’라는 별명을 얻으며 주목받았던 ‘주수인’(이주영).
              고교 졸업 후 오로지 프로팀에 입단해 계속해서 야구를 하는 것이 꿈이지만 여자라는 이유로 제대로 된 평가도 기회도 잡지 못한다.
              엄마, 친구, 감독까지 모두가 꿈을 포기하라고 할 때, 야구부에 새로운 코치 ‘진태’(이준혁)가 부임하고 수인에게도 큰 변화가 찾아오는데…
            </p>
              <div className="posterWrap">
                <figure>
                  <img src="https://img.megabox.co.kr/SharedImg/2020/06/23/4jr7i0mDwxOpILVarLlS05gmjZt8GiPp_230.jpg"
                    alt="[시네도슨트] 빈센트 반 고흐 미술관&amp;크롤러 뮐러 미술관" />
                  <figcaption>[시네도슨트] 빈센트 반 고흐 미술관&amp;크롤러 뮐러 미술관</figcaption>
                </figure>
                <figure>
                  <img
                    src="https://img.megabox.co.kr/SharedImg/2020/06/16/T43wKaYuW6i30Kc5Rd1SJ8gdtoDLzgwO_230.jpg"
                    alt="콜 미 바이 유어 네임"
                  />
                  <figcaption>콜 미 바이 유어 네임</figcaption>
                </figure>
                <figure>
                  <img
                    src="https://img.megabox.co.kr/SharedImg/2020/06/15/mkuTBD77ntyhS0FQUuZcYX03Fh3Cur6K_230.jpg"
                    alt="[오페라] 아크나텐 @The Met"
                  />
                  <figcaption>[오페라] 아크나텐 @The Met</figcaption>
                </figure>
                <figure>
                  <img
                    src="https://img.megabox.co.kr/SharedImg/2020/06/23/lepsjCKRQ84828xXV8miut1CmdnNG1X4_230.jpg"
                    alt="[특별 상영] 베토벤 프로젝트"
                  />
                  <figcaption>[특별 상영] 베토벤 프로젝트</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCuration;
