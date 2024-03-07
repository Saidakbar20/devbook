import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Bg from "../../assets/img/herobg.png";
import "./hero.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          navigation
          Autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <img className="swiper-img" src={Bg} alt="" />
          </SwiperSlide>{" "}
        </Swiper>
        <div className="container">
          <div className="hero-box">
            <h2 className="hero-title">
              <h2 className="hero-title">TEMURIYLAR</h2>
              DAVRI
              <br />
              ADABIYOTI
            </h2>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};
