import React, {Component} from 'react';
import store from '../Store';
import reducer from '../Reducer';
import * as Actions from './Actions.js';

class Counter extends Component{
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    onChange(){
        this.setState(this.getOwnState());
    }

    getOwnState(){
        return { value: store.getState()[this.props.caption] };
    }

    onClickIncrementButton(){
        store.dispatch(Actions.increment(this.props.caption));
    }

    onClickDecrementButton(){
        store.dispatch(Actions.decrement(this.props.caption));
    }

    //装载过程的函数
    componentDidMount(){
        store.subscribe(this.onChange);
    }

    //更新过程的函数
    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.caption !== this.props.caption) || (nextState.sum !== this.state.sum);
    }

    //卸载过程的函数
    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    render(){
        return (
            <div>
                <button onClick = {this.onClickIncrementButton}>+</button>
                <button onClick = {this.onClickDecrementButton}>-</button>
                <span>{this.props.caption} Count: {this.state.count}</span>
            </div>
        );
    }
}

export default Counter;