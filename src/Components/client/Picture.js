import React, { Component } from "react";
import pic from "..\\..\\pic\\planet-earth.png";
export default class Picture extends Component {
  render() {
    return (
      <img
        alt="PIC"
        className="d-flex m-auto py-auto my-auto"
        src={pic}
        width="100"
        heigh="200"
      ></img>
    );
  }
}
