import React, { useState } from "react";
import Notepro from "../../images/notepro.png";
import Icon from "../core/icon";
import Project from "../core/Project";
import { Link } from "react-router-dom";
function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="latest-project">
        <p className="primary-title">Latest Project</p>
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
      <div>
        <p className="primary-title">Portfolio</p>
        <p className="secondary-title portofio-second">
          Projects are divided by thier categories
        </p>
        <div className="cards">
          <Link to="Vanillaprojects" className="link">
            <div className="card">
              <div className="card-head">
                <p className="card-title">Vanilla JS projects</p>
                <Icon name="Direct" size="large" />
              </div>
              <p className="card-bio">
                Vanilla js, es6 features, module architecture, file input, drag
                and drop api, single page application are feature that these
                projects demonstrate
              </p>
            </div>
          </Link>
          <Link to="UIprojects" className="link">
            <div className="card">
              <div className="card-head">
                <p className="card-title">UI projects</p>
                <Icon name="Direct" size="large" />
              </div>
              <p className="card-bio">
                Improved front-end coding skills by building real html, css and
                javascript challenges whilst working with professional designs.
              </p>
            </div>
          </Link>
          <Link to="ReactProjects" className="link">
            <div className="card">
              <div className="card-head">
                <p className="card-title">ReactJS projects</p>
                <Icon name="Direct" size="large" classes="card-direct" />
              </div>
              <p className="card-bio">
                These are some more advanced projects made using react, react
                hooks, react redux tailwind css, scss and react router.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
