import React, { useRef } from "react";

function Skills() {
  const skillsRef = useRef(null);

  return (
    <section className="skills" ref={skillsRef} id="skills">
      <p className="primary-title skill-title">Current skill set</p>
      <div className="skillset">
        <p>
          <span className="skill-head">Programming Languages &gt; </span>
          <span className="skill-info">
            Java, JavaScript, Python, C/C++, HTML/CSS
          </span>
        </p>
        <p>
          <span className="skill-head">Technologies &gt; </span>
          <span className="skill-info">
            Spring Boot, Spring Security, Docker, React, Redux, Data Structures,
            Algorithms
          </span>
        </p>
        <p>
          <span className="skill-head">CSS Frameworks &gt; </span>
          <span className="skill-info">Tailwind CSS, Material UI, SASS</span>
        </p>
        <p>
          <span className="skill-head">Databases &gt; </span>
          <span className="skill-info">MySQL, PostgreSQL</span>
        </p>
        <p>
          <span className="skill-head">Tools &gt; </span>
          <span className="skill-info">IntelliJ IDEA, Git, VS Code, NPM</span>
        </p>
      </div>
    </section>
  );
}

export default Skills;
