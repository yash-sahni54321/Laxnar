import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { BsPerson, BsFacebook, BsBuilding } from "react-icons/bs";

const CounterUpPage = () => {
  const [CounterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
      onExit={() => {
        setCounterOn(false);
      }}
    >
      <div className="max-h-max bg-gradient-to-r from-cyan-700 to-violet-400">
        <h1 className="text-3xl w-auto font-bold py-5 text-white text-center">
          Our Achievements
        </h1>
        <div className="w-full text-white p-20 rounded-none space-y-3 flex max-sm:flex-col justify-evenly align-middle">
          <div>
            <h1 className="flex justify-center align-middle mb-3 p-2">
              <BsBuilding size={50} color={"white"} />
            </h1>
            <h1 className="text-center text-orange-400 text-2xl sm:text-5xl font-bold ">
              {CounterOn && (
                <CountUp start={0} end={3} duration={2} delay={0} />
              )}
              +
            </h1>
            <h1 className="text-center">{"Branches"}</h1>
          </div>
          <div>
            <h1 className="flex justify-center align-middle mb-3">
              <BsPerson size={50} color={"white"} />
            </h1>
            <h1 className="text-center text-orange-400 text-2xl sm:text-5xl font-bold ">
              {CounterOn && (
                <CountUp start={0} end={10} duration={2} delay={0} />
              )}
              +
            </h1>
            <h1 className="text-center">{" Members"}</h1>
          </div>
          <div>
            <h1 className="flex justify-center align-middle mb-3">
              <BsFacebook size={50} color={"white"} />
            </h1>
            <h1 className="text-center text-orange-400 text-2xl sm:text-5xl font-bold ">
              {CounterOn && (
                <CountUp start={0} end={200} duration={2} delay={0} />
              )}
              +
            </h1>
            <h1 className="text-center">{"Customers"}</h1>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
