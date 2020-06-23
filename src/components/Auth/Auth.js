import React, { Component } from 'react'
import Login from './Login'

import './Auth.css'

export default class Auth extends Component {

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="authWrapper">
                <div className="authInner">
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </div>
            </div>
        )
    }
}