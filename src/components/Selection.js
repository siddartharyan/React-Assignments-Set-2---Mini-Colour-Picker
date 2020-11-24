import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({
  applyColor,
  nextBackGround,
  index,
  selectNextBackground
}) => {
  let [backGround, setBackGround] = useState([
    { background: "" },
    { background: "" },
    { background: "" }
  ]);
  const change = () => {
    let dup = [...backGround];
    dup[index] = nextBackGround;
    setBackGround(dup);
    applyColor(selectNextBackground);
  };
  return (
    <div className="fix-box" onClick={change} style={backGround[index]}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;
