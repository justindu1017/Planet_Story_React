import React, { Component } from "react";
import SubStoryEL from "./SubStoryEL";

export default class StorySubs extends Component {
  render() {
    return (
      <div className="my-4">
        {this.props.StorySubs.map((el) => {
          return <SubStoryEL el={el} />;
        })}
      </div>
    );
  }
}
