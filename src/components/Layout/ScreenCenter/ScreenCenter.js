// import React, { Component } from 'react'
// import Login from '../../../containers/Auth/Login'

import './ScreenCenter.css'

// export default class Auth extends Component {

//     handleSuccessfulAuth(data) {
//         this.props.handleLogin(data);
//         this.props.history.push("/dashboard");
//     }

//     render() {
//         return (
//             <div className="authWrapper">
//                 <div className="authInner">
//                     <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
//                 </div>
//             </div>
//         )
//     }
// }

import React from 'react';

const ScreenCenter = (props) => {

  return (
    <div className="authWrapper">
      <div className="authInner">
        {props.children}
      </div>
    </div>
  );
}

export default ScreenCenter;