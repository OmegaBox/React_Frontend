import { movieApi } from "../Api/api"

const MOVIE_SUCCESS = "movie/SUCCESS";
const MOVIE_ERROR = "movie/ERROR";
const MOVIE_LOADING = "movie/LOADING";

const MOVIE_DETAIL_SUCCESS = "movies/SUCCESS";
const MOVIE_DETAIL_ERROR = "movies/ERROR";
const MOVIE_DETAIL_LOADING = "movies/LOADING";

const BOOKING_AGE_RATING_SUCCESS = "ageBooking/SUCCESS";
const BOOKING_AGE_RATING_ERROR = "ageBooking/ERROR";
const BOOKING_AGE_RATING_LOADING = "ageBooking/LOADING";

const RESET_MOVIE_PAGE = "movie/RESET_MOVIEPAGE";

const SEARCH_MOVIES = "movies/SEARCH";


const setSuccessMovie = (data) => ({ type: MOVIE_SUCCESS, data });
const setLoadingMovie = () => ({ type: MOVIE_LOADING });
const setErrorMovie = (error) => ({ type: MOVIE_ERROR, error });

const setSuccessMovieDetail = (data) => ({ type: MOVIE_DETAIL_SUCCESS, data })
const setLoadingMovieDetail = () => ({ type: MOVIE_DETAIL_LOADING });
const setErrorMovieDetail = (error) => ({ type: MOVIE_DETAIL_ERROR, error });

const setSuccessBookingAgeRating = (id, data) => ({ type: BOOKING_AGE_RATING_SUCCESS, id, data })
const setLoadingBookingAgeRating = () => ({ type: BOOKING_AGE_RATING_LOADING, })
const setErrorBookingAgeRating = (error) => ({ type: BOOKING_AGE_RATING_ERROR, error })

const setSearchMovies = (data) => ({ type: SEARCH_MOVIES, data })

const resetMoviePage = () => ({ type: RESET_MOVIE_PAGE });




const getMovies = () => async (dispatch) => {
  dispatch(setLoadingMovie());
  try {
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
  dispatch(setLoadingMovieDetail());
  try {
    const res = await movieApi.getMovie(id);
    if (res.status === 200) {
      dispatch(setSuccessMovieDetail(res.data));
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

const getAgeBooking = (id) => async (dispatch) => {
  dispatch(setLoadingBookingAgeRating());
  try {
    const res = await movieApi.getAgeBooking(id);
    if (res.status === 200) {
      dispatch(setSuccessBookingAgeRating(id, res.data));
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


const getSearchMovie = (keyword) => async (dispatch) => {
  try {
    const search = await movieApi.getSearch(keyword);
    await (search.data.results)
    if (search.status === 200) {
      dispatch(setSearchMovies(search.data.results));
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


const resetMovies = (url) => (dispatch) => {
  dispatch(resetMoviePage());
}




const initialState = {
  page: 0,
  loading: false,
  error: false,
  errorMessage: "",
  movies: [],
  detail: {
    detail: {},
    loading: false,
  },
  ageBooking: {},
  like: false,
};





const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.data,
        error: null,
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
        loading: false,
        error: null,
      }
    case MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.data,
        error: null,
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
      }
    case BOOKING_AGE_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        ageBooking: action.data,
        error: null,
      }
    case BOOKING_AGE_RATING_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        page: state.page,
      }
    case BOOKING_AGE_RATING_ERROR:
      return {
        ...state,
        error: action.error.state,
        errorMessage: action.error.message,
        loading: false
      }
    case RESET_MOVIE_PAGE:
      return {
        ...initialState
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.data
      }
    default:
      return state;
  }
};

export {
  getMovies,
  getMovie,
  getAgeBooking,
  resetMovies,
  getSearchMovie,
  setSearchMovies,
  movieReducer,
  setSuccessMovie,
  setLoadingMovie,
  setSuccessMovieDetail,
  setLoadingMovieDetail,
  setErrorMovie,
  setErrorMovieDetail,
  setSuccessBookingAgeRating,
  setErrorBookingAgeRating,
  setLoadingBookingAgeRating
};
