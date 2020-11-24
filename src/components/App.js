import React, { useState } from "react";
import "../styles/App.css";
const colourConfig = [
  {
    key: "blue",
    label: "Blue",
    classname: "btn-blue",
    background: "rgb(34, 193, 195)"
  },
  {
    key: "orange",
    label: "Orange",
    classname: "btn-orange",
    background: "rgb(221, 112, 18)"
  },
  {
    key: "green",
    label: "Green",
    classname: "btn-green",
    background: "rgb(44, 209, 88)"
  }
];

const title = "Select the gradient and then the Box to change the color";

export function App() {
  let [nextBackground, selectNextBackground] = useState({ nextBackground: "" });
  let [backGround, setBackGround] = useState([
    { background: "" },
    { background: "" },
    { background: "" }
  ]);
  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle(nextBackground);
  };
  const ColourSelector = (props) => {
    const { config, selectNextBackground } = props;
    const { background } = config;
    return (
      <button
        className={config.classname}
        onClick={() => selectNextBackground({ background: background })}
      >
        {config.label}
      </button>
    );
  };

  const Selection = ({ applyColor, index }) => {
    const change = () => {
      let dup = [...backGround];
      dup[index] = nextBackground;
      setBackGround(dup);
      applyColor(selectNextBackground);
    };
    return (
      <div className="fix-box" onClick={change} style={backGround[index]}>
        <h2 className="subheading">Selection</h2>
      </div>
    );
  };
  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
        {colourConfig.map((config, index) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground}
          />
        ))}
      </div>

      <div className="row" id="children-wrapper">
        {["selection1", "selection2", "selection3"].map((key, index) => (
          <Selection index={index} key={key} applyColor={applyColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
