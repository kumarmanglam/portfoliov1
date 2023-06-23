import React from "react";

function Anchor({ label, link }) {
  return (
    <a href={link} className="anchor" target="blank">
      {label}
    </a>
  );
}

export default Anchor;
