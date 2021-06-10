import React, { Component } from 'react';

class StateEX extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
        
    }
    componentWillMount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <div>--------------</div>
                <p>State And Lifecycle</p>
                <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default StateEX;