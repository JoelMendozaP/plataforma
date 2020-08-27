import React from "react";
import "./Palette.css";

function palette(props) {
  return (
    <div>
      <div className="themeOption">
        <div id="theme1"></div>
        <div id="theme2"></div>
        <div id="theme3"></div>
        <div id="theme4"></div>
        <div id="theme5"></div>
      </div>

      <div>
        <input
          onChange={props.onChangeColor}
          value={props.colorValue.primary}
          name="primary"
          type="text"
        />
        <br />
        <input
          onChange={props.onChangeColor}
          value={props.colorValue.secondary}
          name="secondary"
          type="text"
        />
        <br />
        <input
          onChange={props.onChangeColor}
          value={props.colorValue.text}
          name="text"
          type="text"
        />
        <br />
        <input
          onChange={props.onChangeColor}
          value={props.colorValue.backgroundSecondary}
          name="backgroundSecondary"
          type="text"
        />
        <br />
        <input
          onChange={props.onChangeColor}
          value={props.colorValue.background}
          name="background"
          type="text"
        />
        <br />
      </div>
    </div>
  );
}

export default palette;
