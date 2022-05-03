import React, { Component } from "react";
import Picture from "./Picture";
import TextBox from "./TextBox";

export default class BackgroundStory extends Component {
  render() {
    return (
      <div className="d-flex w-full my-2">
        <div className="w-50">
          <TextBox
            storyContent={this.props.storyContent.background}
            handleExpand={this.handleExpand}
          />
        </div>

        <div className="w-50">
          <Picture picSrc={this.props.picSrc} />
        </div>
      </div>
    );
  }

  handleExpand(dots, moreText, btnText, mainDiv) {
    if (dots.style.display === "none") {
      // mainDiv.style.width = "33%";
      dots.style.display = "inline";
      btnText.innerHTML = "展開";
      moreText.style.display = "none";
    } else {
      // mainDiv.style.width = "100%";
      mainDiv.removeAttribute("style");
      dots.style.display = "none";
      btnText.innerHTML = "收合";
      moreText.style.display = "inline";
    }
  }
}
