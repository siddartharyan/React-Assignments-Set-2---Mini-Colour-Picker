import React from "react";
import "../styles/Child.css";
const Selection = ({ applyColor, nextBackground }) => {
  return (
    <div className="fix-box" style={nextBackground}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;
