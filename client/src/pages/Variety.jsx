import React from "react";
import vari2 from "../images/vari2.webp";

const Variety = () => {
  return (
    <div className="w-full flex-col items-center bg-[#facad1] font-quantico">
      <div className="flex  justify-between px-20">
        <div className="mt-6">
          <div className="rounded-3xl  min-w-[350px] mb-10 relative ">
            <img src={vari2} className="rounded-3xl" />

            <div className="mt-5 text-[#2a317d] ">
              <h3 className="text-3xl font-bold text-start">Variety Pack</h3>
              <div className=" justify-between mt-4 ">
                <p className="mt-2 text-xl font-bold">OFF CANS</p>
                <div className="border-2 border-[#2a317d] text-white rounded-2xl space-x-1 p-1 w-[30vh]">
                  <button className="bg-[#2a317d] px-3 py-1 rounded-xl">
                    12
                  </button>

                  <button className="bg-[#2a317d] px-3 py-1 rounded-xl">
                    24
                  </button>
                  <button className="bg-[#2a317d] px-3 py-1 rounded-xl">
                    36
                  </button>
                </div>
              </div>
              <div className="relative">
                <select className="w-full mt-4 py-3 px-4  border-2 border-[#2a317d] text-[#2a317d] rounded-2xl text-xl font-bold bg-transparent">
                  <option value="">Delivery every 4 weeks</option>
                  <option value="">Delivery every 6 weeks</option>
                  <option value="">Delivery every 8 weeks</option>
                </select>
              </div>
              <button className="mt-4 w-full bg-[#e21b79] text-white py-4 rounded-lg font-bold text-2xl">
                QUICK ADD
              </button>
              <p className=" text-center mt-3 font-bold">SEE DETAILS</p>
            </div>
          </div>
        </div>
        <div className=" max-w-2xl text-center flex flex-col items-center space-y-16 ">
          <p className="text-5xl font-semibold text-[#e21b79] mt-40">
            SUBSCRIBE & SAVE
          </p>
          <p className="text-[#2a317d] text-2xl font-bold mt-10 w-3/4 text-center">
            Show your gut some love and put delicious sparkling drinks on
            repeat. Sign up for a wildwonder subscription to enjoy exclusive
            discounts and perks.
          </p>
          <p className="text-[#e21b79] text-3xl font-bold mt-10 w-3/5 text-center">
            15% OFF EVERY ORDERCHANGE OR CANCEL ANYTIMEFREE GIFTS + PERKS
          </p>
          <button className="py-4 px-8 w-[20vw] rounded-xl text-[#e21b79] text-xl font-bold border-4 border-[#e21b79] mt-10 ">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Variety;
