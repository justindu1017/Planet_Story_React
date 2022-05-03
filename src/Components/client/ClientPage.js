import React, { Component } from "react";
// import "../../style/reset.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import MemberPage from "./MemberPage";
import bg from "..\\..\\pic\\Galaxy.jpg";

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
        taskMessages: [],
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
    const { id } = this.props.match.params;

    const memberInfo = id
      ? await this.doFetchStoryID(id)
          .then((res) => res.json())
          .then((res) => {
            return res;
          })
      : await this.doFetch("6271349da3e29d4bc8f8bd6e")
          .then((res) => res.json())
          .then((res) => {
            return res;
          });
    this.setState({ memberInfo: memberInfo[0] ? memberInfo[0] : memberInfo });

    document.body.style.backgroundImage = "url(" + bg + ")";
  }

  render() {
    return (
      <div className="App ">
        <MemberPage
          storyProgressID={this.state.memberInfo._id}
          member={this.state.memberInfo.member}
          storyContent={
            this.state.memberInfo.storyTemplate
              ? this.state.memberInfo.storyTemplate
              : this.state.memberInfo
          }
        />
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
