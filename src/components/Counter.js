import React, { Component } from 'react'
import store from '../Store'
import * as Actions from '../Actions' //引入Actions类中所有export的变量

const buttonStyle = {
  margin: '10px'
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.onIncrementClick = this.onIncrementClick.bind(this)
    this.onDecrementClick = this.onDecrementClick.bind(this)
    this.getOwnState = this.getOwnState.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.getOwnState();
  }

  getOwnState(){
    return {
      value : store.getState()[this.props.caption]
    }
  }

  onIncrementClick(){
    store.dispatch(Actions.increment(this.props.caption)) //dispatch方法分发action
  }

  onDecrementClick(){
    store.dispatch(Actions.decrement(this.props.caption)) //dispatch方法分发action
  }

  onChange(){
    this.setState(this.getOwnState())
  }

  //装载过程
  componentDidMount(){
    store.subscribe(this.onChange)
  }

  //更新过程
  shouldComponentUpdate(nextProps,nextState){
    return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
  }

  //卸载过程
  componentWillUnmount(){
    store.unsubscribe(this.onChange)
  }

  render() {
    return (
      <div>
        <button style={buttonStyle} onClick={this.onIncrementClick}>+</button>
        <button style={buttonStyle} onClick={this.onDecrementClick}>-</button>
        <span>{this.props.caption}: {this.state.value}</span>
      </div>
    );
  }
}

export default Counter
