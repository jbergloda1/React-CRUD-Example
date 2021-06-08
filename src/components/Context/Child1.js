import React, { Component } from "react";
import MyContext from "./MyContext";

export default class Child1 extends Component {
  render() {
    return (
      <div>
        <p>Context Con 1</p>
        <MyContext.Consumer>
          {(context) => (
            <div>
                {/* <input value={context} type="text" onChange={(e) => context.setValue(e.target.value)}></input> */}
                <button onClick={() => {context.setValue('Component Con 1')}} className="btn btn-success">Send</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
