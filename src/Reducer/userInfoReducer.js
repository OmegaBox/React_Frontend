import { put, call, takeLatest } from "redux-saga/effects";
import { userApi, isLogin } from "../Api/api";
import cookie from "react-cookies";
import { removeCookies } from "../Utils/ultil";

const SUCCESS = "userInfo/SUCCESS";
const ERROR = "userInfo/ERROR";
const LOADING = "userInfo/LOADING";

const LOGIN = "userInfo/LOGIN";
const LOGIN_LOADING = "userInfo/LOGIN_LOADING";
const LOGIN_SUCCESS = "userInfo/LOGIN_SUCCESS";
const LOGIN_ERROR = "userInfo/LOGIN_ERROR";
const ALREADY_LOGIN = "userInfo/ALREADY_LOGIN";

const LOGOUT_SUCCESS = "userInfo/LOGOUT";

const checkLogin = () => async (dispatch) => {
  const res = await isLogin();
  console.log("로그인여부 확인", res);

  if (res) dispatch({ type: ALREADY_LOGIN });
  else dispatch({ type: LOGOUT_SUCCESS });
};

const startLogout = () => async (dispatch) => {
  await userApi.logout();
  removeCookies();
  console.log("로그아웃");

  dispatch({ type: LOGOUT_SUCCESS });
};

// 사가 진입용 액션
const startLogin = (user, history, setError) => ({
  type: LOGIN,
  user,
  history,
  setError,
});

function* loginSaga(action) {
  yield put({ type: LOGIN_LOADING });

  try {
    const res = yield call(userApi.login, action.user);
    console.log(res);

    if (res.status === 200) {
      removeCookies();

      cookie.save("accessToken", res.data.access, {
        path: "/",
        maxAge: 3600,
      });

      cookie.save("refreshToken", res.data.refresh, {
        path: "/",
        maxAge: 86400,
      });
      cookie.save("id", res.data.id, {
        path: "/",
        maxAge: 86400,
      });

      yield put({
        type: LOGIN_SUCCESS,
        userName: res.data.username,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        birthDate: res.data.birth_date,
      });
      action.history.push("/");
    } else {
      yield put({
        type: LOGIN_ERROR,
        errorMessage: "서버와의 연결이 원활하지 않습니다",
      });
    }
  } catch (e) {
    yield put({
      type: LOGIN_ERROR,
      errorMessage: "아이디/비밀번호를 확인 해주세요",
    });
  }
}

function* userInfoSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  isLogin: false,
  userName: "omegaman",
  name: "홍길동",
  email: "xxxxx@naver.com",
  mobile: "+821011111111",
  birthDate: "2020-07-08",
  login: {
    loading: false,
    error: false,
    errorMessgae: "",
  },
  errorMessage: "",
  profile: {
    tier: "basic",
    point: 18000,
  },
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
    case LOGIN_LOADING:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        userName: action.userName,
        name: action.name,
        email: action.email,
        mobile: action.mobile,
        birthDate: action.birthDate,
        login: {
          ...state.login,
          loading: false,
        },
      };

    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: true,
          errorMessage: action.errorMessage,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
      };

    case ALREADY_LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export { userInfoReducer, userInfoSaga, checkLogin, startLogin, startLogout };
