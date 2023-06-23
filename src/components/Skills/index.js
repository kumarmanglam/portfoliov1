import React, { useRef } from "react";
import Text from "../core/Text";

function Skills() {
  const skillsRef = useRef(null);

  return (
    <section className="skills" ref={skillsRef}>
      <div className="skills-head">
        <Text label="Skills" size="large" />
      </div>
      <div className="skills-type">
        <Text label="Development" size="medium" />
      </div>
      <div className="skill-stack">
        <Text label="Front-end Development" size="small" />
        <Text label="HTML5" size="small" />
        <Text label="CSS3" size="small" />
        <Text label="Javascript" size="small" />
        <Text label="React.js" size="small" />
        <Text label="Tailwind" size="small" />
        <Text label="Sass" size="small" />
      </div>
      <div className="skills-type">
        <Text label="Tools" size="medium" />
      </div>
      <div className="skill-stack">
        <Text label="Visual Studio Code" size="small" />
        <Text label="Github" size="small" />
        <Text label="Figma" size="small" />
      </div>
    </section>
  );
}

export default Skills;
