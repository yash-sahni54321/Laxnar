import React from "react";
import TabCard from "./TabCard";

const TabBody = ({ ProductDetails = {} }) => {
  return (
    <>
      <div>
        {ProductDetails.map((detail) => (
          <div className="grid grid-cols-2 gap-x-2 p-10 gap-y-0.5 max-sm:grid-cols-1">
            {Object.keys(detail).map((key) => (
              <TabCard key_={key} value={detail[key]} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabBody;
