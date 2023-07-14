import React from "react";
import Navigation from "../../Navigation";
import Hero from "../../Hero";
import Projects from "../../Projects";
import Skills from "../../Skills";
import Contact from "../../Contact";
import About from "../../About";
import { Homepagetabs } from "../../../common/common";
import Footermobile from "../../Footermobile";

function Homepage() {
  const date = new Date().getFullYear();
  return (
    <div>
      <Navigation tablist={Homepagetabs} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footermobile />
    </div>
  );
}

export default Homepage;
