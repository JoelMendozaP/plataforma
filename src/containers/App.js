import React, { Component } from 'react';

import Layout from '../components/Layout/Layout'
import Registration from '../components/Auth/Registration'
import Login from '../components/Auth/Login'
import './App.css';

class App extends Component {

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    )
  }
}

export default App;
