import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({ applyColor, index, selectNextBackground, backGround }) => {
  return (
    <div
      className="fix-box"
      onClick={() => applyColor(index)}
      style={backGround[index]}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;
