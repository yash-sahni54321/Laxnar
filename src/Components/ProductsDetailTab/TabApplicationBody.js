import React from "react";

const TabApplicationBody = ({ Applications = {} }) => {
  return (
    <div>
      {Applications.map((application) => (
        <div className="grid grid-cols-1 gap-x-2 p-10 gap-y-0.5 max-sm:grid-cols-1">
          {Object.keys(application).map((key) => (
            <div className="detail-card flex">
              <div className="w-full py-5 px-4 font-semibold text-white bg-gray-100">
                • {application[key]}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TabApplicationBody;
