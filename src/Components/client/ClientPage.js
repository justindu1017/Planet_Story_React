import React, { Component } from "react";
// import "../../style/reset.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import MemberPage from "./MemberPage";

export default class ClientPage extends Component {
  state = {
    memberInfo: {
      _id: "",
      storyTemplate: {
        _id: "",
        storyID: "",
        name: "",
        background: "",
        storySub: ["", "", ""],
        task: "",
        taskStory: "",
        badge: "",
      },
      member: {
        _id: "",
        name: "",
      },
      subProgress: "",
      badge: "",
      __v: 0,
    },
  };

  async componentDidMount() {
    const memberInfo = await this.doFetch("626ec648da9cce362c2021d9")
      .then((res) => res.json())
      .then((res) => {
        return res;
      });

    this.setState({ memberInfo: memberInfo[0] });
    document.body.style.backgroundColor = "#AA0000";
  }

  render() {
    return (
      <div className="App container">
        <MemberPage storyContent={this.state.memberInfo.storyTemplate} />
      </div>
    );
  }

  doFetch = (memberID) => {
    // fetch from server by memberID
    return fetch("/api/storyProgress/getActiveStory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ member: memberID }),
    });
  };
}
