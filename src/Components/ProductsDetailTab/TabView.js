import React from "react";
import { useState } from "react";
import TabBody from "./TabBody";

const TabView = ({ title, tabs = {} }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = (index) => {
    setActiveTabIndex(index);
  };
  return (
    <div className="TabView px-11 -m-10 flex w-full mb-10">
      {/* {title && <h4 className="title">{title}</h4>} */}

      <div className="body w-full flex items-center justify-center">
        {Object.keys(tabs).length === 0 ? (
          <div>NO TABS </div>
        ) : (
          <div className="flex-col w-4/5">
            <div className="flex tabs w-full">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={
                    index === activeTabIndex
                      ? "active-tab py-4 bg-white px-6 h-15 w-4/5 border-t-4 border-orange-600 font-semibold text-sm text-center"
                      : "tab py-4 px-6 h-15 w-4/5 bg-blue-600 text-white text-sm text-center font-semibold"
                  }
                  onClick={() => activeTab(index)}
                >
                  {tab.name}
                </div>
              ))}
            </div>

            <div className="content">
              <TabBody ProductDetails={tabs[activeTabIndex].ProductDetails} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabView;
