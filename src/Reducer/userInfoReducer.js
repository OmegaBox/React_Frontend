import { put, takeLatest } from "redux-saga/effects";
import { userApi, isLogin } from "../Api/api";

import cookie from "react-cookies";

const SUCCESS = "userInfo/SUCCESS";
const ERROR = "userInfo/ERROR";
const LOADING = "userInfo/LOADING";

const LOGIN = "userInfo/LOGIN";
const LOGIN_LOADING = "userInfo/LOGIN_LOADING";
const LOGIN_SUCCESS = "userInfo/LOGIN_SUCCESS";

const LOGOUT = "userInfo/LOGOUT";

const startLogout = () => ({ type: LOGOUT });

// 사가 진입용 액션
const startLogin = (user, history) => ({ type: LOGIN, user, history });

function* loginSaga(action) {
  yield put({ type: LOGIN_LOADING });

  try {
    const res = yield userApi.login(action.user);

    if (res.status === 200) {
      if (cookie.load("accessToken")) {
        cookie.remove("accessToken", {
          path: "/",
        });
      }
      if (cookie.load("refreshToken")) {
        cookie.remove("refreshToken", {
          path: "/",
        });
      }

      cookie.save("accessToken", res.data.access, {
        path: "/",
        maxAge: 3600,
      });
      cookie.save("refreshToken", res.data.refresh, {
        path: "/",
      });

      console.log("저장한거 확인 accessToken", cookie.load("accessToken"));
      console.log("저장한거 확인 refreshToken", cookie.load("refreshToken"));

      console.log("엑세스토큰 유저인포리듀서", cookie.load("accessToken"));

      yield put({
        type: LOGIN_SUCCESS,
        id: res.data.username,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        birthDate: res.data.birth_date,
      });
      action.history.push("/");
    } else {
      console.log("통신은 성공했으나 에러발생", res);
    }
  } catch (e) {
    console.log(e.response);
  }
}

function* userInfoSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  isLogin: false,
  id: "omegaman",
  name: "홍길동",
  email: "xxxxx@naver.com",
  point: 18000,
  mobile: "+821011111111",
  birthDate: "2020-07-08",
  loading: false,
  error: false,
  errorMessage: "",
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        id: action.id,
        name: action.name,
        email: action.email,
        mobile: action.mobile,
        birthDate: action.birthDate,
      };
    case LOGOUT:
      console.log("로그아웃 진입 성공");

      return {
        ...state,
        isLogin: false,
      };
    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export { userInfoReducer, userInfoSaga, startLogin, startLogout };
