import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.module.css";

import img2 from "./images/visual01.jpg";
function Header(props) {
  return (
    <>
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
        style={{
          height: "40vw",
          backgroundImage: "url(" + img2 + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50%",
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }}>
          <SwiperSlide
            className="header_CREATIVE"
            style={{ paddingTop: "32vh", position: "relative", left: "10%" }}
          >
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
          </SwiperSlide>
          <SwiperSlide
            className="header_CREATIVE"
            style={{ paddingTop: "32vh", position: "relative", left: "10%" }}
          >
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
          </SwiperSlide>
          <SwiperSlide
            className="header_CREATIVE"
            style={{ paddingTop: "32vh", position: "relative", left: "10%" }}
          >
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
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default Header;
