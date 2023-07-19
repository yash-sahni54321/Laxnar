import React from "react";

const TabCard = ({ key_, value }) => {
  return (
    <>
      <div className="detail-card flex">
        <div className="w-1/2 py-5 px-4 bg-red-500 text-white font-semibold">
          {key_}
        </div>
        <div className="w-1/2 py-5 px-4 font-semibold text-white bg-gray-100">
          {value}
        </div>
      </div>
    </>
  );
};

export default TabCard;
