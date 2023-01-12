import React from "react";
import img2 from "./images/visual01.jpg";

function Header(props) {
  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: "url(" + img2 + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50%",
          height: "80vh;",
        }}
      >
        <div className="header_CREATIVE">
          <h1>CREATIVE DESIGN</h1>
          <h4>정직과 신뢰, 디자인을 최우선으로 생각하며</h4>
          <h4>고객과 함께할 수 있는 든든한 파트너가 되겠습니다.</h4>
        </div>
      </header>
    </>
  );
}

export default Header;
