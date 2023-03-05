import React from 'react'

const AboutImage = () => {
  return (
    <div className='relative'>
        <img src={require('../Images/123.png')} className=" w-full h-full  bg-center bg-cover col-start-1 row-start-1 self-center opacity-80"/>
        <div className='absolute top-5 w-full  text-center'>
          <h1 className='text-3xl text-black'> Who We Are</h1>
          <h3 className='text-xl text-black'>We are believers of change! A change driven by technology and innovation.</h3>
        </div>
        <div className='absolute bottom-10 w-full flex'>
            <div>
              <h1 className='text-5xl text-orange-500'>
                150+
              </h1>
              <h3 className=''>

              </h3>
            </div>
            <div>
              <h1 className='text-5xl text-orange-500 '>
                20+
              </h1>
              <h3 className=''>

              </h3>
            </div>
            <div>
              <h1 className='text-5xl text-orange-500 '>
                10+
              </h1>
              <h3 className=''>

              </h3>
            </div>
        </div>
    </div>
  )
}

export default AboutImage