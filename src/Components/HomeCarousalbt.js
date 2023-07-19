import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
export const HomeCarousalbt = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    fetch("https://laxnar-lko.onrender.com/api/product/get-products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
        console.log(result.data);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchProducts();
  });

  const openProduct = (e, productId) => {
    e.preventDefault();
  };

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
      myRef.current.scrollLeft -= 1000;
    }
    // document.getElementById("content").scrollLeft -= 800;
  };
  const scrollRight = () => {
    if (myRef.current != null) {
      myRef.current.scrollLeft += 1000;
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
        <div className="">
          <div className="flex-row inline-flex">
            {isLoading ? (
              <div className="mx-auto h-full w-full items-center flex justify-center align-middle ">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-8 h-8 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
            ) : (
              products.map((product, ind) => (
                <Fade bottom>
                  <Link key={product._id} to={`/productdetails/${product._id}`}>
                    <div
                      className="bg-gray-50 card hover:shadow-2xl bottom-4 w-[400px] h-[400px] m-2 rounded-lg shadow-lg shadow-gray-700"
                      key={ind}
                    >
                      <div className="top">
                        <img
                          className="w-full h-[200px] object-cover  p-2"
                          src={product.image[0]}
                          alt="img"
                        />
                      </div>
                      <div className="px-7 bottom flex flex-col justify-center items-start p-3">
                        <div className="title font-semibold text-gray-900 text-lg my-1">
                          {product.name}
                        </div>
                        <div className="my-2">
                          <button className="px-3 py-1 text-sm text-white bg-red-600 hover:bg-red-800 rounded-lg mr-1 ">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Fade>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousalbt;
