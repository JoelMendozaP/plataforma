import React, { Component } from "react";
import Palette from "../Palette/Palette";
import "./Content.css";
class content extends Component {
  render() {
    return (
      <div className="itemContent">
        <div className="contentbox">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            placeat quae voluptatibus. Laudantium consequatur numquam assumenda
            deleniti eaque minima at quidem facilis dolorem nesciunt! Quaerat
            accusamus cumque quae perferendis hic.
          </p>
        </div>
        <Palette
          onChangeColor={this.props.onChangeColor}
          colorValue={this.props.colorValue}
        />
      </div>
    );
  }
}
export default content;
