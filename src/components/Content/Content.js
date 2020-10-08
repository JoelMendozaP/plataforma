import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Inicio from "../../view/Inicio/Inicio";
import Courses from "../../view/Courses/Courses";
import Calendar from "../../view/Calendar/Calendar";
import Account from "../../view/Account/Account";
import Questions from "../../view/Questions/Questions";
import Chat from "../../view/Chat/Chat";
import Palette from "../Palette/Palette";

import "./style/Content.css";

class content extends Component {
  render() {
    return (
      <div className="itemContent">
        <Switch>
          <Route exact path="/home" component={Inicio} />
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
          <Route path="/" component={Inicio} />
        </Switch>
      </div>
    );
  }
}
export default content;
