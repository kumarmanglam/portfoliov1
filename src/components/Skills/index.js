import React, { useRef } from "react";
import Text from "../core/Text";

function Skills() {
  const skillsRef = useRef(null);

  return (
    <section className="skills" ref={skillsRef} id="skills">
      <p className="primary-title skill-title">Current skill set</p>
      <div className="skillset">
        <p>
          <span className="skill-head">Language &gt; </span>
          <span className="skill-info">
            HTML/CSS, JAVASCRIPT, SASS, PYTHON, C/C++
          </span>
        </p>
        <p>
          <span className="skill-head">Library &gt; </span>
          <span className="skill-info">REACT, REDUX, ROUTER</span>
        </p>
        <p>
          <span className="skill-head">CSS Framework &gt; </span>
          <span className="skill-info">Tailwind CSS, MATERIAL UI, SASS</span>
        </p>
        <p>
          <span className="skill-head">Database &gt; </span>
          <span className="skill-info">SQL</span>
        </p>
        <p>
          <span className="skill-head">Tools &gt; </span>
          <span className="skill-info">GIT, VS-CODE, NPM, YARN</span>
        </p>
      </div>
    </section>
  );
}

export default Skills;
