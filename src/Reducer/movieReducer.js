const SUCCESS = "movie/SUCCESS";
const ERROR = "movie/ERROR";
const LOADING = "movie/LOADING";

const SET_ACC_FAVORITE = "movie/ACC_FAVORITE";

const setSuccessState = (data) => ({ type: SUCCESS, data });
const setLoadingState = () => ({ type: LOADING });
const setErrorState = (error) => ({ type: ERROR, error });

const AccFavorite = (accFavorite) => ({ type: SET_ACC_FAVORITE, accFavorite });

const initialState = {
  page: 0,
  loading: false,
  error: false,
  errorMessage: "",
  movies: [
    // {
    //   id: 3,
    //   name_kor: "#살아있다",
    //   name_eng: "#ALIVE",
    //   running_time: "97",
    //   genre: null,
    //   rank: 1,
    //   acc_audience: 1194980,
    //   reservation_rate: 63.2,
    //   open_date: "2020-06-24",
    //   grade: "15+",
    //   description:
    //     "원인불명 증세의 사람들의 공격에 통제 불능에 빠진 도시.\r\n영문도 모른 채 잠에서 깬 ‘준우’(유아인)는 아무도 없는 집에 혼자 고립된 것을 알게 된다.\r\n데이터, 와이파이, 문자, 전화 모든 것이 끊긴 채 고립된 상황.\r\n연락이 두절된 가족에 이어 최소한의 식량마저 바닥이 나자 더 이상 버티기 힘들어진 ‘준우’.\r\n하지만 그 순간 건너편 아파트에서 누군가 시그널을 보내온다.\r\n또 다른 생존자 ‘유빈’(박신혜)이 아직 살아있음을 알게 된 ‘준우’는\r\n함께 살아남기 위한 방법을 찾아 나서는데...!\r\n\r\n꼭 살아남아야 한다",
    //   poster: null,
    //   trailer: null,
    // },
    // {
    //   id: 4,
    //   name_kor: "결백",
    //   name_eng: "Innocence",
    //   running_time: "110",
    //   genre: null,
    //   rank: 2,
    //   acc_audience: 742917,
    //   reservation_rate: 13.5,
    //   open_date: "2020-06-10",
    //   grade: "15세이상관람가",
    //   description: "",
    //   poster: null,
    //   trailer: null,
    // },
    // {
    //   id: 5,
    //   name_kor: "온워드: 단 하루의 기적",
    //   name_eng: "Onward",
    //   running_time: "102",
    //   genre: null,
    //   rank: 3,
    //   acc_audience: 296931,
    //   reservation_rate: 8.7,
    //   open_date: "2020-06-17",
    //   grade: "전체관람가",
    //   description: "",
    //   poster: null,
    //   trailer: null,
    // },
    // {
    //   id: 6,
    //   name_kor: "배트맨 비긴즈",
    //   name_eng: "Batman Begins",
    //   running_time: "134",
    //   genre: null,
    //   rank: 4,
    //   acc_audience: 902295,
    //   reservation_rate: 2.6,
    //   open_date: "2005-06-24",
    //   grade: "12세관람가",
    //   description: "",
    //   poster: null,
    //   trailer: null,
    // },
  ],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        loading: false,
        error: null,
        movies: action.data,
        page: action.page,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.error.state,
        errorMessage: action.error.message,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        page: state.page,
      };

    default:
      return state;
  }
};

export { movieReducer, setSuccessState, setLoadingState, setErrorState };
