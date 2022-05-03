import React, { Component } from "react";
import pic from "..\\..\\pic\\planet-earth.png";
export default class Picture extends Component {
  render() {
    return (
      <div>
        <img
          // style={{
          //   display: "block",
          //   margin: "auto",
          // }}
          className="d-block m-auto"
          src={pic}
          width="100"
          heigh="200"
        ></img>
      </div>
    );
  }
}
