import React, { Component } from "react";
import Content from "../../components/Content/Content";
import Information from "../../components/Information/Information";

class Home extends Component {
  state = {
    information: 0,
  };
  handleInformation = (info) => {
    this.setState({ information: info });
    console.log("funcion del padre");
  };
  render() {
    return (
      <React.Fragment>
        <Content
          onChangeColor={this.props.onChangeColor}
          colorValue={this.props.colorValue}
          handleInformation={this.handleInformation}
        />
        <Information
          onInformation={this.state.information}
          handleInformation={this.handleInformation}
        />
      </React.Fragment>
    );
  }
}

export default Home;
