const getDateRangeData = (start, end) => {
  //param1은 시작일, param2는 종료일이다.
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

export { getDateRangeData, transformDateFormat };
