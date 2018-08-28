import React, { Component } from 'react'
import store from '../Store'

class Summary extends Component {
  constructor(props){
    super(props)

    this.getOwnState = this.getOwnState.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.getOwnState()
  }

  getOwnState(){
    const state = store.getState()
    let element = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        element += state[key];
      }
    }
    return {
      sum : element
    }
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
    return (nextState.sum !== this.state.sum)
  }

  //卸载过程
  componentWillUnmount(){
    store.unsubscribe(this.onChange)
  }

  render(){
    return (
      <div>
        Total Count: {this.state.sum}
      </div>
    )
  }
}

export default Summary