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
      movieAgeGrade: 15,
      accFavorite: 675, // 누적 좋아요
      theater: "강남",
      screeningHall: "1관",
      date: "2020-06-28",
      time: "15:30",
      round: 1,
      attendance: 1, // 관람인원
      seats: ["K열 14"],
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg",
      paymentDate: "2020-06-27",
      scheduledPoint: 0,
    },
  ],
  favoriteMovies: [
    {
      title: "결백",
      openDate: "2020-06-10",
      movieAgeGrade: 15,
      director: "박상현",
      genre: "드라마",
      runningTime: 111,
      favoriteCount: 675,
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    },
  ],
  commentMovies: [
    {
      title: "결백",
      rating: 8,
      hashTag: "OST", // 연출, 스토리, 영상미, 배우, OST
      commentText: "정말 강추합니다.",
      accFavorite: 675,
      writeDate: "2020-06-27",
    },
  ],
  watchedMovies: [
    {
      title: "결백",
      theater: "강남",
      screeningHall: "1관",
      date: "2020-06-28",
      time: "15:40",
      round: 1,
    },
  ],
  cancelMovies: [
    {
      title: "다크나이트",
      theater: "강남",
      date: "2020-06-28",
      time: "22:20",
      price: 6000,
      cancelDate: "2020-06-28",
      cancelTime: "15:37",
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
