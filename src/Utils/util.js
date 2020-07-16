import React from "react";
import cookie from "react-cookies";

const getToday = () => new Date().toISOString().slice(0, 10);
const getCurrentHour = () => new Date().getHours();

// start와 end 까지의 모든 날짜를 다양한 형태의 문자열 형식을 가진 객체로 만들어준다
const getDateRangeData = (start, end) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dateObject = new Date(start);
  const resultDates = [];
  const startDate = new Date(start);
  const endDate = new Date(end);

  while (startDate.getTime() <= endDate.getTime()) {
    let month = startDate.getMonth() + 1;
    month = month < 10 ? "0" + month : month;

    let day = startDate.getDate();
    const stringDay = day < 10 ? "0" + day : day;

    resultDates.push({
      dateObject: dateObject,
      dateString: startDate.getFullYear() + "-" + month + "-" + stringDay,
      dateStringNoDash: (
        dateObject.getFullYear() +
        month +
        stringDay +
        ""
      ).slice(2),
      dateYearMonth: startDate.getFullYear() + "." + month,
      month: month,
      day: day,
      dayOfWeek: week[new Date(startDate).getDay()],
    });

    startDate.setDate(startDate.getDate() + 1);
  }

  return resultDates;
};

// 특정 날짜만 다양한 형태의 문자열을 가진 객체로 바꾼다
const transformDateFormat = (date) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dateObject = new Date(date);

  let month = dateObject.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

  let day = dateObject.getDate();
  const stringDay = day < 10 ? "0" + day : day;

  return {
    dateObject: dateObject,
    dateString: dateObject.getFullYear() + "-" + month + "-" + stringDay,
    dateStringNoDash: (dateObject.getFullYear() + month + stringDay + "").slice(
      2
    ),
    dateYearMonth: dateObject.getFullYear() + "." + month,
    month: month,
    day: day,
    dayOfWeek: week[new Date(dateObject).getDay()],
  };
};

// 문자열 숫자에 천단위 콤마 찍기
const numWithComma = (numStr) => {
  numStr = numStr + "";
  if (numStr.length <= 3) return numStr;
  const arr = [...numStr];
  let counter = 1;
  while (true) {
    if (3 * counter >= numStr.length) break;
    arr.splice(-3 * counter - counter + 1, 0, ",");
    counter += 1;
  }
  return arr.join("");
};

// 회원 가입 정규표현식
const regExp = {
  name: /^[a-zA-Z가-힣]{2,}$/,
  id: /^[0-9a-zA-Z_]{6,}$/,
  pw: /((?=.*[0-9a-zA-Z])(?=.*[!@#$%^&*]).{8,})/,
  tell: /^(010|0)([0-9]{8})$/,
  email: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@([0-9a-zA-Z]+)([-_\.]?[a-zA-Z]{2})*\.[a-zA-Z]{2,3}$/,
};

export {
  getToday,
  getCurrentHour,
  getDateRangeData,
  transformDateFormat,
  numWithComma,
  regExp,
};

export const removeCookies = () => {
  if (cookie.load("accessToken")) {
    cookie.remove("accessToken", {
      path: "/",
    });
  }
  if (cookie.load("refreshToken")) {
    cookie.remove("refreshToken", {
      path: "/",
    });
  }
  if (cookie.load("id")) {
    cookie.remove("id", {
      path: "/",
    });
  }
};
export const timeDateSplit = (dateTime) => {
  let temp = "";
  temp = dateTime.split(" ");
  return `${temp[0]} (${temp[1]})`;
};
export const makeRefs = (schedules) => {
  const scheduleRef = {};

  schedules.map((schedule) => {
    const hour = schedule.start_time.slice(0, 2);
    const ref = React.createRef();
    console.log("makeref에서 만든건데 객체에 넣기전 단일 ref", ref);

    if (!scheduleRef[hour]) {
      console.log("없어서 넣음");
      scheduleRef[hour] = ref;
    }
    console.log(
      "makeRefs에서 만든 ref들",
      scheduleRef,
      scheduleRef[hour].target
    );
  });

  return scheduleRef;
};

export const sliceTime = (date) => {
  let temp = "";
  temp = date.split(" ");
  return temp[1];
};
export const sliceDate = (date) => {
  let temp = "";
  temp = date.split(" ");
  return temp[0];
};
export const createDay = (date) => {
  let temp = new Date(sliceDate(date).split("-").join("/")).getDay();
  switch (temp) {
    case 0:
      return "(일)";
    case 1:
      return "(월)";
    case 2:
      return "(화)";
    case 3:
      return "(수)";
    case 4:
      return "(목)";
    case 5:
      return "(금)";
    case 6:
      return "(토)";
    default:
      return;
  }
};

export const changeKeyPoint = (keyPoint) => {
  switch (keyPoint) {
    case "prod":
      return "연출력";
    case "story":
      return "스토리";
    case "actor":
      return "배우";
    case "ost":
      return "OST";
    case "visual":
      return "영상미";
    default:
      return;
  }
};
