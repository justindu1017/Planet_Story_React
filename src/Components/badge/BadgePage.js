import React, { Component } from "react";
import BadgeEL from "./BadgeEL";

export default class BadgePage extends Component {
  state = {
    badgeGet: [],
  };

  async componentDidMount() {
    // const memberInfo = await this.doFetch("62547ca218e61b19371368f8")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     return res;
    //   });

    this.setState({ badgeGet: 12 });
    document.body.style.backgroundColor = "#AA0000";
  }

  render() {
    return (
      <div className="d-flex flex-wrap container">
        {Array.from(Array(this.state.badgeGet))
          .fill(1)
          .map((el) => {
            // console.log(el);
            return <BadgeEL />;
          })}
      </div>
    );
  }
}
