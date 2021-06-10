import React, { Component } from 'react';

export default class BoilingVerdict extends Component {
  render() {
    return (
     function BoildingVerdict(props){
       if (props.celsius >= 100){
         return <p> du dieu kien nuoc soi.</p>
       }
       return <p> khong du dieu kien nuoc soi</p>
     }
    )
  }
}
