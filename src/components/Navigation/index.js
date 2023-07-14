import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
function Navigation({ tablist }) {
  const [isTabActive, setIsTabActive] = useState(0);

  function handleTabClick(id) {
    setIsTabActive(id);
  }

  return (
    <div className="navigation">
      <div className="nav-logo">
        <a href="#home" className="anchor-head km">
          K.M.
        </a>
      </div>
      <div className="tabs">
        {tablist.tabs.map((item, index) => (
          <a
            href={`${item.tabId}`}
            className={`tab-link ${isTabActive === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
