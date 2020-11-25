import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({ applyColor }) => {
  let [backGround, setBackground] = useState({ background: "" });
  const change = (prop) => {
    setBackground(prop);
  };
  return (
    <div
      className="fix-box"
      onClick={() => applyColor(change)}
      style={backGround}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;
