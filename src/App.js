import React, { Component } from "react";
import Home from "./view/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./assets/style/StyleGrid.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="containerGrid">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Home
                  onChangeColor={this.props.onChangeColor}
                  colorValue={this.props.colorValue}
                />
              )}
            />
          </Switch>

          <Navbar />
          <Sidebar />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/* <Home
            onChangeColor={this.props.onChangeColor}
            colorValue={this.props.colorValue}
          /> */
