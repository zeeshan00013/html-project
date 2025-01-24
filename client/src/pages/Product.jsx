import React, { useState, useRef } from "react";
import img1 from "../images/staberyi.png";
import img11 from "../images/Strawberr2.png";
import pinaple1 from "../images/Pineapple_1_green_420x.png";
import pinaple2 from "../images/Pineapple_4_green_420x.png";
import peach1 from "../images/Peach_1_420x.png";
import peach2 from "../images/Peach_3_420x.png";
import mongo1 from "../images/Mango_1_420x.png";
import mongo2 from "../images/Mango_4_420x.png";
import Raspberry1 from "../images/Raspberry_1_420x.png";
import Raspberry2 from "../images/Raspberry_4_420x.png";

const Product = () => {
  const cards = [
    {
      id: 1,
      title: "Raspberry Lychee",
      description: "# OF CANS",
      priceOptions: {},
      image: img1,
      hoverImage: img11,
    },
    {
      id: 2,
      title: "Mango Delight",
      description: "# OF CANS",
      priceOptions: {
        oneTimePurchase: "RS.25,000.00",
        subscribeAndSave: "RS.21,250.00",
      },
      image: pinaple1,
      hoverImage: pinaple2,
    },
    {
      id: 3,
      title: "Peach Delight",
      description: "# OF CANS",
      priceOptions: {
        oneTimePurchase: "RS.25,000.00",
        subscribeAndSave: "RS.21,250.00",
      },
      image: peach1,
      hoverImage: peach2,
    },
    {
      id: 4,
      title: "Mango Delight",
      description: "# OF CANS",
      priceOptions: {
        oneTimePurchase: "RS.25,000.00",
        subscribeAndSave: "RS.21,250.00",
      },
      image: mongo1,
      hoverImage: mongo2,
    },
    {
      id: 5,
      title: "Raspberry Delight",
      description: "# OF CANS",
      priceOptions: {
        oneTimePurchase: "RS.25,000.00",
        subscribeAndSave: "RS.21,250.00",
      },
      image: Raspberry1,
      hoverImage: Raspberry2,
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollRef = useRef(null);

  return (
    <div className="p-10 font-quantico">
      <p className="text-4xl font-bold text-[#2a317d] w-full text-center stretched-text">
        SIP IN THE POSSIBILITIES
      </p>
      <div
        className="relative flex gap-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-[#2a317d] scrollbar-track-[#ffffff] mt-10 rounded-md"
        ref={scrollRef}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl bg-white min-w-[350px] mb-10 relative "
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={hoveredCard === card.id ? card.hoverImage : card.image}
              alt={card.title}
              className="rounded-3xl w-full object-fit"
            />

            <div className="mt-5 text-[#2a317d] text-center">
              <h3 className="text-3xl font-bold text-start">{card.title}</h3>
              <div className="flex justify-between mt-4 ">
                <p className="mt-2 text-xl font-bold">{card.description}</p>
                <div className="border-2 border-[#2a317d] text-white rounded-2xl space-x-1 p-1">
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
              <div className="mt-2">
                <label className="flex items-center justify-between space-x-2">
                  <div className="gap-2">
                    <input
                      type="radio"
                      name={`purchase-${card.id}`}
                      className=""
                    />
                    <span className="ml-auto font-bold">One-Time Purchase</span>
                  </div>
                  <span className="ml-auto font-bold">
                    {card.priceOptions.oneTimePurchase}
                  </span>
                </label>
                <label className="flex items-center justify-between space-x-2 mt-2">
                  <div className="">
                    <input
                      type="radio"
                      name={`purchase-${card.id}`}
                      className="font-bold"
                    />
                    <span className="font-bold">Subscribe & Save (15%)</span>
                  </div>
                  <span className="ml-auto text-pink-600 font-bold">
                    {card.priceOptions.subscribeAndSave}
                  </span>
                </label>
              </div>
              <p className="mt-4 text-sm font-medium text-blue-600">
                {card.subscriptionDetails}
              </p>
              <div className="relative">
                <select className="w-full mt-4 py-3 px-4  border-2 border-[#2a317d] text-[#2a317d] rounded-2xl text-xl font-bold">
                  <option value="">Delivery every 4 weeks</option>
                  <option value="">Delivery every 6 weeks</option>
                  <option value="">Delivery every 8 weeks</option>
                </select>
              </div>
              <button className="mt-4 w-full bg-[#e21b79] text-white py-4 rounded-lg font-bold text-2xl">
                Add to Cart
              </button>
              <p className=" text-center mt-3 font-bold">SEE DETAILS</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
