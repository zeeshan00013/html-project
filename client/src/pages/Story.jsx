import React from "react";
import story1 from "../images/story1.webp";
import story2 from "../images/story2.avif";
import story3 from "../images/story3.webp";

const Story = () => {
  return (
    <div className="h-full flex flex-col ">
      <div className="flex  justify-between px-10 font-quantico mt-10 mb-10">
        {/* Card 1 */}
        <div className="text-whitew-full h-auto lg:w-[30%]">
          <div className="bg-[rgb(244,54,76)]  rounded-3xl ">
            <div>
              <h2 className="text-3xl font-semibold  p-2 text-blue-800 text-center mb-2">
                Prebiotics + Probiotics
              </h2>
            </div>
            <div>
              <img
                src={story1} // Replace with your actual image URL
                alt="Prebiotics and Probiotics"
                className="w-full"
              />
            </div>
            <p className="p-5 text-lg md:text-xl lg:text-2xl font-semibold text-gray-100">
              Our proprietary blend was developed by microbiome experts to
              support gut and immune health.
            </p>
          </div>
          <div className="mt-10 flex justify-center ">
            <button className=" text-[rgb(244,54,76)] w-full text-2xl border-4  h-16 border-[rgb(244,54,76)] font-semibold py-2 px-6 rounded-xl  hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[rgb(253,183,28)] text-white rounded-3xl w-full h-[90vh] lg:w-[30%]">
          <div>
            <h2 className="text-3xl font-semibold p-2 text-blue-800 text-center mb-2">
              Prebiotics + Probiotics
            </h2>
          </div>
          <div>
            <img
              src={story2} // Replace with your actual image URL
              alt="Prebiotics and Probiotics"
              className="w-full"
            />
          </div>
          <p className="p-5 md:text-xl lg:text-2xl font-semibold text-gray-100">
            Our proprietary blend was developed by microbiome experts to support
            gut and immune health.
          </p>
          <div className=" py-10 flex justify-center ">
            <button className=" text-[rgb(253,183,28)] w-full text-2xl border-4  h-16 border-[rgb(253,183,28)] font-semibold py-2 px-6 rounded-xl  hover:text-white">
              our story
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className=" w-full h-[90vh] lg:w-[30%]">
          <div className="bg-[rgb(25,171,132)] text-white rounded-3xl ">
            <div>
              <h2 className="text-3xl font-semibold p-2  text-blue-800 text-center mb-2">
                Prebiotics + Probiotics
              </h2>
            </div>
            <div>
              <img
                src={story3} // Replace with your actual image URL
                alt="Prebiotics and Probiotics"
                className="w-full"
              />
            </div>
            <p className="p-5  text-lg md:text-xl lg:text-2xl font-semibold text-gray-100">
              Our proprietary blend was developed by microbiome experts to
              support gut and immune health.
            </p>
          </div>
          <div className="py-10 flex justify-center ">
            <button className=" text-[rgb(25,171,132)] w-full text-2xl border-4  h-16 border-[rgb(25,171,132)] font-semibold py-2 px-6 rounded-xl  hover:text-white">
              Social Impact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
