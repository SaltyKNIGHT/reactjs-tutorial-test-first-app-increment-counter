import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"],
    img_url:
      "https://cdn-cas.orami.co.id/parenting/images/lisa-blackpink-potret.width-800.jpg",
  };
  render() {
    return (
      //   <React.Fragment>
      //     <div className="badge badge-primary m-2">
      //       Counter: {this.state.count}
      //     </div>
      //     {/* <div style={{ fontSize: 50 }}>asdasdasdsa</div> */}
      //     <button className="btn btn-secondary btn-sm">Increment</button>
      //   </React.Fragment>
      <React.Fragment>
        {/* <div>asd</div> */}
        <div className="text-center m-4">
          <h1>Count Click Button Simulator</h1>
          <hr></hr>
          <button
            onClick={this.clickIncrement}
            className="btn button-primary"
            style={{
              fontSize: 33,
              borderRadius: 50,
              display: "inline-block",
              alignItems: "center",
            }}
          >
            Increment
          </button>
          <div style={{ display: "inline-block" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <button
            onClick={this.clickDecrement}
            className="btn button-primary"
            style={{
              fontSize: 33,
              borderRadius: 50,
              display: "inline-block",
              alignItems: "center",
              backgroundColor: "#0B0B45",
              color: "#f0f8ff",
            }}
          >
            Decrement
          </button>
          <div style={{ fontSize: 40 }}>{this.state.count}</div>
          {/* {this.renderTags()} */}
        </div>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.count == 0) {
      return <div>it is zero</div>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  clickIncrement = () => {
    this.state.count = this.state.count + 1;
    this.setState({ count: this.state.count });
    // console.log(this.state.count);
    // console.log("aaaaaaaaaaaaaaaaaaaa");
  };
  clickDecrement = () => {
    this.state.count = this.state.count - 1;
    this.setState({ count: this.state.count });
    // console.log(this.state.count);
    // console.log("aaaaaaaaaaaaaaaaaaaa");
  };
  //   increment() {
  //     this.state.count = this.state.count + 1;

  //     if (this.state.count == 1) {
  //       return this.state.count;
  //     }
  //   }
}

export default Counter;
