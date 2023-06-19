import React from "react";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="TabContent"><p>{children}</p></div> : null;
};

export default TabContent;
