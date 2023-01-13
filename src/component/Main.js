import { useState } from "react";

// 이미지
import img3 from "./images/m-ms01.jpg";
import img4 from "./images/m-ms02.jpg";
import img5 from "./images/m-ms03.jpg";
import img6 from "./images/m-ms04.jpg";
import maingroup from "./images/an-img.jpg";
import product1 from "./images/m-op01.jpg";
import product2 from "./images/m-op02.jpg";
import product3 from "./images/m-op03.jpg";
import product4 from "./images/m-op04.jpg";
import product5 from "./images/m-op05.jpg";
import inside1 from "./images/bn-img.jpg";

// 컴포넌트
import MainBusiness from "./MainBusiness";
import MainBusinessList from "./MainBusinessList";
function Main() {
  const [data, setData] = useState(MainBusiness);
  return (
    <>
      <main>
        <article className="main_service">
          <h2 className="title">main service</h2>
          <p class="subtitle">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</p>

          <ul>
            <li>
              <img src={img3} alt="ms1" />
              <h3>회사개요</h3>
              <p>
                고객과 함께 꾸준히 성공한 당사의; 개요, 비전 등의 내용을
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
              함께하겠습니다.
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
            정직좌 신뢰, 디자인으로 함께하는 파이브스톤
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
                <a href="#" class="ghost_btn2">
                  1:1문의
                </a>
              </li>
              <li>
                <a href="#" class="ghost_btn2">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" class="ghost_btn2">
                  채용안내
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}

export default Main;
