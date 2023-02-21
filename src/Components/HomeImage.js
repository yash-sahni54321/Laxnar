import React from 'react'
import Homeimage from  "../Images/Homeimage.jpg"
export const HomeImage = () => {
  return (
    <div className='flex-col sm:flex-row inline-flex justify-around m-10'>
        <div className='flex-1 '>
            <img src={Homeimage} alt='Image' />
        </div>
        <div className='flex-1 text- p-3 rounded-3xl'>
            <div className='mb-5'>
            <h2 className=' text-blue-500 text-5xl'>About Us</h2>
            </div>
            <p className='mb-5 text-justify'>
            We are Lucknow based elevator control panel manufacture and whole electrical kit supplier. Successfully delivering elevator control panels north India since 2017. Our UPS are our product quality with solution support. We tend to keep our products easy to install and provide higher safety measures in our products. Providing important technical feature like password protected, easy handling, compact size panels, pre-installed parameters, safety measures, on call service, at site service (if required).
            </p>
            <button className='mb-5 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Read More</button>
        </div>
    </div>
  )
}
