import React, { Component } from "react";
import "../../style/badge.css";

export default class BadgeEL extends Component {
  render() {
    return <div className="flex-row-item">{this.props.img}</div>;
  }
}
