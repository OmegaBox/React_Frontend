# OMEGABOX 프로젝트

2020년 6월 22일부터 7월 17일까지 진행한 MEGABOX Clone 프로젝트(업데이트 기간 제외)입니다.<br>
www.omegabox.ga 에서 프로젝트를 확인할 수 있습니다.<br>

<br>

## Requirements

- 사용 언어<br>
  HTML5, CSS3, JS6+<br>

- 프레임워크<br>
  React v.16<br>

- 라이브러리
  <details> 
    <summary>접기/펼치기 버튼</summary>
    <div markdown="1">
      redux v.4.0.5<br>
      react-redux v.7.2.0<br>
      redux-saga v.1.1.3<br>
      redux-thunk v.2.3.0<br>
      react-router-dom v.5.2.0<br>
      axios v.0.19.2<br>
      node-sass v.4.14.1<br>
      bootpay-js v.3.2.6<br>
      http-proxy-middleware v.1.0.4<br>
      react-chartjs-2 v.2.9.0<br>
      react-cookies v.0.1.1<br>
      react-flatpickr v.3.10.1<br>
      react-google-login v.5.1.21<br>
      react-loading-skeleton v.2.1.1<br>
      react-naver-maps v.0.0.13<br>
      react-player v.2.5.0<br>
      react-slick v.0.26.1<br>
    </div>
  </details>

<br>

## Getting Started

<b>로그인과 결제기능에 사용되는 key 파일은 업로드 되지 않았습니다.
<br> 실행을 위해서는 ysungkyun@gmail.com으로 해당 파일을 요청하셔야 합니다.</b><br>

$ git clone "https://github.com/OmegaBox/React_Frontend.git"<br>
$ yarn install<br>
\$ yarn start<br>

<br>

## Contributors

**TEAM : OMEGA**

_Front_

- 유성균 _-PM-_

- 김규리

- 정호영

- 송치원

_Back_

- 신동현

- 권효진

<br>

## Development motivation

MEGABOX 홈페이지 제작을 통해 기존의 홈페이지 기능을 구현, 개선하고<br>

프론트와 백엔드 개발자의 협업을 통해 기획 및 커뮤니케이션 능력을 기르고자<br>

이번 프로젝트를 시작하였습니다.<br>

<br>

## Main Feature

- FrontEnd : 달력, 좌석 선택 알고리즘, 차트, 영상 재생

- BackEnd : 데이터간 복잡한 관계 연결, 상속, 커스터 마이징을 고려한 DB 설계

<br>

## Bugfix & Refactoring history

2020-07-31 :

- 메인페이지에서 신규 오픈 극장 선택시 극장 위치 정보 페이지 이동 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))
- 마이페이지 로그인 체크를 한번만 하도록 고침 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))
- 마이페이지 새로고침시 내역이 보이지 않는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))
- 좌석 선택 페이지에서 select의 문자열이 크롬 외의 브라우저에서 중앙정렬 되지 않는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/300))

2020-07-30 :

- 팝업 모듈 리팩토링 (송치원 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/297))

2020-07-29 :

- 영화예매 페이지, 마이페이지에서 일정 시간 이후 로그인 체크가 안되는 버그 수정 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/295))

2020-07-28 :

- 영화 리스트 이미지에 Lazy Loading 기능 추가 (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/292))

2020-07-25 ~ 2020-07-27:

- 영화 정보(지도) 표시 페이지 제작 (유성균 [개발코드](https://github.com/OmegaBox/React_Frontend/pull/291))

2020-07-24 :

- 마이무비스토리에 리스트가 없을 경우 깨지는 버그 수정 (김규리 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/287))

2020-07-23 :

- HTML 코드 리팩토링 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/286))
- 이벤트 페이지 접속시 스크롤 가장 위로 올림 (유성균 [수정코드](https://github.com/OmegaBox/React_Frontend/pull/286))

2020-07-22 :

- 링크가 걸려 있지 않은 버튼들에 링크 추가 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/285))
- 영화 상세페이지 코멘트 부분의 모든 영화 제목이 #살아있다로 표기되는 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/285))
- 영화 상세페이지에서 작동하지 않는 무비포스트 탭 삭제 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/285))

- 폰트 임포트 방식 수정 (김규리 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/284))

2020-07-21 :

- 좋아요 버튼이 깨지는 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/283))

2020-07-20 :

- 무한 GPS요청 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/279))
- 메인페이지가 모바일에서 깨지는 버그 수정 (유성균 [수정 코드](https://github.com/OmegaBox/React_Frontend/pull/280))
