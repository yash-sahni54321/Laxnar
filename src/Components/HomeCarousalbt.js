import React, { useRef } from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
export const HomeCarousalbt = () => {
  const myRef = useRef(null);
  const HomeCImages = [
    {
      title: "MT71 (CLOSE LOOP / GEARLESS) INTEGRATED PANEL",
      img: require("../Images/MT71W.png"),
      id: 1,
    },
    {
      title: "MT73 (OPEN LOOP / GEARED) INTEGRATED PANEL",
      img: require("../Images/MT73W.png"),
      id: 2,
    },
    {
      title: "LX 32 AUTODOOR / MANUAL DOOR PANEL",
      img: require("../Images/LX32.png"),
      id: 3,
    },
    {
      title: "LX 40 AUTO / MANUAL DOOR PANEL",
      img: require("../Images/LX40.png"),
      id: 4,
    },
    {
      title: "LX-32 HYDRO (HYDRAULIC-CONTROL PANEL)",
      img: require("../Images/LX40(Hydro).png"),
      id: 5,
    },
  ];

  const scrollLeft = () => {
    if (myRef.current != null) {
      myRef.current.scrollLeft -= 200;
    }
    // document.getElementById("content").scrollLeft -= 800;
  };
  const scrollRight = () => {
    if (myRef.current != null) {
      myRef.current.scrollLeft += 200;
    }
    // document.getElementById("content").scrollLeft += 800;
  };

  return (
    <div className="relative bg-gray-700">
      {/* <div className="text-center py-5 text-gray-500 text-5xl">Products</div> */}
      <div className="flex justify-center top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        ref={myRef}
        className=" bg-gray-700 carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide custom-scrollbar"
      >
        <div className="bg-gray-700">
          <div className="flex-row inline-flex bg-gray-700">
            {HomeCImages.map((CardData) => (
              <div
                className="bg-gray-900 card hover:relative bottom-4 w-[400px] h-[400px] m-2 rounded-lg shadow-lg shadow-gray-700"
                key={CardData.id}
              >
                <div className="top">
                  <img
                    className="w-full h-[200px] object-cover  p-2"
                    src={CardData.img}
                    alt="img"
                  />
                </div>
                <div className="px-7 bottom flex flex-col justify-center items-start p-3">
                  <div className="title font-semibold text-gray-300 text-lg my-1">
                    {CardData.title}
                  </div>
                  <div className="my-2">
                    <button className="px-3 py-1 text-sm text-white bg-red-600 hover:bg-red-800 rounded-lg mr-1 ">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousalbt;
