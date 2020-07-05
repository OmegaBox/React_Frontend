import axios from "axios";
import { transformDateFormat } from "../Utils/ultil";

export const movieApi = {
  getMovies: (id) => axios.get("movies/"),
  getSchedules: ({ date, title, theater }) => {
    console.log(date, title, theater);

    if (date) date = transformDateFormat(date).dateStringNoDash;

    if (date && !title && theater) {
      console.log("진입성공");

      return axios.get(`theaters/schedules/${date}/${theater}/`);
    }

    return undefined;
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
