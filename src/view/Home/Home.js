import React, { Component } from "react";
import Content from "../../components/Content/Content";
import Information from "../../components/Information/Information";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Content
          onChangeColor={this.props.onChangeColor}
          colorValue={this.props.colorValue}
        />
        <Information />
      </React.Fragment>
    );
  }
}

export default Home;
