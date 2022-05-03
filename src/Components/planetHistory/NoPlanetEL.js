import React, { Component } from "react";
import pic from "..\\..\\pic\\remove.png";

export default class NoPlanetEL extends Component {
  render() {
    return (
      <div className="flex-row-item d-flex my-3">
        <img
          className="m-auto"
          alt="NOPlanet"
          src={pic}
          width="100"
          heigh="200"
        ></img>
      </div>
    );
  }
}
