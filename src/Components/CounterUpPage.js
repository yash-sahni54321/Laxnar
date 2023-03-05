import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUpPage = () => {
    const [CounterOn,setCounterOn]=useState(false);
  return (
    <ScrollTrigger onEnter={()=>{ setCounterOn(true)}} onExit={()=>{setCounterOn(false)}}>
        <div className='w-full bg-black text-white flex justify-evenly items-center'>
      <div>
        <h1> Customers{ CounterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}+</h1>
      </div>
      <div>
      <h1> Customers{ CounterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}+</h1>
      </div>
      <div>
      <h1> Customers{ CounterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}+</h1>
      </div>
      <div>

      </div>
    </div>
    </ScrollTrigger>
    
  )
}

export default CounterUpPage
