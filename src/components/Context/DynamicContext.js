import React, { Component } from "react";
import ThemeContext from "./theme";

class DynamicContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thme: "dark",
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <themedButton />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default DynamicContext;
