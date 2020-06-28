const SUCCESS = "userInfo/SUCCESS";
const ERROR = "userInfo/ERROR";
const LOADING = "userInfo/LOADING";

const initialState = {
  name: "홍길동",
  tier: "일반회원",
  point: 18000,
  scheduledPoint: 0,
  expiredPoint: 1200,
  bookingHistory: [
    {
      ticketNumber: "T907030552868",
      title: "살아있다",
      theater: "강남",
      screeningHall: "1관",
      date: "2020-06-28",
      time: "22:20",
      attendance: 1, // 관람인원
      seats: ["K열 14"],
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg",
      paymentDate: "2020-06-27",
    },
  ],
  favoriteMovies: [
    {
      title: "결백",
      movieAgeGrade: 15,
      FavoriteCount: 675,
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    },
  ],
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export { userInfoReducer };
