import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import Perfil from "../Perfil/Perfil";
import Inicio from "./Inicio/Inicio";
import Courses from "./Courses/Courses";
import Calendar from "./Calendar/Calendar";
import Account from "./Account/Account";
import Questions from "./Questions/Questions";
import Chat from "./Chat/Chat";
import Palette from "../Palette/Palette";

import "./Content.css";

class content extends Component {
  render() {
    return (
      <div className="itemContent">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Courses" component={Courses} />
          <Route exact path="/Calendar" component={Calendar} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/chat" component={Chat} />
          <Route
            path="/theme"
            render={() => (
              <Palette
                onChangeColor={this.props.onChangeColor}
                colorValue={this.props.colorValue}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default content;
