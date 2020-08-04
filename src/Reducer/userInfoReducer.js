import { put, call, takeLatest, select } from "redux-saga/effects";
import { userApi, isLogin, movieApi } from "../Api/api";
import cookie from "react-cookies";
import { removeCookies } from "../Utils/util";
import { act } from "react-dom/test-utils";
import { changeFavorite } from "./movieReducer";
import { openModal } from "./modalReducer";

const SUCCESS = "userInfo/SUCCESS";
const ERROR = "userInfo/ERROR";
const LOADING = "userInfo/LOADING";

const LOGIN = "userInfo/LOGIN";
const LOGIN_LOADING = "userInfo/LOGIN_LOADING";
const LOGIN_SUCCESS = "userInfo/LOGIN_SUCCESS";
const LOGIN_ERROR = "userInfo/LOGIN_ERROR";
const ALREADY_LOGIN = "userInfo/ALREADY_LOGIN";

const LOGOUT_SUCCESS = "userInfo/LOGOUT";

const SET_SIGNUP_INFO = "userInfo/SET_SIGNUP_INFO";
const RESET_SIGNUP_INFO = "userInfo/RESET_SIGNUP_INFO";

export const GET_MEMBER_PROFILE = "userInfo/GET_MEMBER_PROFILE"; // 사가진입용 액션
// memberDetail
export const GET_MEMBER_DETAIL = "userInfo/GET_MEMBER_DETAIL"; // 사가진입용 액션

export const GET_MEMBER_DETAIL_LOADING = "userInfo/GET_MEMBER_DETAIL_LOADING";
export const GET_MEMBER_DETAIL_SUCCESS = "userInfo/GET_MEMBER_DETAIL_SUCCESS";
export const GET_MEMBER_DETAIL_ERROR = "userInfo/GET_MEMBER_DETAIL_ERROR";

// reserved
export const GET_RESERVED = "userInfo/GET_RESERVED"; // 사가진입용 액션

const GET_RESERVED_LOADING = "userInfo/GET_RESERVED_LOADING";
const GET_RESERVED_SUCCESS = "userInfo/GET_RESERVED_SUCCESS";
const GET_RESERVED_ERROR = "userInfo/GET_RESERVED_ERROR";

// reservedCanceled
export const GET_RESERVED_CANCELED = "userInfo/GET_RESERVED_CANCELED"; // 사가진입용 액션

const GET_RESERVED_CANCELED_LOADING = "userInfo/GET_RESERVED_CANCELED_LOADING";
const GET_RESERVED_CANCELED_SUCCESS = "userInfo/GET_RESERVED_CANCELED_SUCCESS";
const GET_RESERVED_CANCELED_ERROR = "userInfo/GET_RESERVED_CANCELED_ERROR";

// timelineRating
export const GET_TIMELINE_RATING = "userInfo/GET_TIMELINE_RATING"; // 사가진입용 액션

const GET_TIMELINE_RATING_LOADING = "userInfo/GET_TIMELINE_RATING_LOADING";
const GET_TIMELINE_RATING_SUCCESS = "userInfo/GET_TIMELINE_RATING_SUCCESS";
const GET_TIMELINE_RATING_ERROR = "userInfo/GET_TIMELINE_RATING_ERROR";

// timelineWatched
export const GET_TIMELINE_WATCHED = "userInfo/GET_TIMELINE_WATCHED"; // 사가진입용 액션

const GET_TIMELINE_WATCHED_LOADING = "userInfo/GET_TIMELINE_WATCHED_LOADING";
const GET_TIMELINE_WATCHED_SUCCESS = "userInfo/GET_TIMELINE_WATCHED_SUCCESS";
const GET_TIMELINE_WATCHED_ERROR = "userInfo/GET_TIMELINE_WATCHED_ERROR";

// timelineLike
export const GET_TIMELINE_LIKE = "userInfo/GET_TIMELINE_LIKE"; // 사가진입용 액션

const GET_TIMELINE_LIKE_LOADING = "userInfo/GET_TIMELINE_LIKE_LOADING";
const GET_TIMELINE_LIKE_SUCCESS = "userInfo/GET_TIMELINE_LIKE_SUCCESS";
const GET_TIMELINE_LIKE_ERROR = "userInfo/GET_TIMELINE_LIKE_ERROR";

