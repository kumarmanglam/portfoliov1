import React from "react";
import Project from "../../core/Project";
import Navigation from "../../Navigation";
import { Uipagetabs } from "../../../common/common";
import Menu from "../../../images/menu.png";

function Uiprojects() {
  return (
    <div>
      <div className="Reactprojects">
        <Navigation tablist={Uipagetabs} />
        <p className="primary-title react-projects">UI Projects</p>
        <div className="projects-wrap">
          <Project
            title="Food Menu"
            desc="Menu of dish items. Items categorised on the page. Filter feature is implemented."
            image={Menu}
            live="https://kumarmanglam.github.io/Laod-and-Filter-Version-2/"
          />
        </div>
      </div>
    </div>
  );
}

export default Uiprojects;
