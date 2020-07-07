import axios from "axios";
import { transformDateFormat } from "../Utils/ultil";

export const movieApi = {
  getMovies: (id) => axios.get("movies/"),
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
        `theaters/${theaterId}/schedules/${date}/?movie=${movieIds}`
      );
    }
  },
  getScreeningRegions: (date, movies) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }
    const call = `theaters/schedules/regions/${date}/${
      movies ? "?movie=" + movieIds : ""
    }
    `;

    console.log(call);

    return axios.get(call);
  },
  getScreeningTheaters: (date, movies) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }

    const call = `theaters/schedules/${date}/${
      movies ? "?movie=" + movieIds : ""
    }
    `;

    return axios.get(call);
  },
  getSeats: (scheduleId) => {
    return axios.get(`/schedules/${scheduleId}/seats/`);
  },
};

export const signupApi = {
  checkDouble: () => {},
  signup: ({ name, id, pw, pwCheck, birth, tell, email }) => {
    const JSONDATA = JSON.stringify({
      username: id,
      email: email,
      password1: pw,
      password2: pwCheck,
      name: name,
      mobile: tell,
      birth_date: birth,
    });
    console.log(JSONDATA);
    return axios.post("/members/signup/", JSONDATA);
  },
};
