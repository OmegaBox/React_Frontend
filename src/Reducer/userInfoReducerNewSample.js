{
  id: 0,
  name: "홍길동",
  tier: "일반회원",
  point: 18000,
  bookingHistory: [ // 예매리스트
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
  ],
  cancelMovies: [ // 예매취소 리스트
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
  movieTimeLine: [ 
    // movieTimeLine에 있는 영화들은 날짜별로 묶어서 보내주세요. 구분에 따라 기준날짜와 들어있는 데이터가 달라집니다.. 
    { // comment 작성한 영화, 기준날짜는 comment 작성한 날짜, 작성기능은 구현하지 않을 예정이지만, 이미 작성된 한줄평을 보여주는 부분을 있을 거라서 필요합니다.
      id: 0,
      movieDivision: "commentMovie", // 구분, movieTimeLine에 필요
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
      writeDate: "2020-06-27", // 코멘트 작성 날짜
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    },
    { // 관람한 영화, 기준 날짜는 영화를 관람한 날짜 (실제 상영된 날짜)
      id: 1,
      movieDivision: "watchedMovie", // 구분, movieTimeLine에 필요
      title: "#살아있다",
      theater: "강남",
      screeningHall: "1관",
      date: "2020-06-28",
      time: "15:40",
      round: 1,
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    },
    { // 보고싶은 영화, 기준 날짜는 영화에 좋아요를 누른 날짜
      id: 2,
      movieDivision: "favoriteMovie", // 구분, movieTimeLine에 필요
      title: "결백",
      openDate: "2020-06-10",
      movieAgeGrade: 15,
      director: "박상현",
      genre: "드라마",
      runningTime: 111,
      favoriteCount: 675,
      poster:
        "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
      likeDate: "2020-06-10", // 좋아요 누른 날짜
    },
  ],
};