import React, { Component } from "react";
import AppContext from "./MyProvider";

export default class csCha extends Component {
  render() {
    return (
      <div>
        <div className="border border-primary">
          <AppContext.Consumer>
            {context => (
              <>
                <button onClick={context.btn}>Click</button>
              </>
            )}
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}
