import React, { Component } from "react";
import Palette from "../Palette/Palette";
import Perfil from "../Perfil/Perfil";
import "./Content.css";
class content extends Component {
  render() {
    return (
      <div className="itemContent">
        <Perfil />
        <Palette
          onChangeColor={this.props.onChangeColor}
          colorValue={this.props.colorValue}
        />
      </div>
    );
  }
}
export default content;
