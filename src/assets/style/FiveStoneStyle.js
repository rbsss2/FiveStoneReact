import React from "react";
import styled from "styled-components";
//FiveStone
export const Container = styled.div`
  /* width: ${(props) => props.width || "90vw"}; */
  img {
    vertical-align: top;
    max-width: 100%;
  }
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  nav {
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: fixed;
    width: 100%;
    z-index: 999;
    border-bottom: 1px solid #ddd;
  }
  nav:hover {
    background-color: #fff;
  }
  nav .logo {
    transform: translateY(50%);
    opacity: 1;
  }
  nav:hover .logo {
    opacity: 0;
  }
  nav .on {
    opacity: 0;
    transform: translateY(-50%);
  }
  nav:hover .on {
    opacity: 1;
  }

  .change_on {
    opacity: 1;
    transform: translateY(-50%);
  }
  .logoBox {
    margin-right: auto; /* 플렉스 아이템 개별 정렬 */
    margin-left: 30px;
  }

  nav h1 {
    margin-right: auto; /* 플렉스 아이템 개별 정렬 */
  }
  nav .gnb {
    /* flex-item / flex-container*/
    display: flex;
  }
  nav .gnb > li {
    position: relative; /* 소메뉴 포지션 기준 */
  }
  /* 각 각의 대메뉴 제목 */
  nav .gnb > li > a {
    font-weight: 700;
    font-size: 1.15rem;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    transition: 0.3s;
  }
  nav .gnb > li > a:hover {
    background-color: #fff;
    color: #000;
  }
  /* 소메뉴 */
  nav .gnb .sub_menu {
    background-color: #fff;
    box-shadow: 0px 1.9px 2.2px rgba(0, 0, 0, 0.02),
      0px 4.5px 5.3px rgba(0, 0, 0, 0.028), 0px 8.4px 10px rgba(0, 0, 0, 0.035),
      0px 15px 17.9px rgba(0, 0, 0, 0.042), 0px 28px 33.4px rgba(0, 0, 0, 0.05),
      0px 67px 80px rgba(0, 0, 0, 0.07);
    transition: 0.3s;
    width: 130px;
    position: absolute;
    left: 0;
    top: 60px;
    z-index: 99;

    opacity: 0;
    transform: translateY(20px);
    pointer-events: none; /* 마우스 포인트 이벤트 대상 없음. 마우스 커서의 기능 x */
  }
  nav .gnb > li:hover .sub_menu {
    opacity: 1;
    transform: translateY(0);
    width: 130px;
    pointer-events: all; /* 마우스 포인트 이벤트 대상 전부. 마우스 커서의 기능 */
  }

  nav .gnb .sub_menu a {
    font-weight: 600;
    padding: 10px 20px;
    transition: 0.3s;
  }
  nav .gnb .sub_menu a:hover {
    color: rgb(86, 142, 226);
  }
  /***allmenu***/
  .allmenu {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
  .allmenu svg path {
    fill: #000;
    padding-right: 10px;
  }

  header {
    background: url(visual01.jpg) no-repeat 50% / cover;
    height: 80vh;
  }
  header .header_CREATIVE {
    padding-top: 32vh;
    padding-left: 20vh;
  }
  header .header_CREATIVE h1 {
    font-size: 60px;
    color: #fff;
    font-weight: 500;
    height: 80px;
  }
  header .header_CREATIVE h4 {
    color: #eee;
    font-size: 18px;
    height: 24px;
    text-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  }
  header .header_CREATVE h4:first-child {
    margin-top: 10vw;
  }
  /*main*/
  main .title {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 800;
    margin-top: 100px;
    text-transform: uppercase;
  }
  main .subtitle {
    text-align: center;
    font-size: 1.1rem;
    margin-top: 10px;
  }

  /*****main service*****/
  .main_service ul {
    display: flex;
    justify-content: center;
    margin: 30px 0 70px;
  }
  .main_service ul li {
    margin: 1%;
    width: 300px;
    height: 300px;
  }
  .main_service ul li.active {
    transform: scale(1.1);
  }
  .main_service ul li h3 {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 20px 5px 0;
  }
  .main_service ul li p {
    padding: 10px 5px 20px;
  }

  /*main_gruop*/
  .main_group {
    height: 500px;
    text-transform: capitalize;
  }
  .main_group .layer {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main_group h2 {
    margin-top: 170px;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .main_group p {
    margin-top: 30px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .main_group .ghost_btn {
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 5px 20px;
    font-weight: 400;
    transition: 0.3s ease;
    text-transform: uppercase;
    font-size: 12px;
  }
  .main_group .ghost_btn:hover {
    background-color: rgb(228, 154, 154);
  }

  /*****main_product******/
  .main_product {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr; /* 3열 */
    grid-auto-rows: 18vw;
    gap: 5px;
    margin: 50px auto 0;
    width: 70%;
  }
  .main_product .main_product_bg {
    background: no-repeat 50% / cover;
    overflow: hidden;
  }
  .main_product .bg1 {
    grid-column: 1 / 2;
    grid-row: 1/3;
    background-image: url(./images/m-op01.jpg);
  }
  .main_product .bg2 {
    background-image: url(./images/m-op02.jpg);
  }
  .main_product .bg3 {
    background-image: url(./images/m-op03.jpg);
  }
  .main_product .bg4 {
    background-image: url(./images/m-op04.jpg);
  }
  .main_product .bg5 {
    background-image: url(./images/m-op05.jpg);
  }

  .main_product a {
    font-size: 2rem;
    font-weight: 700;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    transform: translateY(30px);
    opacity: 0;
  }
  .main_product p {
    text-align: center;
  }
  .main_product .main_product_bg:hover a {
    opacity: 1;
    transform: translateY(0);
    background-color: rgba(000, 000, 000, 0.8);
    color: #fff;
    transition: 0.3s;
  }

  .main_product .main_product_bg:hover p {
    border: 1px solid #fff;
    padding: 10px 10px;
    margin-top: 10px;

    text-align: center;
  }

  /****main_business***/
  .main_business .business {
    display: flex;
    justify-content: center;
    margin: 30px 0 70px;
  }
  .main_business .business .businessList {
    margin: 1%;
    width: 300px;
    height: 300px;
  }
  .main_business .business .businessList.active {
    transform: scale(1.1);
  }
  .main_business .business .businessList h3 {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 20px 5px 0;
  }
  .main_business .business .businessList p {
    padding: 10px 5px 20px;
  }
  .main_business .business .businessList .mb-wrap {
    overflow: hidden;
  }

  .main_business .business .businessList:hover .mb-wrap {
    background-color: rgba(000, 000, 000, 0.8);
  }
  .main_business .business .businessList:hover img {
    transform: scale(1.1);
    transition: 0.5s ease;
    filter: brightness(0.5);
  }
  .main_business .business .businessList:hover h3 {
    color: rgb(78, 114, 212);
  }
  .main_business .business .businessList .mb-title {
    background: #fff;
    text-align: left;
    padding: 15px 15px 15px 15px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .main_inside {
    height: 500px;
    text-transform: capitalize;
    margin: 380px auto 0;
    color: #fff;
    background-attachment: scroll;
  }
  .main_inside .inside_wrap {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main_inside h2 {
    margin-top: 140px;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .main_inside p {
    margin-top: 10px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .main_inside .ghost_btn2 {
    border: 1px solid #ddd;
    padding: 30px 80px;

    font-weight: 400;
    transition: 0.3s ease;
    text-transform: uppercase;
    font-size: 12px;
  }
  .main_inside .info {
    display: flex;
    flex-direction: row;
  }
  .main_inside .info li {
    margin: 10px;
    height: 78px;
  }

  .main_inside .info li:hover {
    background-color: rgb(173, 207, 235);
  }

  /*footer */
  .footerwrap {
    width: 100%;
    position: relative;
    clear: both;
    padding: 10px 0px 20px 0;
    background-color: #333;
    border-top: 0px solid #eee;
    /* padding-right: 15px; */
    /* padding-left: 15px; */
    /* background-color: red; */
  }
  .footerwrap .footerinner {
    /* padding-right: 15px; */
    /* padding-left: 15px; */
    margin-right: auto;
    margin-left: auto;
    position: relative;
    width: 1100px;

    /* background-color: red; */
  }
  footer {
    position: relative;
    margin: 0 auto;
  }
  footer .f-logo {
    position: absolute;
    left: 0px;
    top: 17px;
  }
  footer .f-logo img {
    vertical-align: middle;
  }
  footer .fnb {
    /* padding-top: 25px; */
    padding-left: 110px;
    display: flex;
    color: #ddd;
  }
  footer .fnb p {
    height: 21px;
  }
  footer .fnb p:nth-child(2) {
    padding-left: 10px;
  }

  footer .fnb p:nth-child(3) {
    padding-left: 10px;
  }

  footer .sns {
    position: absolute;
    right: 10px;
    top: 20px;
  }
  footer .sns ul li {
    float: left;
    padding: 0 0 0 10px;
  }

  footer .address {
    padding-left: 110px;
    color: #999;
    font-size: 13px;
  }
  footer .address ul li {
    height: 17px;
  }
  footer .copy {
    padding-left: 110px;
    color: #888;
    font-size: 13px;
  }
  /* top */

  .top {
    width: 48px;
    height: 48px;
    background-color: #999;
    position: fixed;
    right: 30px;
    bottom: 40px;
  }
  .top svg path {
    fill: #fff;
  }
  .top:hover {
    bottom: 42px;
  }
`;

function FiveStoneStyle(props) {
  return <div></div>;
}

export default FiveStoneStyle;
