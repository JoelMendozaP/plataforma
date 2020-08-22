import React, { Component } from "react";
import GoogleLogin from "react-google-login";
class Google extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    urlImage: "",
  };
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    let googleContent;
    if (this.state.isLoggedIn) {
      googleContent = (
        <div>
          <img srec={this.state.urlImage} alt={this.state.name} />
          <h2>Bienvenido {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      googleContent = (
        <GoogleLogin
          clientId="510643267486-phub6ol9cpq7lq01nacs8sft7kj5d0mt.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      );
    }
    return <div>{googleContent}</div>;
  }
}
export default Google;
