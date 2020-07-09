import axios from "axios";
import cookie from "react-cookies";
import { transformDateFormat } from "../Utils/ultil";

export const refreshValidation = async () => {
  try {
    const refreshToken = cookie.load("refreshToken");
    const newAccessToken = await axios.post("/members/token/refresh/", {
      refresh: refreshToken,
    });
    cookie.remove("accessToken", {
      path: "/",
    });
    cookie.save("accessToken", newAccessToken.data.access, {
      path: "/",
    });
    return true;
  } catch (e) {
    console.log("refresh 실패, 로그아웃 처리 필요");
    return false;
  }
};

export const isLogin = async () => {
  const accessToken = cookie.load("accessToken");
  console.log("isLogin 체크", accessToken);

  if (accessToken) return true;
  return await refreshValidation();
};

export const movieApi = {
  getMovies: () => axios.get("/a/movies/"),
  getMovie: (id) => axios.get(`/a/movies/detail/${id}`),
  // getSearch: (keyword) => axios.get(`movies/?searchName=${keyword}`),
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
  getReservedSeats: (scheduleId) => {
    return axios.get(`/schedules/${scheduleId}/reserved-seats/`);
  },
  getTotalPrice: (scheduleId, personalCount) => {
    console.log(scheduleId, personalCount);
    // 받은 personalCount가 객체가 아닐때
    if (typeof personalCount !== "object")
      return console.error("전달받은 값이 객체가 아닙니다.");
    // 인원별 모든 값이 0일 때 실행 안함.
    if (Object.values(personalCount).every((val) => val === 0))
      return {
        data: { total_price: 0 },
      };
    const urlString =
      `/theaters/schedules/${scheduleId}/price/?` +
      Object.keys(personalCount)
        .filter((key) => personalCount[key] !== 0)
        .map((key) => `${key}s=${personalCount[key]}`)
        .join("&");
    return axios.get(urlString);
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
    return axios.post("/members/login/", {
      username: id,
      password: pw,
    });
  },
  logout: () => {
    cookie.remove("accessToken", {
      path: "/",
    });
    cookie.remove("refreshToken", {
      path: "/",
    });
    return axios.post("/members/logout/");
  },
};
