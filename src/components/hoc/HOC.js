import React from 'react'

export default function withData(Wrapcomponent,) {
    class HigherComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count: 0
            };
        }
        componentDidMount(){
            this.setState({
                count: this.state.count + 1
         
            })
            console.log(this.setState)
        }
        render(){
            return(
                <Wrapcomponent count={this.state.count} {...this.props}/>
            )
        }
    }
    return HigherComponent
}
