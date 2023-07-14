import React from "react";
import Icon from "../icon";

function Navbtn({ iconLabel, label, path }) {
  return (
    <div className="navbtn">
      <a href={path} className="navbtn">
        <Icon name={iconLabel} size="medium" />
        <p>{label}</p>
      </a>
    </div>
  );
}

export default Navbtn;