// sendFavorite
export const SEND_FAVORITE = "userInfo/SEND_FAVORITE";

const resetSignupInfo = () => ({
  type: RESET_SIGNUP_INFO,
});

const checkLogin = (goLogin = false, popup = true) => async (dispatch) => {
  const res = await isLogin();

  if (res) dispatch({ type: ALREADY_LOGIN });
  else {
    dispatch({ type: LOGOUT_SUCCESS });
    popup &&
      dispatch(
        openModal("로그인이 필요한 페이지입니다.", goLogin || null, {
          oneBtn: true,
        })
      );
  }
};

const startLogout = () => async (dispatch) => {
  await userApi.logout();
  removeCookies();

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

    if (res.status === 200) {
      removeCookies();

      const expires = new Date();
      expires.setDate(Date.now() + 1000 * 60 * 59);

      cookie.save("accessToken", res.data.access, {
        path: "/",
        maxAge: 3500,
        expires,
        secure: true,
      });

      cookie.save("refreshToken", res.data.refresh, {
        path: "/",
        maxAge: 86300,
        secure: true,
      });
      cookie.save("id", res.data.id, {
        path: "/",
        maxAge: 86300,
        secure: true,
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

const socialLogin = (user, history, signOut) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  try {
    const res = await userApi.socialLogin(user);

    if (res.status === 200) {
      removeCookies();

      const expires = new Date();
      expires.setDate(Date.now() + 1000 * 60 * 59);

      cookie.save("accessToken", res.data.access, {
        path: "/",
        maxAge: 3500,
        expires,
        secure: true,
      });

      cookie.save("refreshToken", res.data.refresh, {
        path: "/",
        maxAge: 86300,
        secure: true,
      });
      cookie.save("id", res.data.id, {
        path: "/",
        maxAge: 86300,
        secure: true,
      });

      dispatch({
        type: LOGIN_SUCCESS,
        userName: res.data.username,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        birthDate: res.data.birth_date,
      });
      history.push("/");
    } else {
      dispatch({
        type: LOGIN_ERROR,
        errorMessage: "서버와의 연결이 원활하지 않습니다",
      });
    }
  } catch (e) {
    // dispatch({
    //   type: LOGIN_ERROR,
    //   errorMessage: "아이디/비밀번호를 확인 해주세요",
    // });
    signOut();
    dispatch(
      openModal("구글 계정으로 회원가입 하시겠습니까?", () => {
        dispatch({ type: SET_SIGNUP_INFO, user });
        history.push("/membersignup");
      })
    );
  }
};

const getMemberProfile = () => async (dispatch) => {
  const res = await isLogin();
  // console.log("getMemberProfile의 logincheck", res);

  if (res) {
    dispatch({ type: GET_MEMBER_DETAIL });
    dispatch({ type: GET_RESERVED });
    dispatch({ type: GET_RESERVED_CANCELED });
    dispatch({ type: GET_TIMELINE_RATING });
    dispatch({ type: GET_TIMELINE_WATCHED });
    dispatch({ type: GET_TIMELINE_LIKE });
  } else {
    dispatch(startLogout());
  }
};

// 멤버 디테일
function* memberDetail() {
  yield put({ type: GET_MEMBER_DETAIL_LOADING });

  try {
    // const loginCheck = yield isLogin();

    // if (!loginCheck) {
    //   yield put(startLogout());
    //   return;
    // }
    const res = yield call(userApi.memberDetail);
    // console.log("겟 맴버디테일", res);

    if (res.status === 200 || res.status === 201) {
      yield put({
        type: GET_MEMBER_DETAIL_SUCCESS,
        payload: res.data,
        name: res.data.name,
        profile: res.data.profile,
        likeMoviesCount: res.data.like_movies_count,
        ratingMoviesCount: res.data.rating_movies_count,
        reservedMoviesCount: res.data.reserved_movies_count,
        watchedMoviesCount: res.data.watched_movies_count,
      });
    } else {
      yield put({
        // api 연결엔 성공했으니 뭔가 이상한게 넘어옴.
        type: GET_MEMBER_DETAIL_ERROR, // 필수
        errorMessage: "실패하다!",
      });
    }
  } catch (e) {
    // console.log("마이페이지 에러", e.response);

    yield put({
      // api 연결에 문제가 있을때 이쪽으로 넘어옴.
      type: GET_MEMBER_DETAIL_ERROR, // 필수
      errorMessage: "실패하다!",
    });
  }
}

// 예약 내역
function* myReserved(action) {
  yield put({ type: GET_RESERVED_LOADING });

  try {
    // const loginCheck = yield isLogin();

    // if (!loginCheck) {
    //   yield put(startLogout());
    //   return;
    // }
    const res = yield call(userApi.myReserved, { id: action.id });
    if (res.status === 200 || res.status === 201) {
      yield put({
        type: GET_RESERVED_SUCCESS,
        payload: res.data,
        bookingList: res.data.results,
      });
    } else {
      yield put({
        // api 연결엔 성공했으니 뭔가 이상한게 넘어옴.
        type: GET_RESERVED_ERROR, // 필수
        errorMessage: "실패하다!",
      });
    }
  } catch (e) {
    // console.log("예약내역 에러", e.response);

    yield put({
      // api 연결에 문제가 있을때 이쪽으로 넘어옴.
      type: GET_RESERVED_ERROR, // 필수
      errorMessage: "실패하다!",
    });
  }
}

// 취소 내역
function* myReservedCancel(action) {
  yield put({ type: GET_RESERVED_CANCELED_LOADING });

  try {
    // const loginCheck = yield isLogin();

    // if (!loginCheck) {
    //   yield put(startLogout());
    //   return;
    // }
    const res = yield call(userApi.myReservedCancel, { id: action.id });
    if (res.status === 200 || res.status === 201) {
      yield put({
        type: GET_RESERVED_CANCELED_SUCCESS,
        payload: res.data,
        cancelList: res.data.results,
      });
    } else {
      yield put({
        // api 연결엔 성공했으니 뭔가 이상한게 넘어옴.
        type: GET_RESERVED_CANCELED_ERROR, // 필수
        errorMessage: "실패하다!",
      });
    }
  } catch (e) {
    // console.log("예약취소 에러", e.response);

    yield put({
      // api 연결에 문제가 있을때 이쪽으로 넘어옴.
      type: GET_RESERVED_CANCELED_ERROR, // 필수
      errorMessage: "실패하다!",
    });
  }
}

// 한줄평 내역
function* timelineRating(action) {
  yield put({ type: GET_TIMELINE_RATING_LOADING });

  try {
    // const loginCheck = yield isLogin();

    // if (!loginCheck) {
    //   yield put(startLogout());
    //   return;
    // }
    const res = yield call(userApi.timelineRating, { id: action.id });
    if (res.status === 200 || res.status === 201) {
      yield put({
        type: GET_TIMELINE_RATING_SUCCESS,
        payload: res.data,
        commentList: res.data.results,
      });
    } else {
      yield put({
        // api 연결엔 성공했으니 뭔가 이상한게 넘어옴.
        type: GET_TIMELINE_RATING_ERROR, // 필수
        errorMessage: "실패하다!",
      });
    }
  } catch (e) {
    // console.log("한줄평 에러", e.response);

    yield put({
      // api 연결에 문제가 있을때 이쪽으로 넘어옴.
      type: GET_TIMELINE_RATING_ERROR, // 필수
      errorMessage: "실패하다!",
    });
  }
}

// 본영화 내역
function* timelineWatched(action) {
  yield put({ type: GET_TIMELINE_WATCHED_LOADING });

  try {
    // const loginCheck = yield isLogin();

    // if (!loginCheck) {
    //   yield put(startLogout());
    //   return;
    // }
    const res = yield call(userApi.timelineWatched, { id: action.id });
    if (res.status === 200 || res.status === 201) {
      yield put({
        type: GET_TIMELINE_WATCHED_SUCCESS,
        payload: res.data,
        watchedList: res.data.results,
      });
    } else {
      yield put({
        // api 연결엔 성공했으니 뭔가 이상한게 넘어옴.
        type: GET_TIMELINE_WATCHED_ERROR, // 필수
        errorMessage: "실패하다!",
      });
    }
  } catch (e) {
    // console.log("본영화 에러", e.response);

    yield put({
      // api 연결에 문제가 있을때 이쪽으로 넘어옴.
      type: GET_TIMELINE_WATCHED_ERROR, // 필수
      errorMessage: "실패하다!",
    });
  }
}

// 보고싶은 내역
function* timelineLike(action) {
  yield put({ type: GET_TIMELINE_LIKE_LOADING });

  try {
    // const loginCheck = yield isLogin();

    // if (!loginCheck) {
    //   yield put(startLogout());
    //   return;
    // }
    const res = yield call(userApi.timelineLike, { id: action.id });
    if (res.status === 200 || res.status === 201) {
      yield put({
        type: GET_TIMELINE_LIKE_SUCCESS,
        payload: res.data,
        favoriteList: res.data.results,
      });
    } else {
      yield put({
        // api 연결엔 성공했으니 뭔가 이상한게 넘어옴.
        type: GET_TIMELINE_LIKE_ERROR, // 필수
        errorMessage: "실패하다!",
      });
    }
  } catch (e) {
    // console.log("보고싶은 에러", e.response);

    yield put({
      // api 연결에 문제가 있을때 이쪽으로 넘어옴.
      type: GET_TIMELINE_LIKE_ERROR, // 필수
      errorMessage: "실패하다!",
    });
  }
}

// 보고싶어 요청
function* sendFavoriteRequest(action) {
  const state = yield select();
  const movieId = action.movieId;
  // const loginCheck = yield isLogin();

  // if (!loginCheck) {
  //   yield put(startLogout());
  //   return;
  // }
  try {
    yield call(movieApi.registerFavorite, movieId);
    yield put({ type: GET_TIMELINE_LIKE });
    const actionFunc = state.userInfo.favoriteMovies
      .map((favorite) => favorite.movie_id)
      .includes(movieId)
      ? changeFavorite.decreaseFavorite(movieId)
      : changeFavorite.increaseFavorite(movieId);
    yield put(actionFunc);
  } catch (e) {
    console.error(e.response);
  }
}

function* userInfoSaga() {
  yield takeLatest(LOGIN, loginSaga);

  yield takeLatest(GET_MEMBER_DETAIL, memberDetail);
  yield takeLatest(GET_RESERVED, myReserved);
  yield takeLatest(GET_RESERVED_CANCELED, myReservedCancel);
  yield takeLatest(GET_TIMELINE_RATING, timelineRating);
  yield takeLatest(GET_TIMELINE_WATCHED, timelineWatched);
  yield takeLatest(GET_TIMELINE_LIKE, timelineLike);
  yield takeLatest(SEND_FAVORITE, sendFavoriteRequest);
  // yield takeLatest(GET_MEMBER_PROFILE, getMemberProfile);
}

const initialState = {
  isLogin: false,
  userName: "",
  name: "",
  email: "",
  mobile: "",
  birthDate: "",
  login: {
    loading: false,
    error: false,
    errorMessgae: "",
  },
  socialSignupInfo: {
    boolean: false,
    profileObj: {},
    tokenId: "",
  },
  errorMessage: "",
  profile: {
    tier: "비회원",
    point: 0,
  },
  likeMoviesCount: 0,
  ratingMoviesCount: 0,
  reservedMoviesCount: 0,
  watchedMoviesCount: 0,
  bookingHistory: [
    // {
    //   movie_name: "소리꾼",
    //   payed_at: "2020-07-12", // 결제 시간이 없음
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20196201.jpg",
    //   price: 3000,
    //   reservation_code: "",
    //   reservation_id: 170,
    //   screen_name: "1관",
    //   screen_type: "2D",
    //   seat_grade: [{ adult: 1, teen: 0, preferential: 0 }],
    //   seat_name: ["B7"],
    //   start_time: "2020-07-15 18:36",
    //   theater_name: "강남대로(씨티)",
    //   theater_region: "서울",
    // },
  ],
  favoriteMovies: [
    // {
    //   id: 0,
    //   movie_name: "string",
    //   poster:
    //     "https://img.megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_420.jpg",
    //   grade: "all",
    //   acc_favorite: "string",
    //   open_date: "2020-07-14",
    //   running_time: "string",
    //   directors: "string",
    //   genres: "string",
    //   liked_at: "string",
    // },
  ],
  commentMovies: [
    // {
    //   rating_id: 0,
    //   movie: {
    //     movie_name: "string",
    //     poster: "string",
    //     grade: "all",
    //     acc_favorite: "string",
    //     open_date: "2020-07-14",
    //     running_time: "string",
    //     directors: "string",
    //     genres: "string",
    //   },
    //   created_at: "2020-07-14",
    //   score: 0,
    //   key_point: "actor",
    //   comment: "string",
    // },
  ],
  watchedMovies: [
    // {
    //   payment_id: 0,
    //   screen_type: "string",
    //   screen_name: "string",
    //   seat_grade: "string",
    //   seat_name: "string",
    //   theater_name: "string",
    //   theater_region: "string",
    //   start_time: "2020-07-14T05:45:46.143Z",
    //   payed_at: "2020-07-14T05:45:46.143Z",
    //   movie: {
    //     movie_name: "string",
    //     poster: "string",
    //     grade: "all",
    //     acc_favorite: "string",
    //     open_date: "2020-07-14",
    //     running_time: "string",
    //     directors: "string",
    //     genres: "string",
    //   },
    // },
  ],
  cancelMovies: [
    // {
    //   reservation_id: 0,
    //   canceled_at: "2020-07-14 03:35:35",
    //   movie_name: "string",
    //   theater_name: "string",
    //   theater_region: "string",
    //   start_time: "2020-07-14 03:35:35",
    //   canceled_payment: 0,
    // },
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
      return initialState;

    case SET_SIGNUP_INFO:
      return {
        ...state,
        socialSignupInfo: {
          boolean: true,
          profileObj: action.user.profileObj,
          tokenId: action.user.token_id,
        },
      };
    case RESET_SIGNUP_INFO:
      return {
        ...state,
        socialSignupInfo: initialState.socialSignupInfo,
      };
    case ALREADY_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case GET_MEMBER_DETAIL_ERROR:
      return {
        ...state,
      };
    case GET_MEMBER_DETAIL_LOADING:
      return {
        ...state,
      };
    case GET_MEMBER_DETAIL_SUCCESS:
      return {
        ...state,
        name: action.name,
        profile: {
          ...state.profile,
          tier: action.profile.tier,
          point: action.profile.point,
        },
        likeMoviesCount: action.likeMoviesCount,
        ratingMoviesCount: action.ratingMoviesCount,
        reservedMoviesCount: action.reservedMoviesCount,
        watchedMoviesCount: action.watchedMoviesCount,
      };
    case GET_RESERVED_ERROR:
      return {
        ...state,
      };
    case GET_RESERVED_LOADING:
      return {
        ...state,
      };
    case GET_RESERVED_SUCCESS:
      return {
        ...state,
        bookingHistory: action.bookingList,
      };
    case GET_RESERVED_CANCELED_ERROR:
      return {
        ...state,
      };
    case GET_RESERVED_CANCELED_LOADING:
      return {
        ...state,
      };
    case GET_RESERVED_CANCELED_SUCCESS:
      return {
        ...state,
        cancelMovies: action.cancelList,
      };
    case GET_TIMELINE_RATING_ERROR:
      return {
        ...state,
      };
    case GET_TIMELINE_RATING_LOADING:
      return {
        ...state,
      };
    case GET_TIMELINE_RATING_SUCCESS:
      return {
        ...state,
        commentMovies: action.commentList,
      };
    case GET_TIMELINE_WATCHED_ERROR:
      return {
        ...state,
      };
    case GET_TIMELINE_WATCHED_LOADING:
      return {
        ...state,
      };
    case GET_TIMELINE_WATCHED_SUCCESS:
      return {
        ...state,
        watchedMovies: action.watchedList,
      };
    case GET_TIMELINE_LIKE_ERROR:
      return {
        ...state,
      };
    case GET_TIMELINE_LIKE_LOADING:
      return {
        ...state,
      };
    case GET_TIMELINE_LIKE_SUCCESS:
      return {
        ...state,
        favoriteMovies: action.favoriteList,
      };
    case ERROR:
    case LOADING:
    default:
      return state;
  }
};

export {
  userInfoReducer,
  userInfoSaga,
  checkLogin,
  startLogin,
  startLogout,
  memberDetail,
  socialLogin,
  resetSignupInfo,
  getMemberProfile,
};
