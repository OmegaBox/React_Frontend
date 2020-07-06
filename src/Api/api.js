import axios from "axios";

export const movieApi = {
  getMovies: async (id) => {
    const res = await axios.get("movies/");
    return {
      status: res.status,
      statusText: res.statusText,
      data: res.data,
    };
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
