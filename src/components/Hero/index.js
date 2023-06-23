import React from "react";
import Text from "../core/Text";
import Anchor from "../core/Anchor";
import Icon from "../core/icon";
import ResumePDF from "../../assets/documents/Kumar_Resume.pdf";
import img from "../../images/carbonn.png";
import imgCss from "../../images/cardbon-2.png";
import memoji from "../../images/MyAvatar.png";
function Hero() {
  return (
    <section className="Hero" id="about">
      <div className="Bio">
        {/* <Icon name="Hand" size="large" classes="hand" /> */}
        <img src={memoji} className="memoji" />
        <div className="intro">
          <p className="intro-bio">
            My name is <span className="kumar">Kumar Manglam</span>, Frontend
            Developer and Programmer based in New Delhi, India
          </p>
        </div>
        <div>
          <p className="intro-desc2">
            I am passional about cutting edge technologies, pixel perfect,
            beautiful interface.
          </p>
        </div>
        <div className="anchors">
          <a
            href={ResumePDF}
            download="Kumara_Manglam_Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            Get CV
          </a>
          <Anchor label="Github" link="https://github.com/kumarmanglam" />
          <Anchor label="twitter" />
        </div>
      </div>
      {/* <div className="Hero-wrapper">
        <div
          className="wrap-code top"
          style={{
            transform: "translateY(-30%)",
            zIndex: 1,
            filter: "blur(0.8px)",
          }}
        >
          <img src={imgCss} />
        </div>
        <div
          className="wrap-code between"
          style={{ zIndex: 10, boxShadow: "0px 0px 5px rgba(0,0,0,0.07)" }}
        >
          <img src={img} />
        </div>
        <div
          className="wrap-code bottom"
          style={{
            transform: "translateY(30%)",
            zIndex: 1,
            filter: "blur(0.8px)",
          }}
        >
          <img src={imgCss} />
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
// @keyframes betweenAni {
//   0% {
//     top: 60px;
//   }
//   50% {
//     top: 0;
//   }
//   100% {
//     top: -60px;
//   }
// }
