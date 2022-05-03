import React, { Component } from "react";
import "../../style/badge.css";

export default class PlanetEL extends Component {
  render() {
    return (
      <div
        className="flex-row-item"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        data-bs-whatever={this.props.id}
      >
        {this.props.img}
      </div>
    );
  }
}
