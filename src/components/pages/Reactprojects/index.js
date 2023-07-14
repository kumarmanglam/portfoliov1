import React from "react";
import Project from "../../core/Project";
import Navigation from "../../Navigation";
import { Reactpagetabs } from "../../../common/common";
import Notepro from "../../../images/notepro.png";

function Reactprojects() {
  return (
    <div className="Reactprojects">
      <Navigation tablist={Reactpagetabs} />
      <p className="primary-title react-projects">React Projects</p>
      <div className="projects-wrap">
        <Project
          title="NotePro v2.0"
          desc="It is a note-taking app built with HTML, CSS, JavaScript, React
              and Redux. The UI design is inspired by Google Keep, offering
              features for note creation, editing, archiving, and deletion. The
              project includes modular and production level code and file
              structure."
          image={Notepro}
          live="https://budgettrackerappbymanglam.netlify.app/"
        />
      </div>
    </div>
  );
}

export default Reactprojects;
