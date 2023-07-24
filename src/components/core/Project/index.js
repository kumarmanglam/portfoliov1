import React from "react";
import Text from "../Text";

function Project({ title, desc, github, live, image, v }) {
  return (
    <div className="project">
      <div>
        <img src={image} className="project-img" />
      </div>
      <div className="project-info">
        <p className="project-title">{title}</p>
        <Text label={desc} classes="normal project-desc" />
        <div className="project-actions">
          {console.log(v)}
          {v && (
            <a
              href={v}
              className="action"
              target="_blank"
              rel="noopener noreferrer"
            >
              version-1
            </a>
          )}
          <a
            href={github}
            className="action"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href={live}
            className="action"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
