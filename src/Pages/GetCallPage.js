import React from "react";
import GetcallForm from "../Components/GetcallForm";

const GetCallPage = () => {
  return (
    <>
      <div className="w-full p-4">
        <div className="w-full justify-center space-y-2">
          <div className="w-full text-xl sm:text:5xl text-center">
            Place order call
          </div>
          <div className="lg:w-2/3 mx-auto leading-relaxed text-center text-base">
            You can create orders by filling related forms and let our sales
            team reach out to you.
          </div>
        </div>
      </div>
      <GetcallForm />
    </>
  );
};

export default GetCallPage;
