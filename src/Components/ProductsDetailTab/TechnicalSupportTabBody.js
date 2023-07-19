import React from "react";

const TechnicalSupportTabBody = ({ TechnicalSupports = {} }) => {
  return (
    <div>
      {TechnicalSupports.map((currentSupport) => (
        <div className="grid grid-cols-1 gap-x-2 p-10 gap-y-0.5 max-sm:grid-cols-1">
          {Object.keys(currentSupport).map((key) => (
            <div className="detail-card flex">
              <div className="w-full py-5 px-4 font-semibold text-white bg-gray-100">
                • {currentSupport[key]}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechnicalSupportTabBody;
