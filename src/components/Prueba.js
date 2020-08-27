import React, { Component } from "react";
import "./prueba.css";
class prueba extends Component {
  state = {
    color: "purple",
  };
  onChangeHeader = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  render() {
    console.log(this.state.color);
    const styleObj = {
      background: this.state.color,
      color: this.state.color,
    };
    return (
      <div style={styleObj} className="PruebaContent">
        hola
        <input
          type="text"
          onChange={this.onChangeHeader}
          value={this.state.color}
        />
      </div>
    );
  }
}

export default prueba;
