import React, { useEffect } from "react";
import GetcallForm from "../Components/GetcallForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const GetCallPage = () => {
  const { name } = useParams();
  useEffect(()=>{
    console.log(name);
  }, [])

  return (
    <>
      <div className="max-sm:px-5 w-full p-4 mt-16">
        <div className=" w-full justify-center space-y-2">
          <div className=" w-full text-xl sm:text:5xl text-center">
            Place order call
          </div>
          <div className=" mx-auto leading-relaxed text-center text-base">
            You can create orders by filling related forms and let our sales
            team reach out to you.
          </div>
        </div>
      </div>
      <GetcallForm productName={name}/>
    </>
  );
};

export default GetCallPage;
