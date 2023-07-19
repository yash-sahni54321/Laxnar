import React, { useState } from "react";
import { useHistory } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm p-6  border  rounded-lg shadow bg-gray-100 border-gray-700 hover:shadow-lg">
      {/* <div className="items-center h-3/4 flex justify-center">
                <img className="object-contain" src={product.productImg} alt="Product Image"></img>
            </div> */}

      <div className="items-center h-3/4 flex justify-center">
        <img
          className="h-3/4 object-contain"
          src={product.image[0]}
          alt="Product Image"
        ></img>
      </div>

      <div className="px-3 py-3 font-bold flex justify-center items-center text-gray-900">
        {product.name}
      </div>
      <span className="flex-wrap max-sm:flex w-max max-sm:justify-center px-3 py-3 font-bold flex justify-center items-center text-sm  bg-red-600 hover:bg-red-800 rounded-lg text-white hover:cursor-pointer">
        Place Order Call
      </span>
    </div>
  );
};

export default ProductCard;
