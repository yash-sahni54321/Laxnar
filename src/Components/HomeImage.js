import React from "react";
import Homeimage from "../Images/Homeimage.jpg";
export const HomeImage = () => {
  return (
    <div className="border-t border-gray-500 px-12 py-16 font-sans bg-gray-800 flex-col sm:flex-row inline-flex justify-around">
      <div className="w-1/2 ">
        <img src={Homeimage} alt="Image" />
      </div>
      <div className=" w-1/2 relative text- p-3 rounded-3xl">
        <div className="w-full h-12 mb-5 relative items-center text-center">
          <div className="absolute text-gray-600 text-opacity-10 -z-1 font-bold text-8xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
            LAXNAR
          </div>
          <h2 className="right-0 z-10 absolute text-gray-500 text-4xl font-bold">
            About Us
          </h2>
        </div>
        <p className="mb-5 text-justify">
          We are Lucknow based elevator control panel manufacture and whole
          electrical kit supplier. Successfully delivering elevator control
          panels north India since 2017. Our UPS are our product quality with
          solution support. We tend to keep our products easy to install and
          provide higher safety measures in our products. Providing important
          technical feature like password protected, easy handling, compact size
          panels, pre-installed parameters, safety measures, on call service, at
          site service (if required).
        </p>
        <button className="mb-5 float-right text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Read More
        </button>
      </div>
    </div>
  );
};
