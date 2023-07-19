import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import glowImage from "../Images/glow.png";
import skyBlueBlur from "../Images/skyBlueBlur.png";
import { useParams } from "react-router-dom";
import TabView from "../Components/ProductsDetailTab/TabView";
import ParticlesComponent from "../Components/Particles";
import axios from "axios";

const ProductDetailPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [sigleProduct ,setSingleProduct] = useState({});

     const fetchProducts =  () => {
        fetch(`https://laxnar-lko.onrender.com/api/product/get-product/${id}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          
          console.log(data)

          setSingleProduct(data.data[0]);
          
          
        }).catch((err)=> console.log(err))
     }

    useEffect(() => {
      fetchProducts();
    }, []);

  const openGetCallPage = () => {
    history.push("/getcall");
  };

  


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
        name: "Applications",
        ProductApplications: [
          {
            "apllication 1":
              "	Single Board Card with Micro Controller with 40 ",
            "apllication 2":
              "	Nos. Discrete Inputs And 40 Nos. Discrete Outputs",
            "apllication 3":
              "	No. of Stops: Up To 7 Stops (G+7 Single Collective with ARD Logic) Selection by Jumper.",
            "apllication 4": "	No of Stops: Up To 15 Stops by Expansion Module",
            "apllication 5":
              "	DOOR OPERATION: Manual or Auto Door Selection by Jumper.",
            "apllication 6":
              "	AUTO-DOOR TIMER: 5,10,15, Seconds Selection by Jumpers.",
            "apllication 7":
              "	DISPLAY OUTPUT: G+7, B+G+6, P+7, P+G+6 Selection by Jumpers.",
            "apllication 7":
              "	POWER SUPPLY: 24.8V DC & 5.8V DC With Reverse Bias Protection",
          },
        ],
      },

      {
        name: "Technical Support",
        TechnicalSupport: [
          {
            "support 1":
              "Suitable To VFD For Gear or Gearless Machin & Hydraulic Machine.",
            "support 2": "ARD System Logic for 1-Phase / 2-Phase ARD Backup.",
            "support 3": "3-REED Operation for Floor Management",
            "support 4": "NC Type Interlocks, Safety Limits Inputs.",
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

  // if(isLoading)  return <div>Loading</div>;
  return (
    <div>
      {/* <div>
        {location.pathname}
      </div> */}
      
      < div className="h-screen relative w-full">
        <div className="flex justify-between h-screen w-full absolute bg-sky-50">
          {/* <ParticlesComponent className="" /> */}
          <img
            className="h-full hidden md:block "
            src={sigleProduct.image[0]}
            alt={sigleProduct.name}
          ></img>
          <img
            className="h-full hidden md:block max-lg:hidden"
            src={sigleProduct.image[0]}
            alt={sigleProduct.name}
          ></img>
        </div>
        {console.log(sigleProduct)}
        <div className="flex max-sm:flex-col-reverse max-sm:w-1/2 justify-around absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="relative max-sm:w-full w-1/2 ">
            <img
              className="-z-10 w-full max-lg:hidden animate-pulse-slow block absolute max-sm:top-0 -top-32 left-1/3 max-sm:left-1/2 -translate-x-1/2 object-cover"
              src={skyBlueBlur}
              alt=""
            ></img>
            <img
              className="h-80 absolute top-0 left-1/3 max-sm:left-1/2 -translate-x-1/2 object-cover"
              src=""
              alt="alt"
            ></img>
          </div>

          <div className="flex-col w-1/3 max-sm:w-full max-sm:justify-center">
            <div className="text-sky-600 font-bold text-5xl max-sm:w-full max-sm:text-center">
              {sigleProduct.name}
            </div>
            <div className="font-semibold text-xl mt-4 mb-8 text-gray-700 max-sm:w-full max-sm:text-center">
            {sigleProduct.category}
            </div>
            <div className="mb-6 max-sm:w-full max-sm:text-center">
            {sigleProduct.description}
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
      <div className="h-52 sm:hidden bg-sky-50"></div>
      <div className="h-40 bg-gradient-to-r from-cyan-700 to-violet-400"></div>
      <TabView title="title1" tabs={productTabs.tabs_} />
    </div>
  );
};

export default ProductDetailPage;
