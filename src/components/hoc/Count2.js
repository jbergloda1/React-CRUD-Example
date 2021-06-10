import React, { Component } from 'react'
import HOC from './HOC'

class Count2 extends Component {
    render() {
        return (
            <div>
                <p>Count: {this.props.CountNumber}</p>
                <button onClick={this.props.handleClick}>Click</button>
                <p>-------------------------</p>
            </div>
        )
    }
}
const HocComponent = HOC(Count2)
export default HocComponent
