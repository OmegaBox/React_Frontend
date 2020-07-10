import { movieApi } from "../Api/api"

const MOVIE_SUCCESS = "movie/SUCCESS";
const MOVIE_ERROR = "movie/ERROR";
const MOVIE_LOADING = "movie/LOADING";

const MOVIE_DETAIL_SUCCESS = "movies/SUCCESS";
const MOVIE_DETAIL_ERROR = "movies/ERROR";
const MOVIE_DETAIL_LOADING = "movies/LOADING";

const SET_SELETED_MOVIE_DETAIL = "movies/SELETED_MOVIE_DETAIL";

const SEARCH_SPACE = "movies/SEARCH_SPACE";
const ADD_SPACE = "movies/ADD_SPACE";

const setSuccessMovie = (data) => ({ type: MOVIE_SUCCESS, data });
const setLoadingMovie = () => ({ type: MOVIE_LOADING });
const setErrorMovie = (error) => ({ type: MOVIE_ERROR, error });

const setSuccessMovieDetail = (data) => ({ type: MOVIE_DETAIL_SUCCESS, data });
const setLoadingMovieDetail = () => ({ type: MOVIE_DETAIL_LOADING });
const setErrorMovieDetail = (error) => ({ type: MOVIE_DETAIL_ERROR, error });
const setSelectedMovieDetail = (id) => ({ type: SET_SELETED_MOVIE_DETAIL, id })


// 검색
// const setSearchSpace = (keyword) => ({ type: SEARCH_SPACE, keyword });
// const setAddSpace = () => ({ type: ADD_SPACE });

const getMovies = () => async (dispatch) => {
  try {
    dispatch(setLoadingMovie());
    const res = await movieApi.getMovies();
    if (res.status === 200) {
      if (!Array.isArray(res.data.results)) return console.error("배열이 아닙니다.");
      dispatch(setSuccessMovie(res.data.results));
    } else {
      dispatch({
        type: "ERROR",
        error: {
          state: true,
          message: test.statusText,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: "ERROR",
      error: {
        state: true,
        message: error.message,
      },
    });
  }
};

const getMovie = (id) => async (dispatch) => {
  console.log("겟무비 도착", id);

  dispatch(setLoadingMovieDetail());
  try {
    const res = await movieApi.getMovie(id);
    console.log('겟무비 시도 결과', res);
    dispatch(setSuccessMovieDetail());
    if (res.status === 200) {
      if (!Array.isArray(res.data.results)) return console.error("배열이 아닙니다.");
      dispatch(setSuccessMovieDetail(res.data.results));
    } else {
      dispatch({
        type: "ERROR",
        error: {
          state: true,
          message: test.statusText,
        },
      });
    }
  } catch (error) {
    console.log('겟무비에러', error.response);

    dispatch({
      type: "ERROR",
      error: {
        state: true,
        message: error.message,
      },
    });
  }

};

// const getSearch = (e, keyword) => async (dispatch) => {

// }

const initialState = {
  page: 0,
  loading: false,
  error: false,
  errorMessage: "",
  movies: [
  ],
  movieDetail: [
  ],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.data,
        error: null,
        page: action.page
      }
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.error.state,
        errorMessage: action.error.message,
        loading: false
      }
    case MOVIE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        page: state.page,
      }
    case MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        movieDetail: action.data,
        error: null,
        page: action.page
      }
    case MOVIE_DETAIL_ERROR:
      return {
        ...state,
        error: action.error.state,
        errorMessage: action.error.message,
        loading: false
      }
    case MOVIE_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        page: state.page,
      }
    case SEARCH_SPACE:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export {
  getMovies,
  getMovie,
  // getSearch,
  movieReducer,
  setSuccessMovie,
  setLoadingMovie,
  setSuccessMovieDetail,
  setLoadingMovieDetail,
  setErrorMovie,
  setErrorMovieDetail,

};
