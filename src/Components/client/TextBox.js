import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class TextBox extends Component {
  render() {
    return (
      <div
        className="border border-white border-3 bg-white bg-opacity-50 text-break my-2 rounded-3 p-2"
        ref={(mainDiv) => {
          this.mainDiv = mainDiv;
        }}
      >
        <p>
          {this.props.storyContent.slice(0, 10)}
          <span
            ref={(dots) => {
              this.dots = dots;
            }}
          >
            ...
          </span>
          <span
            style={{ display: "none" }}
            // className="none"
            ref={(more) => {
              this.more = more;
            }}
          >
            {this.props.storyContent.slice(10)}
          </span>
        </p>
        <button
          onClick={() => {
            // using arrow, say goodbye to bind this
            // this.handleExpand();
            const dots = ReactDOM.findDOMNode(this.dots);
            const moreText = ReactDOM.findDOMNode(this.more);
            const btnText = ReactDOM.findDOMNode(this.expandBtn);
            const mainDiv = ReactDOM.findDOMNode(this.mainDiv);
            this.props.handleExpand(dots, moreText, btnText, mainDiv);
          }}
          ref={(expandBtn) => {
            this.expandBtn = expandBtn;
          }}
          className="btn btn-primary"
        >
          展開
        </button>
      </div>
    );
  }
}
