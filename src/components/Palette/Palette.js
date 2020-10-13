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
            value={props.colorValue.color1}
            name="color1"
            onChange={props.onChangeColor}
          />
          <p>Color Primario: {props.colorValue.color1}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.color2}
            name="color2"
            onChange={props.onChangeColor}
          />
          <p>Color Secundario: {props.colorValue.color2}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.color3}
            name="color3"
            onChange={props.onChangeColor}
          />
          <p>Color de texto: {props.colorValue.color3}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.color4}
            name="color4"
            onChange={props.onChangeColor}
          />
          <p>Color de fondo: {props.colorValue.color4}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.color5}
            name="color5"
            onChange={props.onChangeColor}
          />
          <p>Color de fondo2: {props.colorValue.color5}</p>
        </div>
        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.color6}
            name="color6"
            onChange={props.onChangeColor}
          />
          <p>Color de fondo3: {props.colorValue.color6}</p>
        </div>

        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.fondo1}
            name="fondo1"
            onChange={props.onChangeColor}
          />
          <p>Color de fondo3: {props.colorValue.fondo1}</p>
        </div>

        <div className="ChangeColor__input">
          <input
            type="color"
            value={props.colorValue.fondo2}
            name="fondo2"
            onChange={props.onChangeColor}
          />
          <p>Color de fondo3: {props.colorValue.fondo2}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default palette;
