import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=" max-w-7xl mx-auto md:px-10 bg-gray-50">
      <div className="">
        <div className="flex justify-center md:justify-start ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'bg-white text-gray-800'
                  : 'bg-gray-200 text-gray-600'
              } py-2 px-4 rounded-l ${
                tab.id === tabs.length ? 'rounded-r' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4 bg-white p-4 rounded-b">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? '' : 'hidden'}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
