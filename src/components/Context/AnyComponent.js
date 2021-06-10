import React, { Component } from "react";
import ThemedButton from "./ThemedButton";
import ThemeContext from "./theme";

class AnyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      themes: ["light", "dark"],
    };
  }
  handleSelect = (evt) => {
    console.log("Changing value to " + evt.target.value);
    this.setState({
      theme: evt.targer.value,
    });
  };
  render() {
    return (
      <div>
        <React.Fragment>
          <h2>Any component</h2>
          <select value={this.state.theme} oncChange={this.handleSelect}>
            {this.state.themes.map((t) => (
              <option value={t}> {t}</option>
            ))}
          </select>
          <div>Selected theme: {this.state.theme}</div>
          <ThemeContext.Provider value={this.state.theme}>
            <ThemedButton theme={this.state.theme} />
          </ThemeContext.Provider>
        </React.Fragment>
      </div>
    );
  }
}
export default AnyComponent;
