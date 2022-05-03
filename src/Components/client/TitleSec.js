import React, { Component } from "react";

export default class TitleSec extends Component {
  render() {
    return (
      <div className="container d-flex relative vw-100 ml-0 pl-0 justify-content-between sticky-top bg-danger ">
        <h1>{this.props.storyContent.name}</h1>
        <div className="d-flex">
          <div className="d-flex align-items-center">探索進度:</div>
          <div className="d-flex align-items-center">
            {(this.countComplete() / 4) * 100}%
          </div>
        </div>
      </div>
    );
  }

  countComplete = () => {
    let progress = 0;
    if (this.props.storyContent.taskStory) progress += 1;
    this.props.storyContent.storySub.map((el) =>
      el ? (progress += 1) : progress
    );
    return progress;
  };
}
