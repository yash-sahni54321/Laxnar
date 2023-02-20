import React, { useState } from 'react'
import { useHistory } from 'react-router';


const ProductCard = (product) => {

    const history = useHistory();

    const productDetailPage = () => {

        history.push({
            pathname: '/productdetail',
            state: {
                productId: product.currentProduct.id,
                productName: product.currentProduct.ProductName,
                productImage: product.currentProduct.productImg,
            }
        }
        );
    }

    return (
        <div onClick={productDetailPage} className="flex flex-col justify-center items-center  p-5 border hover:drop-shadow-xl bg-white">
            <div className="items-center h-3/4 flex justify-center">
                <img className="h-3/4" src={product.currentProduct.productImg} alt="Product Image"></img>
            </div>

            <div className="px-3 py-3 font-bold flex justify-center items-center text-gray-400">
                {product.currentProduct.ProductName}
            </div>
            <span className="max-sm:flex w-max max-sm:justify-center px-3 py-3 font-bold flex justify-center items-center text-sm bg-orange-600 hover:bg-orange-700 text-white hover:cursor-pointer">
                Place Order Call
            </span>
        </div>
    )
}

export default ProductCard