import React, { Component } from "react";
import "./assets/style/StyleGrid.css";
import Home from "./containers/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="containerGrid">
        <Home
          onChangeColor={this.props.onChangeColor}
          colorValue={this.props.colorValue}
        />
      </div>
    );
  }
}

export default App;
