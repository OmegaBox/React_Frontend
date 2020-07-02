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
};
