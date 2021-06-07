import React, { Component } from "react";
import MyContext from "./MyContext";

export default class Child1 extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <div>
              
              <button
                onClick={() => {
                  context.setMessage("New Arrival");
                }}
              >
                Send
              </button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
