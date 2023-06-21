import React from "react";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="tabcontent">{children}</div> : null;
};

export default TabContent;
