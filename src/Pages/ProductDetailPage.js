import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'

const ProductDetailPage = () => {

  const location = useLocation();
  const history = useHistory();

  const openGetCallPage = () =>{
    history.push('/getcall');
  }

  return (
    <div>

      {/* <div>
        {location.pathname}
      </div> */}

      <div className='h-screen relative w-full bg-sky-50'>
        <div className='flex justify-between h-screen w-full absolute'>
          <img className='h-full hidden md:block' src='https://arkel.b-cdn.net/Content/Images/bg-03.png' alt=''></img>
          <img className='h-full hidden md:block' src='https://arkel.b-cdn.net/Content/Images/bg-02.png' alt=''></img>
        </div>
        <div className='flex max-sm:flex-col-reverse max-sm:w-1/2 justify-around absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img src={location.state.productImage} alt={location.state.productName}></img>
          <div className='flex-col w-1/3 max-sm:w-full max-sm:justify-center'>
            <div className='text-sky-600 font-bold text-5xl max-sm:w-full max-sm:text-center'>{location.state.productName}</div>
            <div className='font-semibold text-xl mt-4 mb-8 text-gray-700 max-sm:w-full max-sm:text-center'>Monoblock Lift Control Unit</div>
            <div className='mb-6 max-sm:w-full max-sm:text-center'>New Era in Lift Control</div>
            <div className='max-sm:flex max-sm:justify-center max-sm:mb-8'>
              <span onClick={openGetCallPage} className="max-sm:flex w-max max-sm:justify-center px-3 py-3 font-bold flex justify-center items-center text-sm bg-orange-600 hover:bg-orange-700 text-white hover:cursor-pointer">
                Place Order Call
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=' h-40 bg-gradient-to-r from-cyan-700 to-violet-400'>

      </div>

    </div>
  )
}

export default ProductDetailPage