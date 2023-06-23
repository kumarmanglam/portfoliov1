import React from "react";
import { applyMapper } from "./helper";
import { ICON_SIZE } from "../../../common/common";

function Icon({ name, classes, size }) {
  const Component = applyMapper(name);
  return Component ? (
    <Component className={`${ICON_SIZE[size]} ${classes}`} />
  ) : null;
}

export default Icon;
