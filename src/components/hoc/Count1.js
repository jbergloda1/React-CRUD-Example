import React, { Component } from 'react'
import HOC from './HOC'

class Count1 extends Component {
    render() {
        return (
            <div>
                <p> DEMO HOC </p>
                <p>Count: {this.props.CountNumber}</p>
                <button onClick={this.props.handleClick}>Click</button>
            </div>
        )
    }
}
const HocComponent = HOC(Count1)
export default HocComponent
