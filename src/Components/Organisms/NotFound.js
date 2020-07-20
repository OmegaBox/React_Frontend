import React from "react";
import { Link, useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <img
        src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-error-404.png"
        alt=""
      />
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>
        방문하시려는 웹 페이지의 주소가 잘못 입력되었거나 변경 또는 삭제되어
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해 주시기 바랍니다.
      </p>
      <div className="customerCenter">
        <img
          src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-tel-purple.png"
          alt=""
        />
        <h3>고객센터</h3>
        <p>1234-5678</p>
      </div>
      <div className="btnWrap">
        <button
          type="button"
          className={["btn", "regular", "outLine", "main"].join(" ")}
          onClick={() => {
            history.goBack();
          }}
        >
          이전 페이지 이동
        </button>
        <Link to="/">
          <button
            type="button"
            className={["btn", "regular", "fill", "main"].join(" ")}
          >
            메가박스 메인으로
          </button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
