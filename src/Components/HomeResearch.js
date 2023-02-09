import React from 'react'
import Research from '../Images/Research.png'

const HomeResearch = () => {
    return (
        <div className='flex-col sm:flex-row items-center inline-flex p-5 my-10'>
            <div className='flex-1'>
                <div className='mb-5'>
                    <h1 className='text-5xl text-blue-400'>
                        Research and Development
                    </h1>
                </div>
                <div>
                    <p>
                        Laxnar is focused on accomplishing perfect results with its expertise and vast technical knowledge. Therefore, all Laxnar products are developed by expert Indian engineers and produced in Laxnar facilities.

                        Laxnar does not compromise on quality during the production phase and prefers the finest quality starting right from the designing phase.
                    </p>
                </div>
            </div>
            <div className='flex-1'>
              <img src={Research}
                alt="Research"
                className='rounded-full'
              />
            </div>
        </div>
    )
}

export default HomeResearch