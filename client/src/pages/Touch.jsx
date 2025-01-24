import React from "react";

export const Touch = () => {
  return (
    <div>
      <div className="h-96  bg-[#2a317d] mx-auto py-8 text-white text-center  flex flex-col items-center">
        <h2 className="text-[50px]   font-bold "> LET'S STAY IN TOUCH</h2>
        <p className="text-2xl w-3/4 mt-10 ">
          Sign up now for gut health tips, exclusive offers, and new products.
          Check your inbox for 10% off your first order!
        </p>
        <div className="mt-16 w-full">
          <input
            type="email"
            placeholder="Enter Your email here"
            className=" w-[25%] rounded-l-lg placeholder-gray-500 placeholder-italic placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 py-4 px-5"
          />
          <button className="rounded-r-lg bg-[#e21b79] py-4 w-40 font-bold text-xl">
            SING UP
          </button>
        </div>
      </div>
    </div>
  );
};
