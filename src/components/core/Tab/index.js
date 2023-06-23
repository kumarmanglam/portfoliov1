import React from "react";
import Text from "../Text";

function Tab({ label, isActive }) {
  return (
    <div>
      <div className={`${isActive ? "active" : ""} tab`}>
        <Text label={label} size="medium" />
      </div>
    </div>
  );
}

export default Tab;
