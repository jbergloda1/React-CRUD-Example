import React, { Component } from "react";
import MyContext from "./MyContext";

export default class Child2 extends Component {
  render() {
    return (
      <div>
        <p>Context Con 2</p>
        <MyContext.Consumer>
        {(context) => (
            <div>
                {/* <input  type="text" onChange={(e) => context.setValue(e.target.value)}></input> */}
                <button onClick={() => {context.setValue('Component Con 2')}} className="btn btn-success">Send</button>
            </div>
          )}
        </MyContext.Consumer>
        <p>-----------------------------</p>
      </div>
    );
  }
}
