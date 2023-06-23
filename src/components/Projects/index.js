import React, { useState } from "react";
import data from "./data.json";
function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isNavActive, setIsNavActive] = useState(0);
  function handleClick(index) {
    setSelectedIndex(index);
    setIsNavActive(index);
  }
  return (
    <section className="project" id="projects">
      <div className="wrapper">
        <div className="project-main-display">
          {data.projects?.map((item, index) => (
            <div
              className={`project-display ${
                index === selectedIndex ? "project-active" : "project-inactive"
              }`}
            >
              <div className="project-main">
                <h2 className="main-heading">{item.name}</h2>
                <p className="project-description">{item.description}</p>
                <div className="project-actions">
                  <a href={item.liveLink} target="_blank" className="anchor">
                    View Site
                  </a>
                  <a href={item.githubLink} target="_blank" className="anchor">
                    Github
                  </a>
                </div>
                <div className="line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="project-Nav">
          <p className="project-heading">Projects</p>
          <div className="project-list">
            <div className="list-child">
              {data.projects?.map((item, index) => (
                <a
                  target="_blank"
                  className={`project-link ${
                    index === isNavActive ? "navActive" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
