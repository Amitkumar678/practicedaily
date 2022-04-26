import React, {  PureComponent } from 'react'

export default class PureCompo extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
      console.log('Pure Component re-render');
    return (
      <div>
          <h2>PureComponent: {this.props.message} </h2>
      </div>
    )
  }
}
