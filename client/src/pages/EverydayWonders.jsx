import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slid2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slie4.jpg";
import slide5 from "../images/sli5.jpg";
import slide6 from "../images/slide6.jpg";
import slide7 from "../images/sli7.jpg";

const EverydayWonders = () => {
  return (
    <div className="bg-[#c3e8f1] min-h-[100vh] text-center p-6 font-quantico">
      <h1 className="text-4xl font-bold text-[#2a317d] mb-10 stretched-text">
        CREATE #EVERYDAYWONDERS
      </h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
        }}
        className="mb-8"
      >
        {/* Replace the src with your image paths */}
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide1}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide2}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide3}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide4}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide5}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide6}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide7}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide1}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide2}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-md h-52 w-52 "
            src={slide3}
            alt="Grapefruit Drink"
          />
        </SwiperSlide>
      </Swiper>
      <button className="bg-[#e21b79] text-white py-4 px-8 rounded-lg font-semibold  text-2xl">
        FOLLOW @drinkwildwonder
      </button>
    </div>
  );
};
export default EverydayWonders;
