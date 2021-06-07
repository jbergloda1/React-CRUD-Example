import { Component } from "react";
import MyContext from "./MyContext";

export default class MyProvider extends Component {
  state = { message: "" };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setMessage: (value) =>
            this.setState({
              message: value,
            }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
