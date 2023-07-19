import React from "react";
import { NavLink } from "react-router-dom";
import Homeimage from "../Images/Homeimage.png";

export const HomeImage = () => {
  return (
    <div className="px-12 border-t border-gray-500 py-12 font-sans bg-white flex-col md:flex-row inline-flex justify-around">
      <div className="p-4 mr-10">
        <img
          className="rounded-md max-h-60 max-w-lg hidden md:block"
          src={Homeimage}
          alt="Image"
        />
      </div>
      <div className="relative p-3 rounded-3xl flex flex-col justify-center items-center md:items-start">
        <div className="w-full h-12 mb-5 relative items-center text-center">
          <div className="absolute text-gray-600 text-opacity-10 -z-1 font-nasalization text-8xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
            LAXNAR
          </div>
          <h2 className="right-0 z-10 absolute text-4xl font-bold">About Us</h2>
        </div>
        <p className="mb-5 text-justify">
          We are a Lucknow-based elevator control panel manufacturer and whole
          electrical kit supplier. We have been successfully delivering elevator
          control panels in North India since 2017. Our USP is the high quality
          of our products along with excellent solution support. We focus on
          keeping our products easy to install and providing enhanced safety
          measures. Our products come with important technical features such as
          password protection, easy handling, compact size panels, pre-installed
          parameters, safety measures, on-call service, and on-site service (if
          required).
        </p>
        <NavLink to="/about">
          <button className="mb-5 float-right text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-red-600 hover:bg-red-700 focus:ring-red-800">
            Read More
          </button>
        </NavLink>
      </div>
    </div>
  );
};
