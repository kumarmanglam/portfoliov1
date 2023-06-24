import React, { useRef, useState } from "react";

function Navigation() {
  const slash = "// ";
  const [isTabActive, setIsTabActive] = useState(0);
  const data = {
    tabs: [
      {
        id: 0,
        name: "about",
        tabId: "#about",
      },
      {
        id: 1,
        name: "projects",
        tabId: "#projects",
      },
      {
        id: 2,
        name: "contact me",
        tabId: "#contactMe",
      },
    ],
  };
  function handleTabClick(id) {
    setIsTabActive(id);
  }
  return (
    <div className="navigation">
      <div className="nav-logo">
        <a href="#about" className="anchor km">
          K.M
        </a>
      </div>
      <div className="tabs">
        {data.tabs.map((item, index) => (
          <a
            href={`${item.tabId}`}
            className={`tab-link ${isTabActive === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {slash}
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
