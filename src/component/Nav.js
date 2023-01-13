import React, { useState, useEffect } from "react";

import img1 from "./images/logo.png";
import img2 from "./images/logo-c.png";

import { Link } from "react-router-dom";
function Nav(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <div>
      <nav>
        <div className="logoBox">
          <h1 className="logo">
            <Link to="/">
              <img src={img1} alt="파이브스톤 로고" />
            </Link>
          </h1>
          <h1 className={scrollPosition < 100 ? "on" : "change_on"}>
            <Link to="/">
              <img src={img2} alt="파이브스톤 로고" />
            </Link>
          </h1>
        </div>
        <ul className="gnb">
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
            <ul className="sub_menu">
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
        <h1></h1>
        <a href="#" className="allmenu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
