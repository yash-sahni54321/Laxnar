import React from "react";
import Research from "../Images/Research.png";
import Fade from "react-reveal/Fade";

const HomeResearch = () => {
  return (
    <div className=" bg-gray-700 flex-col items-center justify-center inline-flex px-5 py-10 border-t border-t-gray-600 w-full h-4/5">
      <Fade bottom>
        <div className="flex-1 mb-5 px-3 flex flex-col items-center justify-center w-full h-full">
          <div className=" flex flex-col items-center border rounded-lg shadow md:flex-row w-2/3 max-sm:w-72 border-gray-700  bg-gray-900 ">
            <img
              class="object-cover p-6 w-full rounded-t-lg h-96 md:max-h-full max-w-xl md:rounded-none md:rounded-l-lg"
              src={Research}
              alt="Research JPG"
            />
            <div class="flex flex-col p-6  h-full  leading-normal">
              <h5 class=" text-2xl mb-10 font-bold tracking-tight text-gray-50 dark:text-white">
                Research and Development
              </h5>
              <p class="mb-3 text-lg font-normal text-gray-400 dark:text-gray-400">
                Laxnar is focused on accomplishing perfect results with its
                expertise and vast technical knowledge. Therefore, all Laxnar
                products are developed by expert Indian engineers and produced
                in Laxnar facilities. Laxnar does not compromise on quality
                during the production phase and prefers the finest quality
                starting right from the designing phase.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HomeResearch;
