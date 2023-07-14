import React from "react";
import { Vanillapagetabs } from "../../../common/common";
import Notepro from "../../../images/notepro.png";
import Navigation from "../../Navigation";
import Project from "../../core/Project";
import Budget from "../../../images/budget.png";
import Todo from "../../../images/todo.png";
import Joke from "../../../images/joke.png";

function Vanillaprojects() {
  return (
    <div>
      <div className="Reactprojects">
        <Navigation tablist={Vanillapagetabs} />
        <p className="primary-title react-projects">Vanilla JS Projects</p>
        <div className="projects-wrap">
          <Project
            title="Budget Tracker v1"
            desc="BudgetTracker is an application which helps track expenses and earnings, built with HTML, CSS, and vanilla JavaScript."
            image={Budget}
            live="https://budgettrackerappbymanglam.netlify.app/"
          />
          <Project
            title="Todo List"
            desc="To do list App with CRUD operations and Drag and drop functionality."
            image={Todo}
            live="https://todoappbymanglam.netlify.app/"
          />
          <Project
            title="Random Joke Generator"
            desc="Developed an interactive application using API integration in JavaScript, providing users with a fun experience of generating random jokes and speaking them aloud upon clicking."
            image={Joke}
            live="https://jokeappbymanglam.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}

export default Vanillaprojects;
