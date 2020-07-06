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
  getScreeningRegions: (date, title) => {
    const call = `theaters/schedules/regions/${date}/${
      title ? "?movie=" + title : ""
    }
    `;
    return axios.get(call);
  },
  getScreeningTheaters: (date, title) => {
    const call = `theaters/schedules/${date}/${title ? "?movie=" + title : ""}
    `;

    return axios.get(call);
  },
};
