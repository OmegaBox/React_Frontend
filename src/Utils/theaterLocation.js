export const getLocation = () => {
  if (navigator.geolocation) {
    // GPS를 지원하면
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          // console.error(error);
          resolve({
            lat: 37.498227,
            lng: 127.026375,
          });
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    }).then((coords) => {
      return coords;
    });
  }
  // console.info("GPS를 지원하지 않습니다");
  return {
    lat: 37.498227, // 기본 주소는 강남 메가박스
    lng: 127.026375,
  };
};

export const getDistanceFromLatLonInKm = (location1, location2) => {
  const lat1 = location1.lat;
  const lng1 = location1.lng;
  const lat2 = location2.lat;
  const lng2 = location1.lng;

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };
  const r = 6371; //지구의 반지름(km)
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = r * c; // Distance in km
  return Math.round(d * 1000);
};

export const findNearbyTheaters = async () => {
  const curLoc = await getLocation();

  const theaterDistances = [];
  for (let i = 0; i < theaterLocation.length; i++) {
    const theaters = theaterLocation[i].theaters;
    for (let j = 0; j < theaters.length; j++) {
      const name = theaterLocation[i].theaters[j].name;
      const theaterLoc = theaterLocation[i].theaters[j].location;
      const distance = getDistanceFromLatLonInKm(curLoc, theaterLoc);

      theaterDistances.push({ name, location: theaterLoc, distance });
    }
  }

  const closest3 = theaterDistances
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  return closest3;
};

