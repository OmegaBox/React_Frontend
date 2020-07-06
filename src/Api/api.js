import axios from "axios";
import { transformDateFormat } from "../Utils/ultil";

export const movieApi = {
  getMovies: (id) => axios.get("movies/"),
  getSchedules: ({ date, title, theaterId }) => {
    console.log(date, title, theaterId);

    if (date) date = transformDateFormat(date).dateStringNoDash;

    if (date && !title && theaterId) {
      console.log("진입성공");

      return axios.get(`theaters/${theaterId}/schedules/${date}`);
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
  getSeats: async (scheduleId) => {
    const res = await axios.get(`theaters/schedules/${scheduleId}/seats/`);
    return {
      status: res.status,
      statusText: res.statusText,
      data: res.data,
    };
  },
};
