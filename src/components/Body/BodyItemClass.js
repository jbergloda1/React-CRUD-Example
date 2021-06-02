import React, { Component } from "react";

class BodyItemClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return <div>
        {/* <p>State Test with React Class</p>
        <p> Click {this.state.count} time</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}> Click Me! </button> */}
    </div>;
  }
}

export default BodyItemClass;
