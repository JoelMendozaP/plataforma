import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import App from "../../App";
class theme extends Component {
  constructor() {
    super();
    this.state = {
      color: {
        color1: "#23232e",
        color2: "#405267",
        color3: "#723489",
        color4: "#F509B4",
        color5: "#fa98de",
        color6: "#ffffff",
        color7: "#d57272",
        color8: "#60bb6f",
        fondo1: "#fff",
        fondo2: "#fff",
      },
    };
  }

  onChangeHeader = (e) => {
    this.setState({
      color: {
        ...this.state.color,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <GlobalStyle color={this.state.color} />
        <App
          onChangeColor={this.onChangeHeader}
          colorValue={this.state.color}
        />
      </div>
    );
  }
}

export default theme;
