import React, { Component } from 'react';

import Layout from '../components/Layout/Layout'
import Registration from '../components/Auth/Registration'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
        <Registration />
      </div>
    )
  }
}

export default App;
