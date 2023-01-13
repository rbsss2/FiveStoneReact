import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.module.css";
import styled from "styled-components";

import img2 from "./images/visual01.jpg";
import img3 from "./images/visual02.jpg";
import img4 from "./images/visual03.jpg";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 0;
`;

function HeaderTest(props) {
  return (
    <Wrapper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 20000000,
        }}
        loop={true}
        navigation
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper header"
      >
        <SwiperSlide className="header_CREATIVE">
          <img src={img2} style={{}}></img>
          <div style={{ position: "absolute", top: "40%", left: "10%" }}>
            <h1
              style={{
                fontSize: "60px",
                color: "#fff",
                fontWeight: "500",
                height: "80px",
              }}
            >
              CREATIVE DESIGN
            </h1>
            <h4
              style={{
                color: "#eee",
                fontSize: "18px",
                height: "24px",
                textShadow: "0 1px 2px rgb(0 0 0 / 20%)",
              }}
            >
              정직과 신뢰, 디자인을 최우선으로 생각하며
            </h4>
            <h4
              style={{
                color: "#eee",
                fontSize: "18px",
                height: "24px",
                textShadow: "0 1px 2px rgb(0 0 0 / 20%)",
              }}
            >
              고객과 함께할 수 있는 든든한 파트너가 되겠습니다.
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="header_CREATIVE">
          <img src={img3}></img>
          <div style={{ position: "absolute", top: "40%", left: "10%" }}>
            <h1
              style={{
                fontSize: "60px",
                color: "#fff",
                fontWeight: "500",
                height: "80px",
              }}
            >
              CREATIVE DESIGN
            </h1>
            <h4
              style={{
                color: "#eee",
                fontSize: "18px",
                height: "24px",
                textShadow: "0 1px 2px rgb(0 0 0 / 20%)",
              }}
            >
              정직과 신뢰, 디자인을 최우선으로 생각하며
            </h4>
            <h4
              style={{
                color: "#eee",
                fontSize: "18px",
                height: "24px",
                textShadow: "0 1px 2px rgb(0 0 0 / 20%)",
              }}
            >
              고객과 함께할 수 있는 든든한 파트너가 되겠습니다.
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="header_CREATIVE">
          <img src={img4}></img>
          <div style={{ position: "absolute", top: "40%", left: "10%" }}>
            <h1
              style={{
                fontSize: "60px",
                color: "#fff",
                fontWeight: "500",
                height: "80px",
              }}
            >
              CREATIVE DESIGN
            </h1>
            <h4
              style={{
                color: "#eee",
                fontSize: "18px",
                height: "24px",
                textShadow: "0 1px 2px rgb(0 0 0 / 20%)",
              }}
            >
              정직과 신뢰, 디자인을 최우선으로 생각하며
            </h4>
            <h4
              style={{
                color: "#eee",
                fontSize: "18px",
                height: "24px",
                textShadow: "0 1px 2px rgb(0 0 0 / 20%)",
              }}
            >
              고객과 함께할 수 있는 든든한 파트너가 되겠습니다.
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default HeaderTest;
