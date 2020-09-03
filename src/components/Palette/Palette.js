import React from "react";
import "./Palette.css";

function palette(props) {
  return (
    <React.Fragment>
      <div className="themeOption">
        <div id="theme1"></div>
        <div id="theme2"></div>
        <div id="theme3"></div>
        <div id="theme4"></div>
        <div id="theme5"></div>
      </div>
      <div className="ChangeColor">
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.primary}
            name="primary"
            onChange={props.onChangeColor}
          />
          <p>Color Primario: {props.colorValue.primary}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.secondary}
            name="secondary"
            onChange={props.onChangeColor}
          />
          <p>Color Secundario: {props.colorValue.secondary}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.text}
            name="text"
            onChange={props.onChangeColor}
          />
          <p>Color de texto: {props.colorValue.text}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.backgroundSecondary}
            name="backgroundSecondary"
            onChange={props.onChangeColor}
          />
          <p>Color de fondo: {props.colorValue.backgroundSecondary}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.background}
            name="background"
            onChange={props.onChangeColor}
          />
          <p>Color de fondo2: {props.colorValue.background}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default palette;
