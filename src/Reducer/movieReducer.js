const SUCCESS = "movie/SUCCESS";
const ERROR = "movie/ERROR";
const LOADING = "movie/LOADING";

const initialState = {
  page: 0,
  loading: false,
  error: false,
  errorMessage: "",
  movies: [
    {
      id: 1,
      title: "살아있다",
      enTitle: "ALIVE",
      bookingRate: 0.1, // 예매율
      bookingRanking: 1, // 예매순위
      accAudience: 4006, // 누적관객수
      accFavorite: 714, // 누적 좋아요
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg",
      open: "2020-06-23", // 개봉일
      close: "2020-08-23", // 종영일
      description:
        "원인불명 증세의 사람들의 공격에 통제 불능에 빠진 도시.영문도 모른 채 잠에서 깬 '준우'(유아인)는 아무도 없는 집에 혼자 고립된 것을 알게 된다. 데이터, 와이파이, 문자, 전화 모든 것이 끊긴 채 고립된 상황. 연락이 두절된 가족에 이어 최소한의 식량마저 바닥이 나자 더 이상 버티기 힘들어진 '준우'.",
      comments: [
        // 댓글
        {
          id: "hodeng",
          goodPoint: ["연출", "스토리"],
          point: 10, // 점수(10점만점)
          comment: "개꿀잼",
        },
      ],
    },
  ],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export { movieReducer };
