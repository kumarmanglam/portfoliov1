import React from "react";
import Text from "../Text";

function Project({ title, desc, github, live, image }) {
  return (
    <div className="project">
      <div>
        <img src={image} className="project-img" />
      </div>
      <div className="project-info">
        <p className="project-title">{title}</p>
        <Text label={desc} classes="normal project-desc" />
        <div className="project-actions">
          <a href="" className="action">
            v1
          </a>
          <a href={github} className="action">
            Github
          </a>
          <a href={live} className="action">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
