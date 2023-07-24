import React from "react";
import Project from "../../core/Project";
import Navigation from "../../Navigation";
import { Reactpagetabs } from "../../../common/common";
import Notepro from "../../../images/notepro.png";
import Expenseapp from "../../../images/expenseapp.png";

function Reactprojects() {
  return (
    <div className="Reactprojects">
      <Navigation tablist={Reactpagetabs} />
      <p className="primary-title react-projects">React Projects</p>
      <div className="projects-wrap">
        <Project
          title="Expense App v2.0"
          desc="Developed a React web application using with Redux, serving a Firebase with React as the frontend.
               Implemented Real-Time Data Sorting and Filtering for Enhanced User Experience. 
               Effectively Visualized Data on Dashboard using React charts"
          image={Expenseapp}
          live="https://aiexpense.netlify.app/"
          github="https://github.com/kumarmanglam/expenseapp"
        />
        <Project
          title="NotePro v2.0"
          desc="It is a note-taking app built with HTML, CSS, JavaScript, React
              and Redux. The UI design is inspired by Google Keep, offering
              features for note creation, editing, archiving, and deletion. The
              project includes modular and production level code and file
              structure."
          image={Notepro}
          v="https://budgettrackerappbymanglam.netlify.app/"
          live="https://noteprov2.netlify.app/"
          github="https://github.com/kumarmanglam/NotePro2.0"
        />
      </div>
    </div>
  );
}

export default Reactprojects;
