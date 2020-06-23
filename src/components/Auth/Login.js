import React, { Component } from 'react'
import axios from 'axios'

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
            if(response.data.logged_in) {
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
            <div>
                <h3>Iniciar sesión</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username or Email"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
