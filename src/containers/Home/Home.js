import React, { Component } from "react";
import Content from "../../components/Content/Content";
import Information from "../../components/Information/Information";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Content
          onChangeColor={this.props.onChangeColor}
          colorValue={this.props.colorValue}
        />
        <Information />
        <Navbar />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default Home;
