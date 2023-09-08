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
            {/* {ServiceData.map((items, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...items} />
                
              </SwiperSlide>
            ))} */}

            {ServiceData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={item.id}
                  className="max-w-md h-[24rem] py-4 px-4  bg-blue-400 shadow-lg rounded-lg my-20"
                >
                  <div className="flex justify-center md:justify-cemter -mt-20">
                    <img
                      className="w-28 w h-28  object-cover rounded-full border-2 border-indigo-500"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-800 text-lg lg:text-xl my-4  font-semibold">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-black">{item.description}</p>
                  </div>
                </div>
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
