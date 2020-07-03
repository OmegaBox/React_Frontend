import axios from "axios";

export const movieApi = {
  getMovies: async (id) => axios.get("movies/")
};
