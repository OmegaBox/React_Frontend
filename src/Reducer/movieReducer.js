import { movieApi } from "../Api/api"

const SUCCESS = "movie/SUCCESS";
const ERROR = "movie/ERROR";
const LOADING = "movie/LOADING";

const setSuccessState = (data) => ({ type: SUCCESS, data });
const setLoadingState = () => ({ type: LOADING });
const setErrorState = (error) => ({ type: ERROR, error });

const getMovies = () => async (dispatch) => {
  try {
    dispatch(setLoadingState());
    const res = await movieApi.getMovies();
    console.log(res.data.results);

    if (res.status === 200) {
      if (!Array.isArray(res.data.results)) return console.error("배열이 아닙니다.");
      dispatch(setSuccessState(res.data.results));
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
// useEffect(() => {
//   Movie();
// }, []);


const initialState = {
  page: 0,
  loading: false,
  error: false,
  errorMessage: "",
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    case SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.data,
        error: null,
        page: action.page
      }
    case ERROR:
      return {
        ...state,
        error: action.error.state,
        errorMessage: action.error.message,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        page: state.page,
      }
    default:
      return state;
  }
};

export { getMovies, movieReducer, setSuccessState, setLoadingState, setErrorState };
