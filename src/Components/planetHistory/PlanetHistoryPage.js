import React, { Component } from "react";
import BadgeEL from "./PlanetEL";
import NoBadgeEL from "./NoPlanetEL";

export default class PlanetHistoryPage extends Component {
  state = {
    memberInfo: [],
  };

  async componentDidMount() {
    let memberInfo = await this.doFetch("626ec648da9cce362c2021d9")
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    memberInfo = this.resize(memberInfo, 12);
    this.setState({ memberInfo: memberInfo });
    document.body.style.backgroundColor = "#AA0000";
  }

  render() {
    return (
      <div className="d-flex flex-wrap container">
        {this.state.memberInfo.map((el) => {
          if (el) {
            return (
              <BadgeEL img={el.storyTemplate.badge} id={el.storyTemplate._id} />
            );
          } else {
            return <NoBadgeEL />;
          }
        })}
      </div>
    );
  }
  doFetch = (memberID) => {
    // fetch from server by memberID
    return fetch("/api/storyProgress/getByMember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ member: memberID }),
    });
  };
  resize = (arr, newSize) => {
    while (newSize > arr.length) arr.push(null);
    arr.length = newSize;
    return arr;
  };
}
