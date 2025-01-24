import React, { useRef, useState } from "react";
import vari3 from "../images/vari3.webp";
import vari2 from "../images/vari2.webp";
import Raspberry1 from "../images/Raspberry_1_420x.png";
import vari1 from "../images/vari1.webp";
import bestImg from "../images/bestimg.png";
import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";

const BestSeller = () => {
  const cards = [
    {
      id: 1,
      title: "Raspberry Lychee",
      description: "# OF CANS",
      priceOptions: {},
      image: vari1,
    },
    {
      id: 2,
      title: "Mango Delight",
      description: "# OF CANS",
      priceOptions: {
        oneTimePurchase: "RS.25,000.00",
        subscribeAndSave: "RS.21,250.00",
      },
      image: vari2,
    },
    {
      id: 3,
      title: "Peach Delight",
      description: "# OF CANS",
      priceOptions: {
        oneTimePurchase: "RS.25,000.00",
        subscribeAndSave: "RS.21,250.00",
      },
      image: vari3,
    },
    {
      id: 4,
      title: "Mango Delight",
      description: "# OF CANS",
      priceOptions: {
        oneTimePurchase: "RS.25,000.00",
        subscribeAndSave: "RS.21,250.00",
      },
      image: Raspberry1,
    },
  ];

  const scrollRef = useRef(null);
  const profiles = [
    {
      id: 1,
      profilePic: profile1, // replace with actual image path
      name: "John Doe",
      caption:
        "Excellent cocktail alternative and tasty pick me up for me. I have IBS so this is truly, a gift!",
    },
    {
      id: 2,
      profilePic: profile2, // replace with actual image path
      name: "Jane Smith",
      caption:
        "Excellent cocktail alternative and tasty pick me up for me. I have IBS so this is truly, a gift!",
    },
    {
      id: 3,
      profilePic: profile3, // replace with actual image path
      name: "Alice Johnson",
      caption:
        "Excellent cocktail alternative and tasty pick me up for me. I have IBS so this is truly, a gift!",
    },
    // Add more profiles as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next profile
  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  // Function to go to the previous profile
  const prevProfile = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length
    );
  };
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
            className={`rounded-3xl bg-white min-w-[350px] mb-10 relative ${
              card.id === 1
                ? "border-4 border-r-[12px] border-b-[12px] border-[#2a317d] p-2"
                : "" // Add border for card 1
            }`}
          >
            <img
              src={card.image}
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
              <button
                className={`mt-4 w-full bg-[#e21b79]  py-4  font-bold text-2xl ${
                  card.id === 1
                    ? "bg-[#fdb71c] border-2 border-r-[12px] border-b-[12px] border-[#2a317d] rounded-2xl text-[#2a317d]"
                    : "text-white rounded-lg"
                } `}
              >
                Add to Cart
              </button>
              <p className=" text-center mt-3 font-bold">SEE DETAILS</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#2a317d] w-full mt-16 flex">
        <div className="w-full">
          <img src={bestImg} alt="" />
        </div>
        <div className="relative w-full flex flex-col mx-auto">
          {/* Carousel content */}
          <div className="flex items-center justify-center  rounded-lg  p-6">
            <div className="text-center">
              <img
                src={profiles[currentIndex].profilePic}
                alt={profiles[currentIndex].name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <p className="mt-2 text-white text-xl ">
                {profiles[currentIndex].caption}
              </p>
              <h2 className="mt-10 text-xl text-white">
                {profiles[currentIndex].name}
              </h2>
            </div>
          </div>

          <button
            onClick={prevProfile}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            &#8249;
          </button>
          <button
            onClick={nextProfile}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
