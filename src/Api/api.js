import axios from "axios";
import cookie from "react-cookies";
import { transformDateFormat } from "../Utils/ultil";

const checkValidation = async () => {
  const accessToken = cookie.load("accessToken");
  const refreshToken = cookie.load("refreshToken");

  try {
    const checkAccessToken = await axios.post("/members/token/verify/", {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0MTgzMTkyLCJqdGkiOiIwNzQ4N2I3YmZlZTc0YjBkYjcwMzNmYTcwYTcwMDdkYyIsInVzZXJfaWQiOjIxfQ.-_-htvj1MaJkTwRRBearlLZuBJbgOYxlLvKjOopJo98",
    });
    console.log("유효성 체크", checkAccessToken, accessToken);
  } catch (e) {
    console.log("유효성 체크 에러", e.response, accessToken);
  }
};

export const movieApi = {
  getMovies: () => axios.get("movies/"),
  getMovie: (id) => axios.get(`{movies/${id}`),
  getSchedules: ({ date, movies, theaterId }) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }

    if (date) date = transformDateFormat(date).dateStringNoDash;

    if (date && theaterId && !movies) {
      return axios.get(`theaters/${theaterId}/schedules/${date}`);
    } else {
      return axios.get(
        `theaters/${theaterId}/schedules/${date}/?movies=${movieIds}`
      );
    }
  },
  getScreeningRegions: (date, movies) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }
    const call = `theaters/schedules/regions/${date}/${
      movies ? "?movies=" + movieIds : ""
      }
    `;
    return axios.get(call);
  },
  getScreeningTheaters: (date, movies) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }

    const call = `theaters/schedules/${date}/${
      movies ? "?movies=" + movieIds : ""
      }
    `;

    return axios.get(call);
  },
  getSeats: (scheduleId) => {
    return axios.get(`/schedules/${scheduleId}/seats/`);
  },
};

export const userApi = {
  signup: ({ name, id, pw, pwCheck, birth, tell, email }) => {
    return axios.post("/members/signup/", {
      username: id,
      email: email,
      password1: pw,
      password2: pwCheck,
      name: name,
      mobile: tell,
      birth_date: birth,
    });
  },
  login: ({ id, pw }) => {
    checkValidation();
    return axios.post("/members/login/", {
      username: id,
      password: pw,
    });
  },
};
