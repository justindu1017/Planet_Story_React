import React, { Component } from "react";

export default class MsgListEL extends Component {
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
      taskMessages: [],
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

    this.setState(storyInfo);
  }

  render() {
    return <div>MsgListEL</div>;
  }

  doFetchStoryID = (storyID) => {
    // fetch from server by memberID
    return fetch("/api/storyTemplate/" + storyID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}
