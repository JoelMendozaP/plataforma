import React, { Component } from 'react';

import Layout from '../components/Layout/Layout'
// import Registration from '../components/Auth/Registration'
// import Login from '../components/Auth/Login'
import Auth from '../components/Auth/Auth';

import './App.css';
import Aux from '../hoc/Auxiliar'

class App extends Component {

  render() {
    return (
      <Aux>
        <Layout>
        </Layout>
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        <Auth />
      </Aux>
    )
  }
}

export default App;
