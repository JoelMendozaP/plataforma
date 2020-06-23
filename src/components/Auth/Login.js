import React, { Component } from 'react'
import axios from 'axios'

import './Login.css'
import Classes from '../Layout/Header/Header.module.css'
import Aux from '../../hoc/Auxiliar'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const {
            username,
            password
        } = this.state;
        axios.post("http://localhost:5000/api/auth/login", {
            username: username,
            password: password
        }, {
            withCredentials: true
        }
        ).then(response => {
            if (response.data.logged_in) {
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.error("login error", error);
        })
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <Aux>
                <h2>INICIAR SESIÓN</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='formInput'>
                        <label className='formLabel'>Username</label>
                        <input
                            className='formControl'
                            type="text"
                            name="username"
                            placeholder="Username or Email"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required />
                    </div>
                    <div className='formInput'>
                        <label className='formLabel'>Password</label>
                        <input
                            className='formControl'
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required />
                    </div>
                    <button className={Classes.btn} type="submit">Register</button>
                    <p className="forgotPassword">
                        ¿Olvidaste tu <a href="...">contraseña?</a>
                    </p>
                </form>
            </Aux>
        )
    }
}
