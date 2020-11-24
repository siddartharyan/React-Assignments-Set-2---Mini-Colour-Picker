import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({ applyColor, index, selectNextBackground, backGround }) => {
  const change = () => {
    applyColor(index);
  };
  return (
    <div className="fix-box" onClick={change} style={backGround[index]}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;
