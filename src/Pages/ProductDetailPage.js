import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import glowImage from "../Images/glow.png";
import skyBlueBlur from "../Images/skyBlueBlur.png";
import { useParams } from "react-router-dom";
import TabView from "../Components/ProductsDetailTab/TabView";

const ProductDetailPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = () => {
    setIsLoading(false);
    fetch(`http://localhost:3000/Products/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
        setIsLoading(true);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(id);

  const openGetCallPage = () => {
    history.push("/getcall");
  };

  console.log(product);

  if (!isLoading) return <div>loading</div>;

  const productTabs = {
    tabs_: [
      {
        name: "General Features",
        ProductDetails: [
          {
            "Number of Stops": "8 Stops",
            "Control Type": "Simple Control",
            "Drive Type": "Single Speed / Double Speed",
            "Serial Communication": "None",
            "Elevator Speed (Maximum)": "1 m/s",
            "Cabin Position Information": "Magnetic Switch",
            "Automatic Door Control": "Single Door",
            "Door Bridging": "None",
          },
        ],
      },

      {
        name: "Technical Features",
        ProductDetails: [
          {
            deail1: "Detail2",
          },
        ],
      },

      {
        name: "Functions",
        ProductDetails: [
          {
            deail1: "Detail3",
          },
        ],
      },

      {
        name: "Downloadable Content",
        ProductDetails: [
          {
            deail1: "Detail3",
          },
        ],
      },
    ],
  };

  return (
    <div>
      {/* <div>
        {location.pathname}
      </div> */}

      <div className="h-screen relative w-full bg-sky-50">
        <div className="flex justify-between h-screen w-full absolute">
          <img
            className="h-full hidden md:block"
            src="https://arkel.b-cdn.net/Content/Images/bg-03.png"
            alt=""
          ></img>
          <img
            className="h-full hidden md:block"
            src="https://arkel.b-cdn.net/Content/Images/bg-02.png"
            alt=""
          ></img>
        </div>
        <div className="flex max-sm:flex-col-reverse max-sm:w-1/2 justify-around absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="relative max-sm:w-full h-full w-1/2 ">
            <img
              className="-z-10 w-full max-lg:hidden animate-pulse-slow block absolute max-sm:top-0 -top-1/2 left-1/3 max-sm:left-1/2 -translate-x-1/2 object-cover"
              src={skyBlueBlur}
              alt=""
            ></img>
            <img src={product.productImg} alt={product.ProductName}></img>
          </div>

          <div className="flex-col w-1/3 max-sm:w-full max-sm:justify-center">
            <div className="text-sky-600 font-bold text-5xl max-sm:w-full max-sm:text-center">
              {product.ProductName}
            </div>
            <div className="font-semibold text-xl mt-4 mb-8 text-gray-700 max-sm:w-full max-sm:text-center">
              Monoblock Lift Control Unit
            </div>
            <div className="mb-6 max-sm:w-full max-sm:text-center">
              New Era in Lift Control
            </div>
            <div className="max-sm:flex max-sm:justify-center max-sm:mb-8">
              <span
                onClick={openGetCallPage}
                className="max-sm:flex w-max max-sm:justify-center px-3 py-3 font-bold flex justify-center items-center text-sm bg-orange-600 hover:bg-orange-700 text-white hover:cursor-pointer"
              >
                Place Order Call
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-40 bg-gradient-to-r from-cyan-700 to-violet-400"></div>
      <TabView title="title1" tabs={productTabs.tabs_} />
    </div>
  );
};

export default ProductDetailPage;
