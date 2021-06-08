
import React from 'react'

const HOC = (Component) =>{
    return class extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0,
            }
        }
        handleClick = () =>{
            this.setState({
                count: this.state.count + 1,
            })
        }
        render(){
            return(
                <Component CountNumber={this.state.count} handleClick={this.handleClick} />
            )
        }
    }
    
}
export default HOC;
