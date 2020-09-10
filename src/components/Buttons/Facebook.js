import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./style/Facebook.css";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

class facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    urlImage: "",
  };
  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      // urlImage: response.picture.data.url,
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbButton = (
      <span>
        Facebook<i className="fab fa-facebook-f"></i>
      </span>
    );
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img srec={this.state.urlImage} alt={this.state.name} />
          <h2>Bienvenido {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="1026030154520877"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="btnFacebook"
          textButton={fbButton}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default facebook;
