import React, { useEffect, useRef } from "react";
import botel from "../images/botel.webp";
import curve from "../images/Group_2386_1920x.png";
import shark from "../images/Shark_Tank_Logo_180x.png";
import daily from "../images/OprahDaily_Logo_ab4a467c-8f8b-4f59-ba3d-7472d448ef00_180x.png";
import todays from "../images/TodayShow_Logo_180x.png";
import well from "../images/well.avif";
import pop from "../images/pop.webp";
import forbes from "../images/Forbes_logo.svg_b610a10b-126b-427c-979b-efcde6617b8a_180x.webp";

const Health = () => {
  return (
    <div className="w-full bg-[#fbf5e7] relative ">
      <div className="flex  gap-10 ">
        <div className="w-full  flex mt-10 justify-center px-10 float-right">
          <div className="w-full ml-20 mt-20 float-right">
            <p className="text-[#2a317d] font-bold text-4xl font-quantico stretched-text">
              DELICIOUS GUT HEALTH
            </p>
            <p className="mt-5 w-full text-xl text-[#2a317d] ">
              wildwonder is the world’s first sparkling prebiotic + probiotic
              beverage. Our flavors are inspired by heritage and taste like a
              California produce stand.
            </p>
            <button className="w-[13vw] rounded-lg py-3 font-bold text-xl text-white  mt-5 bg-[#ff0ab9]">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="min-w-max mt-10">
          <img src={botel} alt="" />
        </div>
      </div>
      <div className="absolute top-96 w-full z-50">
        <img src={curve} alt="" />
      </div>
      <div className="bg-[#c3e8f1] h-[90vh] w-full text-center relative flex items-center ">
        <div className="absolute flex flex-col items-center text-center w-full">
          <p className="font-quantico stretched-text text-4xl  text-[#2a317d]  font-bold mt-16">
            FEATURED IN
          </p>
          <div className="mt-16 flex justify-between gap-10 border  w-[75vw]">
            <div className="img">
              <img src={shark} alt="" className="w-32" />
            </div>
            <div className="img">
              <img src={todays} alt="" className="w-32" />
            </div>
            <div className="img">
              <img src={daily} alt="" className="w-32" />
            </div>
          </div>
          <div className=" flex justify-between items-center gap-16 border  w-[75vw]">
            <div className="img">
              <img src={forbes} alt="" className="" />
            </div>
            <div className="img">
              <img src={pop} alt="" className="" />
            </div>
            <div className="img">
              <img src={well} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
