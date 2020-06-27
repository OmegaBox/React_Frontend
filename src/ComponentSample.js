import React from "react";
import "./common.scss";

function ComponentSample() {
  return (
    <div>
      <p>
        버튼 컴포넌트 사용 방법!
        <br />
        기본 클래스는 btn이 반드시 포함되어 있어야 함.
        <br />
        형태에 따라 fill, outLine 사용 크기에 따라 따로 작성하지 않으면 기본
        <br />
        사이즈(높이 40px), xLarge(50px), large(46px), small(36px), xSmall(32px)
        <br />
        컬러에 따라서 main, subDark, sub, subLight, darkGray, lightGray, while로
        구분됨
        <br />
        클래스명 조합에 따라 형태가 다양한 버튼이 됨
      </p>
      <button className={["btn", "fill", "main", "xLarge"].join(" ")}>
        확인
      </button>
      <button className={["btn", "fill", "subDark", "large"].join(" ")}>
        확인
      </button>
      <button className={["btn", "fill", "sub"].join(" ")}>확인</button>
      <button className={["btn", "fill", "subLight", "small"].join(" ")}>
        확인
      </button>
      <button className={["btn", "fill", "darkGray", "xSmall"].join(" ")}>
        확인
      </button>
      <button className={["btn", "fill", "lightGray"].join(" ")}>확인</button>
      <button className={["btn", "fill", "white"].join(" ")}>확인</button>
      <button className={["btn", "outLine", "main"].join(" ")}>확인</button>
      <button className={["btn", "outLine", "white"].join(" ")}>확인</button>
      <button className={["btn", "outLine", "lightGray"].join(" ")}>
        확인
      </button>
    </div>
  );
}

export default ComponentSample;
