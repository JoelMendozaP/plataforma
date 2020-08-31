import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import App from "../../App";

class theme extends Component {
  state = {
    color: {
      primary: "#723489",
      secondary: "#000",
      text: "white",
      backgroundSecondary: "#23232e",
      background: "#F2F1F1",
    },
  };
  onChangeHeader = (e) => {
    this.setState({
      color: {
        ...this.state.color,
        [e.target.name]: e.target.value,
        // text: e.target.value,
      },
    });
  };
  render() {
    // const styleObj = {
    //   background: `var(--text)`,
    //   color: `var(--secondary)`,
    // };
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
