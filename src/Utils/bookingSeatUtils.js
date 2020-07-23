// 홀 정보 배열
const screeningHallSeatInfo = [
  {
    hallId: 0,
    maxSeat: 15,
    row: 10,
    path: [4, 12],
    enter: [],
    exit: [],
    except: () => false,
    handicapped: ["A1", "A2", "A3"],
  },
  {
    hallId: 1,
    maxSeat: 22,
    row: 14,
    path: [6, 16],
    enter: [],
    exit: [],
    except: (row, seatNum) => {
      const rowNum = row.charCodeAt() - 64;
      switch (true) {
        case seatNum === 1:
          return rowNum === 1 || rowNum >= 9;
        case seatNum > 1 && seatNum < 7:
          return rowNum >= 9;
        case seatNum === 7 || seatNum === 8:
          return rowNum <= 9;
        case seatNum === 9 || seatNum === 10:
          return rowNum === 9;
        case seatNum > 10 && seatNum < 15:
          return rowNum === 9 || rowNum === 14;
        case seatNum === 15 || seatNum === 16:
          return rowNum === 9;
        case seatNum === 21:
          return rowNum === 14;
        case seatNum === 22:
          return rowNum === 1 || rowNum >= 8;
        default:
          return false;
      }
    },
    handicapped: ["A2", "A3", "A20", "A21", "A4", "N7"],
  },
  {
    hallId: 2,
    maxSeat: 12,
    row: 8,
    path: [4, 8],
    enter: [],
    exit: [],
    except: (row, seatNum) => {
      const rowNum = row.charCodeAt() - 64;
      switch (true) {
        case seatNum < 4:
          return rowNum > 4 + seatNum;
        case seatNum === 5 || seatNum === 8:
          return rowNum === 8;
        case seatNum > 9:
          return rowNum > 17 - seatNum;
        default:
          return false;
      }
    },
    handicapped: ["A11", "A12", "H6", "H7"],
  },
];
const setSeatInfo = (seatType) => screeningHallSeatInfo[seatType];

// 띄어앉기 석 로직
const socialDistance = (row, seatNum) => {
  const rowNum = row.charCodeAt() - 64;
  return rowNum % 3 === seatNum % 3;
};

const makeRowNameArray = (rowNum) => {
  const rowNames = [];
  for (let i = 0; i < rowNum; i += 1) {
    rowNames.push(String.fromCharCode(65 + i));
  }
  return rowNames;
};

const makeSeatNumArray = (maxSeat) => {
  const seatNums = [];
  for (let i = 0; i < maxSeat; i += 1) {
    seatNums.push(i + 1);
  }
  return seatNums;
};

export { setSeatInfo, socialDistance, makeRowNameArray, makeSeatNumArray };
