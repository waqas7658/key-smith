import React from "react";
import "./Services.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { sliderSettings } from "../utils/Slider";
import ServiceCard from "./ServiceCard/ServiceCard";
import ServiceData from "../utils/serviceData";
const Services = () => {
  return (
    <>
      <section>
        <div className=" text-center">
          <h1 className="text-[35px] font-extrabold lg:text-[48px] leading-[56px] drop-shadow-lg">
            Our Services
          </h1>

          <div class="h-1  my-2 w-[5rem] mx-auto rounded drop-shadow-md bg-blue-500 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100">
            {/* <hr className=" my-2 w-64 mx-auto text-blue-600 font-bold" /> */}
          </div>
        </div>
        <div className="swiper container ">
          <Swiper {...sliderSettings} className="p-5">
            {/* <SlideButton /> */}
            {ServiceData.map((items, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...items} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
function SlideButton() {
  const swiper = useSwiper();

  return (
    <>
      <div className="swiper-btns ">
        <button onClick={() => swiper.slidePrev()} className="swiper-btn2">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="swiper-btn1">
          &gt;
        </button>
      </div>
    </>
  );
}
