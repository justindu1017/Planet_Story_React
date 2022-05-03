import React, { Component } from "react";
import MsgEL from "./MsgEL";

export default class MsgListPage extends Component {
  state = {
    storyInfo: {
      _id: "",
      storyID: "",
      name: "",
      background: "",
      storyMain: "",
      storySub: ["", "", ""],
      task: "",
      taskStory: "",
      badge: "",
      taskMessages: [""],
      __v: 0,
    },
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const storyInfo = await this.doFetchStoryID(id)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    this.setState({ storyInfo: storyInfo });
  }

  render() {
    return (
      <div className="container">
        {this.state.storyInfo.taskMessages.map((el) => {
          console.log(el);
          return <MsgEL msgObj={el} />;
        })}
      </div>
    );
  }

  doFetchStoryID = (storyID) => {
    // fetch from server by memberID
    return fetch("/api/storyProgress/" + storyID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}
