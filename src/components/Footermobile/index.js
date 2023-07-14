import React, { useState } from "react";
import Text from "../core/Text";
import Icon from "../core/icon";
import Navbtn from "../core/Navbtn";

function Footermobile() {
  const [gridActive, setGridActive] = useState(false);
  return (
    <div className="Footermobile">
      {gridActive ? (
        <div>
          <div className="footer-grid">
            <Navbtn
              label="Home"
              iconLabel="Home"
              path="#home"
              handleClick={() => setGridActive(false)}
            />
            <Navbtn
              label="About"
              iconLabel="Person"
              path="#about"
              handleClick={() => setGridActive(false)}
            />
            <Navbtn
              label="Skills"
              iconLabel="Document"
              path="#skills"
              handleClick={() => setGridActive(false)}
            />
            <Navbtn
              label="Projects"
              iconLabel="Photo"
              path="#projects"
              handleClick={() => setGridActive(false)}
            />
            <Navbtn
              label="Contact me"
              iconLabel="Contact"
              path="#contactMe"
              handleClick={() => setGridActive(false)}
            />
          </div>
          <div onClick={() => setGridActive(false)} className="close-sec">
            <Icon name="Close" size="medium" />
          </div>
        </div>
      ) : (
        <div className="foot">
          <Text label="Kumar Manglam" size="small" />
          <button className="grid-btn" onClick={() => setGridActive(true)}>
            <Icon name="Grid" size="medium" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Footermobile;
