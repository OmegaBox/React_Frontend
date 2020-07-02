const SUCCESS = "initMovie/SUCCESS";
const ERROR = "initMovie/ERROR";
const LOADING = "initMovie/LOADING";


const initialState = {
  page: 0,
  loading: false,
  error: false,
  errorMessage: "",
  movies: [],
};

const initMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
    case ERROR:
    case LOADING:
    default:
      return state;
  };
};

export { initMovieReducer };

