import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';

import {connect} from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.state={
      num:0
    }
  }
  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.props.Add}>+</Button>
       <span className="numValue">{this.state.num}</span>
       <Button type="primary" onClick={this.props.Del}>-</Button>
      </div>
    );
  }
  componentWillReceiveProps(state){
      this.setState({
        num:state.num
      })
  }
}
const mapStateToProps=function(state){
  debugger
  return state;
}

const mapDispatchToProps=function(dispatch){
  return {
      Add:()=>{dispatch({type:'INCREMENT'})},
      Del:()=>{dispatch({type:"DECREMENT"})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
