import React, { Component } from "react";
import BackgroundStory from "./BackgroundStory";
import Msg from "./Msg";
import StorySubs from "./StorySubs";
import TaskSection from "./TaskSection";
import TitleSec from "./TitleSec";

export default class MemberPage extends Component {
  render() {
    return (
      <div>
        <TitleSec storyContent={this.props.storyContent} />
        <BackgroundStory storyContent={this.props.storyContent} />
        <StorySubs StorySubs={this.createStoryRandomArr()} />
        <TaskSection storyContent={this.props.storyContent} />
        <Msg
          storyProgressID={this.props.storyProgressID}
          member={this.props.member}
          storyContent={this.props.storyContent}
        />
      </div>
    );
  }

  createStoryRandomArr() {
    const arr = this.createRandomArr(3, 0);
    const storys = this.props.storyContent.storySub.map(function (e, i) {
      return [e, arr[i]];
    });
    return storys;
  }

  createRandomArr(max, min) {
    let arr = [];
    for (let i = 0; i < max; i++) {
      let x = Math.floor(Math.random() * max) + min;
      if (arr.includes(x) === true) {
        i = i - 1;
      } else {
        if (x > max == false) {
          arr.push(x);
        }
      }
    }
    return arr;
  }
}
