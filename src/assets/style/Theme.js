import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import App from "../../App";
class theme extends Component {
  constructor() {
    super();
    this.state = {
      color: {
        primary: "#723489",
        secondary: "#F509B4",
        text: "#ffffff",
        backgroundSecondary: "#23232e",
        background: "#F509B4",
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
        <div id="modal"></div>
      </div>
    );
  }
}

export default theme;
