import React from "react";
import { TEXT_SIZE } from "../../../common/common";

function Text({ label, classes, size }) {
  return <span className={`PText ${classes} ${TEXT_SIZE[size]}`}>{label}</span>;
}

export default Text;
