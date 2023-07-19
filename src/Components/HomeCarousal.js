import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function HomeCarousal() {
  const slides = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/laxnar-8b7aa.appspot.com/o/Graphics_webp%2F2.webp?alt=media&token=12694a07-45dd-497b-9791-a6ea22f913f4",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/laxnar-8b7aa.appspot.com/o/Graphics_webp%2F3.webp?alt=media&token=fab3f2e6-a605-493c-8711-1302b0c6c7f5",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/laxnar-8b7aa.appspot.com/o/Graphics_webp%2F1.webp?alt=media&token=2426c413-2b7b-4418-bcab-9e327924a208",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  setTimeout(() => {
    nextSlide();
  }, 6000);
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" h-full w-full m-auto  relative group">
      <div>
        <img
          className="h-full w-full "
          src={slides[currentIndex].url}
          alt="Image"
        />
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCarousal;
