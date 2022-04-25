import React, { Component } from "react";
import TextBox from "./TextBox";

export default class SubStoryEL extends Component {
  state = {
    width: "33%",
    storyWidth: "33%",
  };
  render() {
    return (
      <div className="d-flex">
        {Array.from(Array(this.props.el[1])).map((el) => {
          return React.createElement(
            "div",
            {
              style: { width: this.state.width },
            },
            ""
          );
        })}

        <div className="text-nowrap" style={{ width: this.state.storyWidth }}>
          <TextBox
            storyContent={this.props.el[0]}
            handleExpand={this.handleExpand}
          />
        </div>
      </div>
    );
  }

  handleExpand = (dots, moreText, btnText, mainDiv) => {
    if (dots.style.display === "none") {
      this.setState({ width: "33%" });
      this.setState({ storyWidth: "33%" });
      // mainDiv.style.width = "33%";
      dots.style.display = "inline";
      btnText.innerHTML = "展開";
      moreText.style.display = "none";
    } else {
      this.setState({ width: "0%" });
      this.setState({ storyWidth: "100%" });
      mainDiv.removeAttribute("style");
      dots.style.display = "none";
      btnText.innerHTML = "收合";
      moreText.style.display = "inline";
    }
  };
}
