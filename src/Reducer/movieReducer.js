import { movieApi } from "../Api/api"

const MOVIE_SUCCESS = "movie/SUCCESS";
const MOVIE_ERROR = "movie/ERROR";
const MOVIE_LOADING = "movie/LOADING";

const MOVIE_DETAIL_SUCCESS = "movies/SUCCESS";
const MOVIE_DETAIL_ERROR = "movies/ERROR";
const MOVIE_DETAIL_LOADING = "movies/LOADING";

const setSuccessMovie = (data) => ({ type: MOVIE_SUCCESS, data });
const setLoadingMovie = () => ({ type: MOVIE_LOADING });
const setErrorMovie = (error) => ({ type: MOVIE_ERROR, error });

const setSuccessMovieDetail = (data) => ({ type: MOVIE_DETAIL_SUCCESS, data });
const setLoadingMovieDetail = () => ({ type: MOVIE_DETAIL_LOADING });
const setErrorMovieDetail = (error) => ({ type: MOVIE_DETAIL_ERROR, error });

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
const getMovie = () => async (dispatch) => {
  try {
    dispatch(setLoadingMovieDetail());
    const res = await movieApi.getMovie();
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
    dispatch({
      type: "ERROR",
      error: {
        state: true,
        message: error.message,
      },
    });
  }
};


const initialState = {
  page: 0,
  loading: false,
  error: false,
  errorMessage: "",
  movies: [
    // {
    //   id: 1,
    //   name_kor: "#살아있다",
    //   reservation_rate: 57.9,
    //   running_time: "97",
    //   rank: 1,
    //   grade: "15+",
    //   acc_audience: 1342958,
    //   acc_favorite: 0,
    //   open_date: "2020-06-24",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20193069.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20193069.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 2,
    //   name_kor: "결백",
    //   reservation_rate: 10.5,
    //   running_time: "110",
    //   rank: 2,
    //   grade: "15+",
    //   acc_audience: 770103,
    //   acc_favorite: 0,
    //   open_date: "2020-06-10",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20183813.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20183813.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 3,
    //   name_kor: "소리꾼",
    //   reservation_rate: 7.8,
    //   running_time: "118",
    //   rank: 3,
    //   grade: "12+",
    //   acc_audience: 26982,
    //   acc_favorite: 0,
    //   open_date: "2020-07-01",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20196201.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20196201.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 4,
    //   name_kor: "다크 나이트",
    //   reservation_rate: 6.1,
    //   running_time: "152",
    //   rank: 4,
    //   grade: "15+",
    //   acc_audience: 4194189,
    //   acc_favorite: 0,
    //   open_date: "2008-08-06",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20081056.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20081056.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 5,
    //   name_kor: "온워드: 단 하루의 기적",
    //   reservation_rate: 5.7,
    //   running_time: "102",
    //   rank: 5,
    //   grade: "all",
    //   acc_audience: 312568,
    //   acc_favorite: 0,
    //   open_date: "2020-06-17",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20191048.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20191048.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 6,
    //   name_kor: "인베이젼 2020",
    //   reservation_rate: 2.6,
    //   running_time: "130",
    //   rank: 6,
    //   grade: "12+",
    //   acc_audience: 9742,
    //   acc_favorite: 0,
    //   open_date: "2020-07-01",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20208617.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20208617.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 7,
    //   name_kor: "아무튼, 아담",
    //   reservation_rate: 1.0,
    //   running_time: "100",
    //   rank: 7,
    //   grade: "15+",
    //   acc_audience: 2954,
    //   acc_favorite: 0,
    //   open_date: "2020-07-02",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20200361.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20200361.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 8,
    //   name_kor: "위대한 쇼맨",
    //   reservation_rate: 0.8,
    //   running_time: "104",
    //   rank: 8,
    //   grade: "12+",
    //   acc_audience: 1688503,
    //   acc_favorite: 0,
    //   open_date: "2017-12-20",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20179462.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20179462.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 9,
    //   name_kor: "트로이 디렉터스 컷",
    //   reservation_rate: 0.8,
    //   running_time: "196",
    //   rank: 9,
    //   grade: "18+",
    //   acc_audience: 757,
    //   acc_favorite: 0,
    //   open_date: "2020-07-03",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20200836.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20200836.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
    // {
    //   id: 10,
    //   name_kor: "야구소녀",
    //   reservation_rate: 0.6,
    //   running_time: "104",
    //   rank: 10,
    //   grade: "12+",
    //   acc_audience: 31770,
    //   acc_favorite: 0,
    //   open_date: "2020-06-18",
    //   close_date: "2020-08-31",
    //   description: "",
    //   poster:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20196702.jpg",
    //   trailer:
    //     "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20196702.mp4",
    //   comments: [],
    //   liked: 0,
    //   average_point: 0,
    // },
  ],
  movieDetail: [
    {
      "id": 1,
      "rank": 1,
      "name_kor": "#살아있다",
      "name_eng": "#ALIVE",
      "poster": "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/posters/20193069.jpg",
      "trailer": "https://caloculator-s3.s3.ap-northeast-2.amazonaws.com/media/trailers/20193069.mp4",
      "description": "",
      "average_point": 7.5,
      "grade": "15+",
      "reservation_rate": 57.9,
      "open_date": "2020-06-24",
      "close_date": "2020-08-31",
      "acc_audience": 1342958,
      "acc_favorite": 2,
      "running_time": "97",
      "directors": [
        {
          "name": "조일형"
        },
        {
          "name": "권효진"
        }
      ],
      "actors": [
        {
          "name": "유아인"
        },
        {
          "name": "박신혜"
        }
      ],
      "genres": [
        {
          "name": "드라마"
        }
      ],
      "ratings": [
        {
          "id": 1,
          "member": "권효진",
          "good_point": "story",
          "point": 10,
          "comment": "대박~!",
          "liked": true
        },
        {
          "id": 2,
          "member": "전지현",
          "good_point": "ost",
          "point": 5,
          "comment": "노래때문에 평타",
          "liked": false
        }
      ]
    }
  ]
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
        movies: action.data,
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
    default:
      return state;
  }
};

export {
  getMovies,
  getMovie,
  movieReducer,
  setSuccessMovie,
  setLoadingMovie,
  setSuccessMovieDetail,
  setLoadingMovieDetail,
  setErrorMovie,
  setErrorMovieDetail,
};
