import React, { Component } from 'react'
import PureCompo from './PureCompo';
import RegularCompo from './RegularCompo';

export class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'HELLO'
      }
    }
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({msg:'HELLO'})
    //     },2000)
    // }
    
  render() {
      console.log('parent re-render');
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <RegularCompo message={this.state.msg} />
        <PureCompo message={this.state.msg} />
      </div>
    )
  }
}

export default App
