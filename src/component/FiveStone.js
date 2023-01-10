import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from "../assets/style/FiveStoneStyle";
import img1 from "./images/logo-c.png";
import img2 from "./images/visual01.jpg";
import img3 from "./images/m-ms01.jpg";
import img4 from "./images/m-ms02.jpg";
import img5 from "./images/m-ms03.jpg";
import img6 from "./images/m-ms04.jpg";
import img7 from "./images/m-mb01.jpg";
import img8 from "./images/m-mb02.jpg";
import img9 from "./images/m-mb03.jpg";
import img10 from "./images/m-mb04.jpg";
import img11 from "./images/logo-f.png";
import img12 from "./images/mf-icon01.png";
import img13 from "./images/mf-icon02.png";
import img14 from "./images/mf-icon03.png";
import img15 from "./images/mf-icon04.png";

function FiveStone() {
  const service = [
    {
      no: 1,
      title: "회사개요",
      des: "고객과 함께 꾸준히 성공한 당사의 개요, 비전 등의 내용을 소개합니다.",
    },
    {
      no: 2,
      title: "사업분야",
      des: "당사의 사업 내역 및 앞으로 계획하고 진행할 사업계획을 정리하였습니다.",
    },
    {
      no: 3,
      title: "제품안내",
      des: "당사의 사업 내역 및 앞으로 계획하고 진행할 사업계획을 정리하였습니다.",
    },
    {
      no: 4,
      title: "홍보자료",
      des: "각종 미디어에 소개된 당사의 언론 및 영상 자료를 보실 수 있는 공간입니다.",
    },
  ];
  return (
    <BrowserRouter>
      <Container>
        <nav>
          <h1 className="logo">
            <img src={img1} alt="파이브스톤 로고" />
          </h1>

          <ul id="gnb">
            <li>
              <a href="#">about</a>
              <ul className="sub_menu">
                <li>
                  <a href="#">회사개요</a>
                </li>
                <li>
                  <a href="#">CEO인사말</a>
                </li>
                <li>
                  <a href="#">오시는길</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">service</a>
              <ul className="sub_menu">
                <li>
                  <a href="#">사업분야1</a>
                </li>
                <li>
                  <a href="#">사업분야2</a>
                </li>
                <li>
                  <a href="#">사업분야3</a>
                </li>
                <li>
                  <a href="#">사업분야4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">service</a>
              <ul class="sub_menu">
                <li>
                  <a href="#">제품안내1</a>
                </li>
                <li>
                  <a href="#">제품안내2</a>
                </li>
                <li>
                  <a href="#">제품안내3</a>
                </li>
                <li>
                  <a href="#">제품안내4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">service</a>
              <ul className="sub_menu">
                <li>
                  <a href="#">공지사항</a>
                </li>
                <li>
                  <a href="#">홍보자료</a>
                </li>
                <li>
                  <a href="#">채용안내</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">service</a>
              <ul className="sub_menu">
                <li>
                  <a href="#">1:1문의</a>
                </li>
                <li>
                  <a href="#">묻고답하기</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </li>
          </ul>
          <a href="#" className="all_menu">
            <div className="bar">
              <span className="bartop"></span>
              <span className="barmid"></span>
              <span className="barbot"></span>
            </div>
          </a>
          <h1></h1>
          <a href="#" className="allmenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </a>
        </nav>

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
          <article class="main_group">
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

          <h2 class="title">our product</h2>
          <p class="subtitle">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>
          <article id="main_product">
            <div class="main_product_bg bg1">
              <a href="#">
                <h3>
                  DFSA 101
                  <p class="ghost_btn">VIEW</p>
                </h3>
              </a>
            </div>
            <div class="main_product_bg bg2">
              <a href="#">
                <h3>
                  DFSA 101
                  <p class="ghost_btn">VIEW</p>
                </h3>
              </a>
            </div>
            <div class="main_product_bg bg3">
              <a href="#">
                <h3>
                  DFSA 101
                  <p class="ghost_btn">VIEW</p>
                </h3>
              </a>
            </div>
            <div class="main_product_bg bg4">
              <a href="#">
                <h3>
                  DFSA 101
                  <p class="ghost_btn">VIEW</p>
                </h3>
              </a>
            </div>
            <div class="main_product_bg bg5">
              <a href="#">
                <h3>
                  DFSA 101
                  <p class="ghost_btn">VIEW</p>
                </h3>
              </a>
            </div>
          </article>
          <article class="main_business">
            <h2 class="title">key business</h2>
            <p class="subtitle">정직좌 신뢰, 디자인으로 함꼐하는 파이브스톤</p>

            <ul>
              <li>
                <a href="#">
                  <div class="mb-wrap">
                    <img src={img7} alt="ms1" />
                  </div>
                  <div class="mb-title">
                    <h3>사업분야01</h3>
                    <p>
                      고객의 필요와 사업 환경에 따라 맞춤형 디자인을 보다 큰
                      감동을 드립니다.
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="mb-wrap">
                    <img src={img8} alt="ms2" />
                  </div>
                  <div class="mb-title">
                    <h3>사업분야02</h3>
                    <p>
                      고객의 필요와 사업 환경에 따라 맞춤형 디자인을 보다 큰
                      감동을 드립니다.
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="mb-wrap">
                    <img src={img9} alt="ms2" />
                  </div>
                  <div class="mb-title">
                    <h3>사업분야03</h3>
                    <p>
                      고객의 필요와 사업 환경에 따라 맞춤형 디자인을 보다 큰
                      감동을 드립니다.
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="mb-wrap">
                    <img src={img10} alt="ms2" />
                  </div>
                  <div class="mb-title">
                    <h3>사업분야04</h3>
                    <p>
                      고객의 필요와 사업 환경에 따라 맞춤형 디자인을 보다 큰
                      감동을 드립니다.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </article>

          <article id="main_inside">
            <div class="inside_wrap">
              <h2 class="fivestoneinside">fivestone inside</h2>
              <p class="inside_p">파이브스톤과 함께하세요!</p>

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

        <div id="footerwrap">
          <div class="footerinner">
            <footer>
              <div class="f-logo">
                <img src={img11} alt="fivestone" />
              </div>

              <div class="fnb">
                <p>개인정보취급방침</p>
                <p>이메일무단수집거부</p>
                <p>묻고답하기</p>
              </div>
              <div class="sns">
                <ul class="snsinner">
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
              <div class="address">
                <ul>
                  <li>회사 : 파이브스톤</li>
                  <li>
                    주소 : 경기도 고양시 덕양구 삼송로 193번길 28-3 하준빌딩
                    401호
                  </li>
                  <li class="last">사업자 등록번호:780-42-00047</li>
                  <li class="last">TEL : 010-2709-0828</li>
                  <li class="last">EMAIN : fivestone55@daum.net</li>
                </ul>
              </div>
              <div class="copy">
                COPYRIGHT © 2021 FIVESTONE. ALL RIGHT RESERVED
              </div>
              <a href="#" class="top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              </a>
            </footer>
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default FiveStone;
