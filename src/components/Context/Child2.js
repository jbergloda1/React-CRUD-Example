import React, { Component } from "react";
import MyContext from "./MyContext";

export default class Child2 extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (<p>{context.state.message}</p>)}
        </MyContext.Consumer>
      </div>
    );
  }
}
