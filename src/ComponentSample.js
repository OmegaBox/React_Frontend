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
      <span style={{ marginLeft: "30px" }}>
        ["btn", "fill", "main", "xLarge"].join(" ")
      </span>
      <br />

      <button className={["btn", "fill", "subDark", "large"].join(" ")}>
        확인
      </button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "fill", "subDark", "large"].join(" ")
      </span>
      <br />

      <button className={["btn", "fill", "subDark", "regular"].join(" ")}>
        확인
      </button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "fill", "subDark", "regular"].join(" ")
      </span>
      <br />

      <button className={["btn", "fill", "subLight", "small"].join(" ")}>
        확인
      </button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "fill", "subLight", "small"].join(" ")
      </span>
      <br />

      <button className={["btn", "fill", "darkGray", "xSmall"].join(" ")}>
        확인
      </button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "fill", "darkGray", "xSmall"].join(" ")
      </span>
      <br />

      <button className={["btn", "fill", "lightGray"].join(" ")}>확인</button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "fill", "lightGray"].join(" ")
      </span>
      <br />

      <button className={["btn", "fill", "white"].join(" ")}>확인</button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "fill", "white"].join(" ")
      </span>
      <br />

      <button className={["btn", "outLine", "main"].join(" ")}>확인</button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "outLine", "main"].join(" ")
      </span>
      <br />

      <button className={["btn", "outLine", "white"].join(" ")}>확인</button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "outLine", "white"].join(" ")
      </span>
      <br />

      <button className={["btn", "outLine", "lightGray"].join(" ")}>
        확인
      </button>
      <span style={{ marginLeft: "30px" }}>
        ["btn", "outLine", "lightGray"].join(" ")
      </span>
      <br />

      <input type="text" className="input" />
      <span style={{ marginLeft: "30px" }}>["input"].join(" ")</span>
      <br />

      <input type="text" className={["input", "large"].join(" ")} />
      <span style={{ marginLeft: "30px" }}>["input", "large"].join(" ")</span>
      <br />

      <select>
        <option>확인</option>
      </select>
      <span style={{ marginLeft: "30px" }}>기본태그인 option 태그</span>
      <br />

      <div className="inputWrap">
        <input type="radio" name="indexColor" id="test1" />
        <label for="test1">
          <span className="inputIcon"></span>확인
        </label>
      </div>
      <div className="inputWrap">
        <input type="radio" name="indexColor" id="test2" />
        <label for="test2">
          <span className="inputIcon"></span>확인
        </label>
      </div>

      <div className="inputWrap">
        <input type="checkbox" name="green" id="test3" />
        <label for="test3">
          <span className="inputIcon"></span>확인
        </label>
      </div>
      <div className="inputWrap">
        <input type="checkbox" name="green" id="test4" />
        <label for="test4">
          <span className="inputIcon"></span>확인
        </label>
      </div>
      <div className="selectWrap">
        <select
          name="country"
          id="countrySelectBox"
          className={["select", "large"].join(" ")}
        >
          <option value=""> - </option>
          <option value="0:30">30분</option>
          <option value="1:00">1시간</option>
          <option value="1:30">1시간 30분</option>
          <option value="2:00">2시간</option>
          <option value="2:30">2시간 30분</option>
          <option value="3:00">3시간</option>
          <option value="3:30">3시간 30분</option>
          <option value="4:00">4시간</option>
          <option value="4:30">4시간 30분</option>
          <option value="5:00">5시간</option>
        </select>
        <span className={["icon", "arrowBottom"].join(" ")}></span>
      </div>
      <div className="selectWrap">
        <select
          name="country"
          id="countrySelectBox"
          className={["select"].join(" ")}
        >
          <option value=""> - </option>
          <option value="0:30">30분</option>
          <option value="1:00">1시간</option>
          <option value="1:30">1시간 30분</option>
          <option value="2:00">2시간</option>
          <option value="2:30">2시간 30분</option>
          <option value="3:00">3시간</option>
          <option value="3:30">3시간 30분</option>
          <option value="4:00">4시간</option>
          <option value="4:30">4시간 30분</option>
          <option value="5:00">5시간</option>
        </select>
        <span className={["icon", "arrowBottom"].join(" ")}></span>
      </div>
      <div className="selectWrap">
        <select
          name="country"
          id="countrySelectBox"
          className={["select", "small"].join(" ")}
        >
          <option value=""> - </option>
          <option value="0:30">30분</option>
          <option value="1:00">1시간</option>
          <option value="1:30">1시간 30분</option>
          <option value="2:00">2시간</option>
          <option value="2:30">2시간 30분</option>
          <option value="3:00">3시간</option>
          <option value="3:30">3시간 30분</option>
          <option value="4:00">4시간</option>
          <option value="4:30">4시간 30분</option>
          <option value="5:00">5시간</option>
        </select>
        <span className={["icon", "arrowBottom"].join(" ")}></span>
      </div>
    </div>
  );
}

export default ComponentSample;
