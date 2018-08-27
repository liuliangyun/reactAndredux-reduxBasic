import React, {Component} from 'react';
import store from '../Store';

class Summary extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    onChange(){
        this.setState(this.getOwnState());
    }

    getOwnState(){
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return { sum: sum };
    }

    //装载过程的函数
    componentDidMount(){
        store.subscribe(this.onChange);
    }

    //更新过程的函数
    shouldComponentUpdate(nextProps, nextState){
        return nextState.sum !== this.state.sum;
    }

    //卸载过程的函数
    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    render(){
        return (
            <div>Total Count:  {this.state.sum}</div>
        );
    }
}

export default Summary;