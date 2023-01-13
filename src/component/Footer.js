import React from "react";

//이미지
import img11 from "./images/logo-f.png";
import img12 from "./images/mf-icon01.png";
import img13 from "./images/mf-icon02.png";
import img14 from "./images/mf-icon03.png";
import img15 from "./images/mf-icon04.png";

function Footer(props) {
  return (
    <>
      <div className="footerwrap">
        <div className="footerinner">
          <footer>
            <div className="f-logo">
              <img src={img11} alt="fivestone" />
            </div>

            <div className="fnb">
              <p>개인정보취급방침</p>
              <p>이메일무단수집거부</p>
              <p>묻고답하기</p>
            </div>
            <div className="sns">
              <ul className="snsinner">
                <li>
                  <a href="#">
                    <img src={img12} alt="페북" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={img13} alt="블로그" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={img14} alt="인스타그램" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={img15} alt="카스" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="address">
              <ul>
                <li>회사 : 파이브스톤</li>
                <li>
                  주소 : 경기도 고양시 덕양구 삼송로 193번길 28-3 하준빌딩 401호
                </li>
                <li className="last">사업자 등록번호:780-42-00047</li>
                <li className="last">TEL : 010-2709-0828</li>
                <li className="last">EMAIN : fivestone55@daum.net</li>
              </ul>
            </div>
            <div className="copy">
              COPYRIGHT © 2021 FIVESTONE. ALL RIGHT RESERVED
            </div>
            <a href="#" className="top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </svg>
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
