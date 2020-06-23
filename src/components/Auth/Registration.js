import React, { Component } from 'react'
import axios from 'axios'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            name: "",
            last_name: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const {
            username,
            email,
            name,
            last_name,
            password
        } = this.state;
        axios.post("http://localhost:5000/api/auth/register", {
            username: username,
            email: email,
            name: name,
            last_name: last_name,
            password: password
        }, {
            withCredentials: true
        }
        ).then(response => {
            console.log("registration response", response);
            // if(response.data.status === "created") {
            //     this.props.handleSuccessfulAuth(response.data);
            // }
        }).catch(error => {
            console.error("registration error", error);

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
                <h3>Registro</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required />
                    <input
                        type="text"
                        name="names"
                        placeholder="Names"
                        value={this.state.names}
                        onChange={this.handleChange}
                        required />
                    <input
                        type="text"
                        name="last_names"
                        placeholder="Last names"
                        value={this.state.last_names}
                        onChange={this.handleChange}
                        required />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
