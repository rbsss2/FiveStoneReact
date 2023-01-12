import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Container } from "../assets/style/FiveStoneStyle";

// 이미지
import img3 from "./images/m-ms01.jpg";
import img4 from "./images/m-ms02.jpg";
import img5 from "./images/m-ms03.jpg";
import img6 from "./images/m-ms04.jpg";
import img11 from "./images/logo-f.png";
import img12 from "./images/mf-icon01.png";
import img13 from "./images/mf-icon02.png";
import img14 from "./images/mf-icon03.png";
import img15 from "./images/mf-icon04.png";
import maingroup from "./images/an-img.jpg";
import product1 from "./images/m-op01.jpg";
import product2 from "./images/m-op02.jpg";
import product3 from "./images/m-op03.jpg";
import product4 from "./images/m-op04.jpg";
import product5 from "./images/m-op05.jpg";
import inside1 from "./images/bn-img.jpg";

import MainBusiness from "./MainBusiness";
import MainBusinessList from "./MainBusinessList";
import Nav from "./Nav";
import Header from "./Header";

function FiveStone() {
  const [data, setData] = useState(MainBusiness);
  return (
    <Container>
      <Nav />
      <Header />

      <main>
        <article className="main_service">
          <h2 className="title">main service</h2>
          <p class="subtitle">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>

          <ul>
            <li>
              <img src={img3} alt="ms1" />
              <h3>회사개요</h3>
              <p>
                고객과 함꼐 꾸준히 성공한 당사의; 개요, 비전 등의 내용을
                소개합니다.
              </p>
            </li>
            <li>
              <img src={img4} alt="ms2" />
              <h3>사업분야</h3>
              <p>
                당사의 사업 내역 및 앞으로 계획하고 진행할 사업계획을
                정리하였습니다.
              </p>
            </li>
            <li>
              <img src={img5} alt="ms2" />
              <h3>제품안내</h3>
              <p>
                고객감동을 실현하는 당사의 추천상품을 자세히 보실 수 있는
                공간입니다.
              </p>
            </li>
            <li>
              <img src={img6} alt="ms2" />

              <h3>홍보자료</h3>
              <p>
                각종 미디어에 소개된 당사의 언론 및 영상 자료를 보실 수 있는
                공간입니다.
              </p>
            </li>
          </ul>
        </article>
        <article
          className="main_group"
          style={{
            backgroundImage: "URL(" + maingroup + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
            backgroundSize: "cover",
          }}
        >
          <div class="layer">
            <h2>the special design group</h2>
            <p>
              파이브스톤은 오랫동안 쌓은 전문지식과 노하우를 바탕으로 고객과
              함꼐하겠습니다.
            </p>
            <a href="#" class="ghost_btn">
              view detail
            </a>
          </div>
        </article>

        <h2 className="title">our product</h2>
        <p className="subtitle">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>
        <article className="main_product">
          <div
            className="main_product_bg bg1"
            style={{
              backgroundImage: "URL(" + product1 + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPostion: "50%",
            }}
          >
            <a href="#">
              <h3>
                DFSA 101
                <p className="ghost_btn">VIEW</p>
              </h3>
            </a>
          </div>
          <div
            className="main_product_bg bg2"
            style={{
              backgroundImage: "URL(" + product2 + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPostion: "50%",
            }}
          >
            <a href="#">
              <h3>
                DFSA 101
                <p className="ghost_btn">VIEW</p>
              </h3>
            </a>
          </div>
          <div
            className="main_product_bg bg3"
            style={{
              backgroundImage: "URL(" + product3 + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPostion: "50%",
            }}
          >
            <a href="#">
              <h3>
                DFSA 101
                <p className="ghost_btn">VIEW</p>
              </h3>
            </a>
          </div>
          <div
            className="main_product_bg bg4"
            style={{
              backgroundImage: "URL(" + product4 + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPostion: "50%",
            }}
          >
            <a href="#">
              <h3>
                DFSA 101
                <p className="ghost_btn">VIEW</p>
              </h3>
            </a>
          </div>
          <div
            className="main_product_bg bg5"
            style={{
              backgroundImage: "URL(" + product5 + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPostion: "50%",
            }}
          >
            <a href="#">
              <h3>
                DFSA 101
                <p className="ghost_btn">VIEW</p>
              </h3>
            </a>
          </div>
        </article>
        <article className="main_business">
          <h2 className="title">key business</h2>
          <p className="subtitle">
            정직좌 신뢰, 디자인으로 함꼐하는 파이브스톤
          </p>
          <MainBusinessList data={data} />
        </article>

        <article className="main_inside">
          <div
            className="inside_wrap"
            style={{
              backgroundImage: "url(" + inside1 + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50%",
            }}
          >
            <h2 className="fivestoneinside">fivestone inside</h2>
            <p className="inside_p">파이브스톤과 함께하세요!</p>

            <ul class="info">
              <li>
                <a href="#" class="ghost_btn2">
                  공지사항
                </a>
              </li>
              <li>
                {" "}
                <a href="#" class="ghost_btn2">
                  1:1문의
                </a>
              </li>
              <li>
                {" "}
                <a href="#" class="ghost_btn2">
                  FAQ
                </a>
              </li>
              <li>
                {" "}
                <a href="#" class="ghost_btn2">
                  채용안내
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>

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
    </Container>
  );
}

export default FiveStone;
