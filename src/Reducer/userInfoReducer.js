const SUCCESS = "userInfo/SUCCESS";
const ERROR = "userInfo/ERROR";
const LOADING = "userInfo/LOADING";

const initialState = {
  id: 0,
  name: "홍길동",
  tier: "일반회원",
  point: 18000,
  scheduledPoint: 0,
  expiredPoint: 1200,
  bookingHistory: [
    {
      id: 0,
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
      paymentDate: "2020-04-27",
      paymentTime: "15:30",
      scheduledPoint: 0,
    },
    {
      id: 1,
      ticketNumber: "T907030552868",
      title: "오메가박스",
      movieAgeGrade: 15,
      accFavorite: 675, // 누적 좋아요
      theater: "우리집",
      screeningHall: "특별관",
      date: "2020-07-01",
      time: "10:30",
      round: 1,
      attendance: 1, // 관람인원
      seats: ["K열 14"],
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg",
      paymentDate: "2020-06-27",
      paymentTime: "15:30",
      scheduledPoint: 0,
    },
    {
      id: 2,
      ticketNumber: "T907030552868",
      title: "결백",
      movieAgeGrade: 15,
      accFavorite: 675, // 누적 좋아요
      theater: "우리집",
      screeningHall: "특별관",
      date: "2020-07-01",
      time: "10:30",
      round: 1,
      attendance: 1, // 관람인원
      seats: ["K열 14"],
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg",
      paymentDate: "2020-01-27",
      paymentTime: "15:30",
      scheduledPoint: 0,
    },
  ],
  favoriteMovies: [
    {
      id: 0,
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
      id: 0,
      title: "오메가박스",
      rating: 8,
      hashTag: [
        {
          id: 0,
          tag: "OST",
        },
        {
          id: 1,
          tag: "배우",
        },
      ], // 연출, 스토리, 영상미, 배우, OST
      commentText: "정말 강추합니다.",
      accFavorite: 675,
      writeDate: "2020-06-27",
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    },
  ],
  watchedMovies: [
    {
      id: 0,
      title: "#살아있다",
      theater: "강남",
      screeningHall: "1관",
      date: "2020-06-28",
      time: "15:40",
      round: 1,
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    },
    {
      id: 1,
      title: "결백",
      theater: "강남",
      screeningHall: "1관",
      date: "2020-06-28",
      time: "15:40",
      round: 1,
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    },
  ],
  cancelMovies: [
    {
      id: 0,
      title: "다크나이트",
      theater: "강남",
      date: "2020-06-28",
      time: "22:20",
      price: 6000,
      cancelDate: "2020-06-28",
      cancelTime: "15:37",
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