export const theaterLocation = [
  {
    region: "서울",
    theaters: [
      {
        name: "강남",
        location: {
          lat: 37.498023,
          lng: 127.026437,
        },
      },
      {
        name: "강남대로(씨티)",
        location: {
          lat: 37.500352,
          lng: 127.027021,
        },
      },
      {
        name: "강동",
        location: {
          lat: 37.528462,
          lng: 127.125534,
        },
      },
      {
        name: "군자",
        location: {
          lat: 37.555717,
          lng: 127.078354,
        },
      },
      {
        name: "동대문",
        location: {
          lat: 37.566869,
          lng: 127.007578,
        },
      },
      {
        name: "마곡",
        location: {
          lat: 37.559669,
          lng: 126.835102,
        },
      },
      {
        name: "목동",
        location: {
          lat: 37.529038,
          lng: 126.875953,
        },
      },
      {
        name: "상봉",
        location: {
          lat: 37.593171,
          lng: 127.074681,
        },
      },
      {
        name: "상암월드컵경기장",
        location: {
          lat: 37.569147,
          lng: 126.898015,
        },
      },
      {
        name: "성수",
        location: {
          lat: 37.541758,
          lng: 127.044953,
        },
      },
      {
        name: "센트럴",
        location: {
          lat: 37.504628,
          lng: 127.004247,
        },
      },
      {
        name: "송파파크하비오",
        location: {
          lat: 37.481189,
          lng: 127.123778,
        },
      },
      {
        name: "신촌",
        location: {
          lat: 37.559733,
          lng: 126.942222,
        },
      },
      {
        name: "은평",
        location: {
          lat: 37.61778,
          lng: 126.922776,
        },
      },
      {
        name: "이수",
        location: {
          lat: 37.484678,
          lng: 126.981655,
        },
      },
      {
        name: "창동",
        location: {
          lat: 37.654576,
          lng: 127.038753,
        },
      },
      {
        name: "코엑스",
        location: {
          lat: 37.512445,
          lng: 127.05879,
        },
      },
      {
        name: "홍대",
        location: {
          lat: 37.555974,
          lng: 126.922073,
        },
      },
      {
        name: "화곡",
        location: {
          lat: 37.540569,
          lng: 126.83766,
        },
      },
      {
        name: "ARTNINE",
        location: {
          lat: 37.484694,
          lng: 126.981763,
        },
      },
    ],
  },
  {
    region: "경기",
    theaters: [
      {
        name: "고양스타필드",
        location: {
          lat: 37.647061,
          lng: 126.89387,
        },
      },
      {
        name: "김포한강신도시",
        location: {
          lat: 37.644915,
          lng: 126.624259,
        },
      },
      {
        name: "남양주",
        location: {
          lat: 37.655054,
          lng: 127.244091,
        },
      },
      {
        name: "동탄",
        location: {
          lat: 37.204483,
          lng: 127.072774,
        },
      },
      {
        name: "미사강변",
        location: {
          lat: 37.566377,
          lng: 127.190234,
        },
      },
      {
        name: "백석",
        location: {
          lat: 37.643316,
          lng: 126.789262,
        },
      },
      {
        name: "별내",
        location: {
          lat: 37.655772,
          lng: 127.126651,
        },
      },
      {
        name: "부천스타필드시티",
        location: {
          lat: 37.461653,
          lng: 126.814182,
        },
      },
      {
        name: "분당",
        location: {
          lat: 37.385491,
          lng: 127.122325,
        },
      },
      {
        name: "수원",
        location: {
          lat: 37.250659,
          lng: 127.019807,
        },
      },
      {
        name: "수원남문",
        location: {
          lat: 37.276164,
          lng: 127.015992,
        },
      },
      {
        name: "시흥배곧",
        location: {
          lat: 37.371017,
          lng: 126.728545,
        },
      },
      {
        name: "안산중앙",
        location: {
          lat: 37.3179,
          lng: 126.835656,
        },
      },
      {
        name: "양주",
        location: {
          lat: 37.79601,
          lng: 127.080397,
        },
      },
      {
        name: "영통",
        location: {
          lat: 37.252559,
          lng: 127.071467,
        },
      },
      {
        name: "용인기흥",
        location: {
          lat: 37.22359,
          lng: 127.114471,
        },
      },
      {
        name: "용인테크노밸리",
        location: {
          lat: 37.29129,
          lng: 127.148005,
        },
      },
      {
        name: "의정부민락",
        location: {
          lat: 37.745873,
          lng: 127.095677,
        },
      },
      {
        name: "일산",
        location: {
          lat: 37.689458,
          lng: 126.757016,
        },
      },
      {
        name: "일산벨라시타",
        location: {
          lat: 37.642292,
          lng: 126.792251,
        },
      },
      {
        name: "킨텍스",
        location: {
          lat: 37.667923,
          lng: 126.751689,
        },
      },
      {
        name: "파주금촌",
        location: {
          lat: 37.764949,
          lng: 126.774589,
        },
      },
      {
        name: "파주운정",
        location: {
          lat: 37.705874,
          lng: 126.758876,
        },
      },
      {
        name: "파주출판도시",
        location: {
          lat: 37.713734,
          lng: 126.687743,
        },
      },
      {
        name: "평택",
        location: {
          lat: 36.994271,
          lng: 127.087920,
        },
      },
      {
        name: "하남스타필드",
        location: {
          lat: 37.545371,
          lng: 127.224884,
        },
      },
    ],
  },
  {
    region: "인천",
    theaters: [
      {
        name: "검단",
        location: {
          lat: 37.588076,
          lng: 126.675405,
        },
      },
      {
        name: "송도",
        location: {
          lat: 37.378697,
          lng: 126.662811,
        },
      },
      {
        name: "영종",
        location: {
          lat: 37.492615,
          lng: 126.498816,
        },
      },
      {
        name: "인천논현",
        location: {
          lat: 37.397178,
          lng: 126.727384,
        },
      },
      {
        name: "청라",
        location: {
          lat: 37.533952,
          lng: 126.650394,
        },
      },
      {
        name: "청라지젤",
        location: {
          lat: 37.533877,
          lng: 126.656096,
        },
      },
    ],
  },
  {
    region: "대전/충청/세종",
    theaters: [
      {
        name: "공주",
        location: {
          lat: 36.473475,
          lng: 127.138764,
        },
      },
      {
        name: "대전",
        location: {
          lat: 36.347246,
          lng: 127.387992,
        },
      },
      {
        name: "대전유성",
        location: {
          lat: 36.352150,
          lng: 127.344577,
        },
      },
      {
        name: "대전중앙로",
        location: {
          lat: 36.327702,
          lng: 127.424124,
        },
      },
      {
        name: "대전현대아울렛",
        location: {
          lat: 36.423539,
          lng: 127.397241,
        },
      },
      {
        name: "세종(조치원)",
        location: {
          lat: 36.602932,
          lng: 127.298137,
        },
      },
      {
        name: "세종나성",
        location: {
          lat: 36.483360,
          lng: 127.263683,
        },
      },
      {
        name: "세종청사",
        location: {
          lat: 36.502848,
          lng: 127.258078,
        },
      },
      {
        name: "오창",
        location: {
          lat: 36.712216,
          lng: 127.428541,
        },
      },
      {
        name: "제천",
        location: {
          lat: 37.135262,
          lng: 128.212336,
        },
      },
      {
        name: "진천",
        location: {
          lat: 36.859710,
          lng: 127.438050,
        },
      },
      {
        name: "천안",
        location: {
          lat: 36.832352,
          lng: 127.147964,
        },
      },
      {
        name: "청주사창",
        location: {
          lat: 36.632574,
          lng: 127.460432,
        },
      },
      {
        name: "충주",
        location: {
          lat: 36.971268,
          lng: 127.932819,
        },
      },
      {
        name: "홍성내포",
        location: {
          lat: 36.659305,
          lng: 126.678950,
        },
      },
    ],
  },
  {
    region: "부산/대구/경상",
    theaters: [
      {
        name: "거창",
        location: {
          lat: 35.687443,
          lng: 127.913148,
        },
      },
      {
        name: "경북도청",
        location: {
          lat: 36.575241,
          lng: 128.493061,
        },
      },
      {
        name: "경산하양",
        location: {
          lat: 35.913580,
          lng: 128.823409,
        },
      },
      {
        name: "경주",
        location: {
          lat: 35.841669,
          lng: 129.212779,
        },
      },
      {
        name: "구미강동",
        location: {
          lat: 36.107130,
          lng: 128.417993,
        },
      },
      {
        name: "김천",
        location: {
          lat: 36.125331,
          lng: 128.110781,
        },
      },
      {
        name: "남포항",
        location: {
          lat: 35.974635,
          lng: 129.403403,
        },
      },
      {
        name: "대구(칠성로)",
        location: {
          lat: 35.885199,
          lng: 128.589812,
        },
      },
      {
        name: "대구신세계(동대구)",
        location: {
          lat: 35.877925,
          lng: 128.628626,
        },
      },
      {
        name: "대구이시아",
        location: {
          lat: 35.920734,
          lng: 128.635711,
        },
      },
      {
        name: "덕천",
        location: {
          lat: 35.211132,
          lng: 129.007554,
        },
      },
      {
        name: "마산",
        location: {
          lat: 35.181838,
          lng: 128.563839,
        },
      },
      {
        name: "문경",
        location: {
          lat: 36.587518,
          lng: 128.190382,
        },
      },
      {
        name: "부산극장",
        location: {
          lat: 35.098628,
          lng: 129.028797,
        },
      },
      {
        name: "부산대",
        location: {
          lat: 35.230105,
          lng: 129.088028,
        },
      },
      {
        name: "북대구(칠곡)",
        location: {
          lat: 35.944071,
          lng: 128.561721,
        },
      },
      {
        name: "사천",
        location: {
          lat: 35.081008,
          lng: 128.082131,
        },
      },
      {
        name: "삼천포",
        location: {
          lat: 34.949553,
          lng: 128.037959,
        },
      },
      {
        name: "양산",
        location: {
          lat: 35.338274,
          lng: 129.026915,
        },
      },
      {
        name: "양산라피에스타",
        location: {
          lat: 35.309591,
          lng: 129.009083,
        },
      },
      {
        name: "울산",
        location: {
          lat: 35.554377,
          lng: 129.321025,
        },
      },
      {
        name: "정관",
        location: {
          lat: 35.319456,
          lng: 129.178068,
        },
      },
      {
        name: "창원",
        location: {
          lat: 35.221389,
          lng: 128.675720,
        },
      },
      {
        name: "창원내서",
        location: {
          lat: 35.248928,
          lng: 128.510666,
        },
      },
      {
        name: "해운대(장산)",
        location: {
          lat: 35.170546,
          lng: 129.177104,
        },
      },
    ],
  },
  {
    region: "광주/전라",
    theaters: [
      {
        name: "광주상무",
        location: {
          lat: 35.154289,
          lng: 126.854433,
        },
      },
      {
        name: "광주하남",
        location: {
          lat: 35.162855,
          lng: 126.811970,
        },
      },
      {
        name: "남원",
        location: {
          lat: 35.405452,
          lng: 127.383328,
        },
      },
      {
        name: "목포하당(포르모)",
        location: {
          lat: 34.807047,
          lng: 126.425982,
        },
      },
      {
        name: "송천",
        location: {
          lat: 35.869304,
          lng: 127.113901,
        },
      },
      {
        name: "순천",
        location: {
          lat: 34.941307,
          lng: 127.510908,
        },
      },
      {
        name: "여수웅천",
        location: {
          lat: 34.749387,
          lng: 127.679002,
        },
      },
      {
        name: "전대(광주)",
        location: {
          lat: 35.172638,
          lng: 126.912488,
        },
      },
      {
        name: "첨단",
        location: {
          lat: 126.912488,
          lng: 126.852519,
        },
      },
    ],
  },
  {
    region: "강원",
    theaters: [
      {
        name: "남춘천",
        location: {
          lat: 37.866448,
          lng: 127.720287,
        },
      },
      {
        name: "속초",
        location: {
          lat: 38.189071,
          lng: 128.585782,
        },
      },
      {
        name: "원주",
        location: {
          lat: 37.344986,
          lng: 127.929803,
        },
      },
      {
        name: "원주센트럴",
        location: {
          lat: 37.326341,
          lng: 127.984687,
        },
      },
    ],
  },
  {
    region: "제주",
    theaters: [
      {
        name: "제주",
        location: {
          lat: 33.511552,
          lng: 126.522674,
        },
      },
    ],
  },
];
