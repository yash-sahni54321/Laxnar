import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CardImage from "../Images/home-image-01.png";

function HomeCarousal() {
  const slides = [
    {
      title: "ARCODE",
      desc: "ARCODE is an innovative product which has broken new grounds in its sector. ARCODE is an integrated lift control unit containing VVVF driver, control unit and bring-to-floor systems.",
      url: "https://www.arkel.eu/UserFiles/media/arcode.png",
    },
    {
      title: "PRODUCT FAMILIY",
      desc: "ARCODE is an innovative product which has broken new grounds in its sector. ARCODE is an integrated lift control unit containing VVVF driver, control unit and bring-to-floor systems.",
      url: "https://arkel.b-cdn.net/UserFiles/Product/arl-200-s-kumanda-karti.png",
    },
    {
      title: "ARCODE 2",
      desc: "ARCODE is an innovative product which has broken new grounds in its sector. ARCODE is an integrated lift control unit containing VVVF driver, control unit and bring-to-floor systems.",
      url: "https://arkel.b-cdn.net/UserFiles/Product/arkel-adrive.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] h-screen w-full m-auto mb-5 relative group">
      {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500' 
      >
        
      </div> */}
      {/* Left Arrow */}

      {/* {currentIndex ===0} */}

      <div className="w-full h-full bg-center bg-blue-700 flex">
        <div className="w-2/5 h-full relative justify-center items-center">
          <div className="absolute text-white text-opacity-10 -z-1 font-bold text-8xl top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
            {slides[currentIndex].title}
          </div>
          <div className="p-20 flex-col items-center justify-evenly">
            <div className="text-white font-bold text-6xl mb-9 z-10">
              {slides[currentIndex].title}
            </div>
            <div className="font-semibold text-white text-lg mb-9">
              {slides[currentIndex].desc}
            </div>

            {/* Button of carousel */}
            <div className="max-sm:flex w-max max-sm:justify-center px-3 py-3 font-bold flex justify-center items-center text-sm bg-orange-600 hover:bg-orange-700 text-white hover:cursor-pointer">
              Place Order Call
            </div>
          </div>
        </div>

        <div className="w-3/5 p-30 h-full">
          <div className="p-30 h-full relative">
            <div className="absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="object-contain"
                src={CardImage}
                alt="card decor png image"
              ></img>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="object-contain"
                src={slides[currentIndex].url}
                alt="card decor png image"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default HomeCarousal;
