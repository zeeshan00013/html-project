import React from "react";
import bg from "../images/desktop.jpg";
import textimg from "../images/Group_2_158_3x_e9f21d0a-5fd8-4393-a09a-133efbed7ac5.png";
import flower from "../images/flower.png";
import Pine from "../images/pine.webp";
import tar from "../images/tar.webp";
import pin2 from "../images/PINE2.webp";
const Home = () => {
  return (
    <div className=" w-full">
      <div className="h-11 w-full bg-[#2a317d] text-center  flex items-center justify-center text-white font-semibold text-xl font-quantico">
        FREE SHIPPING ON ORDERS $50+
      </div>
      <div className=" relative">
        <div className="border border-black absolute w-full flex items-center font-quantico h-24">
          <div className="flex items-center w-full justify-between px-10">
            <div className="text-white font-bold flex justify-between gap-20  ">
              <p className="text-2xl"> SHOP</p>
              <p className="text-2xl"> BUNDLES</p>
            </div>
            <div className="text-white">
              <p className="font-serif text-4xl font-bold">Wildwonder</p>
            </div>
            <div className="text-white font-bold flex justify-between gap-10  ">
              <p className="text-2xl"> LEARN</p>
              <p className="text-2xl">FIND WILDWONDER</p>
            </div>
          </div>
        </div>
        <img src={bg} alt="" />
        <div className="absolute top-28 -left-16  flex flex-col items-center justify-center text-white">
          <img src={textimg} alt="" className="w-[30vw]" />
          <p className="text-2xl w-3/4 text-center font-bold">
            Reset your gut, refresh your vibe, recharge your year
          </p>
          <button className="w-[23vw] rounded-lg py-3 font-bold text-xl  mt-5 bg-[#ff0ab9]">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="h-16 w-full bg-[#c2eaf3] text-center flex items-center justify-center text-white font-semibold text-xl overflow-hidden">
        <div className="ticker-track w-full relative flex items-center overflow-hidden">
          <div className="ticker flex items-center justify-center gap-5 animate-scroll overflow-auto">
            <div className="flex  items-center  w-[50vw]">
              <div className="image_wrapper">
                <img src={flower} alt="Flower" className="w-10 h-10" />
              </div>
              <h4 className=" text-[#2a317d] text-xl ">
                REAL FRUIT &amp; HERBS
              </h4>
            </div>
            <div className="flex  items-center  w-[50vw]">
              <div className="image_wrapper">
                <img src={Pine} alt="Flower" className="w-10 h-10" />
              </div>
              <h4 className=" text-[#2a317d] text-xl w-full ">
                40 CALORIES PER CAN
              </h4>
            </div>

            <div className="flex  items-center  w-[40vw]">
              <div className="image_wrapper">
                <img src={tar} alt="Flower" className="w-10 h-10" />
              </div>
              <h4 className=" text-[#2a317d] text-xl ">WOMAN-OWNED</h4>
            </div>
            <div className="flex   items-center  w-[40vw] ">
              <div className="image_wrapper">
                <img src={flower} alt="Flower" className="w-10 h-10" />
              </div>
              <h4 className=" text-[#2a317d] text-xl w-full">VEGAN</h4>
            </div>
            <div className="flex  items-center  w-[40vw] ">
              <div className="">
                <img src={pin2} alt="Flower" className="w-10 h-10" />
              </div>
              <h4 className=" text-[#2a317d] text-xl w-full ">
                6g SUGAR PER CAN
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
