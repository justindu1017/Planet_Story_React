import React, { Component } from "react";
import PlanetEL from "./PlanetEL";
import NoPlanetEL from "./NoPlanetEL";
import bg from "..\\..\\pic\\Galaxy.jpg";
import pic from "..\\..\\pic\\planet-earth.png";
import chat from "..\\..\\pic\\chat.png";

export default class PlanetHistoryPage extends Component {
  state = {
    memberInfo: [],
  };

  async componentDidMount() {
    let memberInfo = await this.doFetch("6271349da3e29d4bc8f8bd6e")
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    console.log(memberInfo);
    memberInfo = this.resize(memberInfo, 12);
    this.setState({ memberInfo: memberInfo });
    document.body.style.backgroundImage = "url(" + bg + ")";

    document
      .getElementById("staticBackdrop")
      .addEventListener("show.bs.modal", function (event) {
        var button = event.relatedTarget;
        var recipient = button.getAttribute("data-bs-whatever");
        var toPlanet = this.querySelector("#toPlanet");
        toPlanet.href = recipient;

        var toMsg = this.querySelector("#toMsg");
        toMsg.href = "/msg/" + recipient;
      });
  }

  render() {
    return (
      <div className="d-flex flex-wrap container">
        {this.state.memberInfo.map((el) => {
          if (el) {
            return <PlanetEL img={el.badge} id={el._id} />;
          } else {
            return <NoPlanetEL />;
          }
        })}

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  想要前往何處?
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-between">
                <a
                  className="btn bg-info bg-opacity-25 border-primary"
                  id="toPlanet"
                  href=""
                >
                  <img
                    className="m-auto"
                    alt="NOPlanet"
                    src={pic}
                    width="100"
                    heigh="50"
                  ></img>
                  <div>星球</div>
                </a>

                <a
                  className="btn bg-info bg-opacity-25 border-primary"
                  id="toMsg"
                  href=""
                >
                  <img
                    className="m-auto"
                    alt="NOPlanet"
                    src={chat}
                    width="100"
                    heigh="50"
                  ></img>
                  <div>留言</div>
                </a>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
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
