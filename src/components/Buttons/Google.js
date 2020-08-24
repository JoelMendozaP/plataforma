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
    this.setState({
      isLoggedIn: true,
      userID: response.profileObj.googleId,
      name: response.profileObj.name + response.profileObj.familyName,
      email: response.profileObj.email,
      urlImage: response.profileObj.imageUrl,
    });
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
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          // theme="light"
          // cookiePolicy={"single_host_origin"}
          cookiePolicy="none"
          // cookiePolicy="None"
        />
      );
    }
    return <div>{googleContent}</div>;
  }
}
export default Google;
