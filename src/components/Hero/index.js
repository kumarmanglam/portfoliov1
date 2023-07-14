import React from "react";
import Text from "../core/Text";
import Anchor from "../core/Anchor";
import Icon from "../core/icon";
import memoji from "../../images/MyAvatar.png";

function Hero() {
  return (
    <section className="Hero" id="home">
      <div className="Header-wrap">
        <div className="Hero-header">
          <div className="Bio">
            <div>
              <p className="Bio-title">
                Hi, I'm <span className="kumar">Kumar</span>
              </p>
              <p className="secondary-title ">Frontend developer</p>
              <p className="Bio-description">
                Passionate about cutting edge technologies, pixel perfect,
                beautiful interface.
              </p>
              <a href="#contactMe" className="anchor">
                Contact me <Icon name="Contact" size="large" />
              </a>
            </div>
          </div>
          <div>
            <img src={memoji} className="memoji" />
          </div>
        </div>
        <div>
          <a href="#about" className="scrollDown">
            <Icon name="Mouse" size="large" classes="mouse" />
            <p>Scroll down</p>
            <Icon name="Down" size="medium" classes="down-icon" />
          </a>
        </div>
      </div>
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
