import React, { Component } from "react";
import MyContext from "./MyContext";

export default class Child extends Component {
  render() {
    return (
      <div>
        <p>Demo Context Class</p>
        <p>---------------</p>
        
        <MyContext.Consumer>
          {(context) => (
            <div>
              <input type="text" value={context.state.message}></input>
            </div>
          )}
         
        </MyContext.Consumer>
      </div>
    );
  }
}
