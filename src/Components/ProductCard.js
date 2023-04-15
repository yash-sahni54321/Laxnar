import React, { useState } from 'react'
import { useHistory } from 'react-router';


const ProductCard = ({ product }) => {

    return (
        <div className="h-80 flex flex-col justify-center items-center  p-5 border hover:drop-shadow-xl bg-white">
            {/* <div className="items-center h-3/4 flex justify-center">
                <img className="object-contain" src={product.productImg} alt="Product Image"></img>
            </div> */}

            <div className="items-center h-3/4 flex justify-center">
                <img className="h-3/4 object-contain" src={product.image[0]} alt="Product Image"></img>
            </div>

            <div className="px-3 py-3 font-bold flex justify-center items-center text-gray-400">
                {product.name}
            </div>
            <span className="flex-wrap max-sm:flex w-max max-sm:justify-center px-3 py-3 font-bold flex justify-center items-center text-sm bg-orange-600 hover:bg-orange-700 text-white hover:cursor-pointer">
                Place Order Call
            </span>
        </div>
    )
}

export default ProductCard