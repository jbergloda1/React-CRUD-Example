import React, { Component } from 'react'
import withData from './HOC'

class Count extends Component {
    render() {
        return (
            <div>
                <p>Count: {this.props.count}</p>
                <button onClick={Count}>Click</button>
            </div>
        )
    }
}
const HocComponent = withData(Count)
export default HocComponent
