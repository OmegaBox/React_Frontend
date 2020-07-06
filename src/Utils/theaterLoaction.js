export const getLocation = () => {
  if (navigator.geolocation) {
    // GPS를 지원하면
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.info(
          //   `re:${position.coords.latitude} ${position.coords.longitude}`
          // );
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
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
      // console.log(`coords:${JSON.stringify(coords)}`);
      return coords;
    });
  }
  console.info("GPS를 지원하지 않습니다");
  return {
    lat: 37.498227,
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
  for (let i = 0; i < theaterLoaction.length; i++) {
    const theaters = theaterLoaction[i].theaters;
    for (let j = 0; j < theaters.length; j++) {
      const name = theaterLoaction[i].theaters[j].name;
      const theaterLoc = theaterLoaction[i].theaters[j].location;
      const distance = getDistanceFromLatLonInKm(curLoc, theaterLoc);

      theaterDistances.push({ name, location: theaterLoc, distance });
    }
  }

  const closest3 = theaterDistances
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  return closest3;
};

export const theaterLoaction = [
  {
    region: "서울",
    theaters: [
      {
        name: "강남",
        location: {
          lat: 37.498227,
          lng: 127.026375,
        },
      },
      {
        name: "강남대로(씨티)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "강동",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "군자",
        location: {
          lat: 37.555783,
          lng: 127.078387,
        },
      },
      {
        name: "동대문",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "마곡",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "목동",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "상봉",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "상암월드컵경기장",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "성수",
        location: {
          lat: 37.54192,
          lng: 127.044878,
        },
      },
      {
        name: "센트럴",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "송파파크하비오",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "신촌",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "은평",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "이수",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "창동",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "코엑스",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "홍대",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "화곡",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "ARTNINE",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
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
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "김포한강신도시",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "남양주",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "동탄",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "미사강변",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "백석",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "별내",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "부천스타필드시티",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "분당",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "수원",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "수원남문",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "시흥배곧",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "안산중앙",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "양주",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "영통",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "용인기흥",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "용인테크노밸리",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "의정부민락",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "일산",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "일산벨라시타",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "킨텍스",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "파주금촌",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "파주운정",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "파주출판도시",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "평택",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "하남스타필드",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
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
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "송도",
        location: {
          lat: 37.37898,
          lng: 126.662837,
        },
      },
      {
        name: "영종",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "인천논현",
        location: {
          lat: 37.39737,
          lng: 126.727379,
        },
      },
      {
        name: "청라",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "청라지젤",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
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
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "대전",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "대전유성",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "대전중앙로",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "대전현대아울렛",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "세종(조치원)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "세종나성",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "세종청사",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "오창",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "제천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "진천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "천안",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "청주사창",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "충주",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "홍성내포",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
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
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "경북도청",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "경산하양",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "경주",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "구미강동",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "김천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "남포항",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "대구(칠성로)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "대구신세계(동대구)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "대구이시아",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "덕천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "마산",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "문경",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "부산극장",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "부산대",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "북대구(칠곡)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "사천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "삼천포",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "양산",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "양산라피에스타",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "울산",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "정관",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "창원",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "창원내서",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "해운대(장산)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
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
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "광주하남",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "남원",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "목포하당(포르모)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "송천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "순천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "여수웅천",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "전대(광주)",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "첨단",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
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
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "속초",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "원주",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
      {
        name: "원주센트럴",
        location: {
          lat: 37.5417438,
          lng: 127.044786,
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
          lat: 37.5417438,
          lng: 127.044786,
        },
      },
    ],
  },
];
