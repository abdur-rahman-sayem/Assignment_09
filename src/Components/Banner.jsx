import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import PlayLogo from "../assets/download.jpg";
import AppLogo from "../assets/App-Store.png";
import HeroImg from "../assets/hero.png";


const Banner = () => {
  const slides = [
    {
      title: (
        <>
          We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps
        </>
      ),
      desc: "At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.",
      img: HeroImg,
    },
    {
      title: (
        <>
          Empowering <br /> <span className="text-[#632EE3]">Digital Growth</span>
        </>
      ),
      desc: "From idea to app store — HERO.IO helps you bring your vision to life with creativity, performance, and impact.",
      img: HeroImg,
    },
    {
      title: (
        <>
          Your Ideas <br /> <span className="text-[#632EE3]">Our Innovation</span>
        </>
      ),
      desc: "We don’t just build apps; we build experiences. Partner with HERO.IO to shape the digital future.",
      img: HeroImg,
    },
  ];


  return (
    <section className="relative bg-gradient-to-b from-[#faf7ff] to-white overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="banner-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-2 items-center gap-10">
             
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                <h1 className="font-extrabold text-4xl lg:text-6xl mb-6 leading-tight text-gray-900">
                  {slide.title}
                </h1>
                <p className="text-gray-600 mb-8 text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
                  {slide.desc}
                </p>


                <div className="flex justify-center lg:justify-start gap-5">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <img src={PlayLogo} alt="Play Store" className="h-6 w-6" />
                    <span>Google Play</span>
                  </a>


                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-[#632EE3] text-[#632EE3] px-6 py-3 rounded-full font-semibold hover:bg-[#632EE3] hover:text-white hover:shadow-xl transition-all duration-300"
                  >
                    <img src={AppLogo} alt="App Store" className="h-6 w-10" />
                    <span>App Store</span>
                  </a>
                </div>
              </div>


              {/* Right: Image */}
              <div className="flex justify-center relative">
                <div className="absolute bg-[#632EE3]/10 rounded-full w-72 h-72 blur-3xl -z-10 top-10"></div>
                <img
                  src={slide.img}
                  alt="Hero Visual"
                  className="w-[85%] max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      {/* Pagination styling */}
      <style>
        {`
          .banner-swiper .swiper-pagination-bullet {
            background-color: #632EE3 !important;
            opacity: 0.5;
          }
          .banner-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.3);
          }
        `}
      </style>
    </section>
  );
};


export default Banner;



