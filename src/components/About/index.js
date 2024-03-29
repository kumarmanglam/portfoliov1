import React from "react";
import manglam from "../../images/manglam.jpg";
import Text from "../core/Text";
import ResumePDF from "../../assets/documents/Kumar_Resume.pdf";
import Icon from "../core/icon";
function About() {
  return (
    <div className="Aboutme" id="about">
      <h1 className="primary-title">About me</h1>
      <p className="secondary-title about-second">My introduction</p>
      <div className="aboutme">
        <div className="About-image">
          <img src={manglam} className="manglam-img" />
        </div>
        <div className="about-bio">
          <Text
            label="With over 2 years of experience in web application 
            development, I served as a team leader at the college Wave 
            Developers Society. I specialize in Java and Spring Boot for backend development, 
            complemented by expertise in frontends with React.js"
            classes="normal about-biotext"
          />
          <div className="stats">
            <div>
              <p className="stat-head">02+</p>
              <p className="stat-label">Years experience</p>
            </div>
            <div>
              <p className="stat-head">03+</p>
              <p className="stat-label">Frontend Projects</p>
            </div>
            <div>
              <p className="stat-head">02+</p>
              <p className="stat-label">Backend Projects</p>
            </div>
          </div>
          <a
            href={ResumePDF}
            download="Kumar_Manglam_Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor cvanchor"
          >
            Download CV{" "}
            <Icon name="Download" size="large" classes="downloadIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

// label="As a self-learner, I thrive in challenging environments, finding
// motivation in overcoming obstacles. I enjoy both collaborative work
// and spearheading independent projects."
