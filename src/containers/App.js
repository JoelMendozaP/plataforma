import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from '../components/Layout/Layout'
import Registration from '../containers/Auth/Registration'
import Login from '../containers/Auth/Login'

import './App.css';
import Aux from '../hoc/Auxiliar'

class App extends Component {

  render() {
    return (<Router>
      <Aux>
        <Layout>
        </Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Registration} />
        </Switch>
      </Aux></Router>
    )
  }
}

export default App;
