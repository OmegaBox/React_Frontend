const getToday = () => new Date().toISOString().slice(0, 10);
const getCurrentHour = () => new Date().getHours();

// start와 end 까지의 모든 날짜를 다양한 형태의 문자열 형식을 가진 객체로 만들어준다
const getDateRangeData = (start, end) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const resultDates = [];
  const startDate = new Date(start);
  const endDate = new Date(end);

  while (startDate.getTime() <= endDate.getTime()) {
    let month = startDate.getMonth() + 1;
    month = month < 10 ? "0" + month : month;

    let day = startDate.getDate();
    const stringDay = day < 10 ? "0" + day : day;

    resultDates.push({
      dateObject: new Date(startDate),
      dateString: startDate.getFullYear() + "-" + month + "-" + stringDay,
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
    dateYearMonth: dateObject.getFullYear() + "." + month,
    month: month,
    day: day,
    dayOfWeek: week[new Date(dateObject).getDay()],
  };
};

export { getToday, getCurrentHour, getDateRangeData, transformDateFormat };
