import React, { Component } from "react";
import MsgEL from "./MsgEL";

export default class Msg extends Component {
  render() {
    return (
      <div>
        <form className="border border-white border-3 bg-white bg-opacity-50 text-break my-2 rounded-3 p-2">
          <div className="mb-3">
            <label htmlFor="msg" className="form-label">
              請輸入您的留言
            </label>
            <input
              className="form-control"
              placeholder="留言..."
              id="msg"
            ></input>
          </div>
          <button onClick={this.send} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div>
          {this.props.storyContent.taskMessages.map((el) => {
            // console.log(el);
            return <MsgEL msgObj={el} />;
          })}
        </div>
      </div>
    );
  }

  send = (e) => {
    e.preventDefault();

    const obj = {
      taskMessages: [
        ...this.props.storyContent.taskMessages,
        {
          m_timestamp: "2022-04-24T15:58:31.777Z",
          message: document.getElementById("msg").value,
        },
      ],
    };

    fetch(
      "http://localhost:5000/api/storyProgress/" + this.props.storyProgressID,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    ).then((res) => {});
    console.log(this.props.storyContent._id);
    fetch(
      "http://localhost:5000/api/storyTemplate/" + this.props.storyContent._id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    ).then((res) => {});
    window.location.reload(false);
  };
}
