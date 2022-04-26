import React, { Component } from 'react'

export class RegularCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
      console.log('Regular re-render');
    return (
      <div>
          <h2>Regular :{this.props.message} </h2>
      </div>
    )
  }
}

export default RegularCompo