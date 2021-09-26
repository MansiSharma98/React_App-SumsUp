import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
        
    constructor(){
        super();
        this.state={
            counter : 0
        }

        this.increment= this.increment.bind(this);
        this.decrement= this.decrement.bind(this);
        this.reset= this.reset.bind(this);
    }

    increment(by){ 
        //console.log(`increment from parent -${by}`)
        //update state
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by} //+ this.props.by
            }
         );
    }

    decrement(by){ 
        //console.log(`increment from parent -${by}`)
        //update state
        this.setState(
            (prevState) => {
            return {counter: prevState.counter - by} //+ this.props.by
            }
         );
    }

    reset(){
        this.setState({counter:0});
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }

}

class CounterButton extends Component {
    //define initial state
    constructor(){
        super();
        this.state={
            counter : 0
        }

        this.increment= this.increment.bind(this);
        this.decrement= this.decrement.bind(this);
    }
    render(){
        return(
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
               
            </div>
        )
    }
    increment(){ //update state
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by);
        }

    decrement(){
        this.setState({
            counter: this.state.counter + this.props.by
        });
            this.props.decrementMethod(this.props.by);     
    }
}
Counter.defaultProps= {
    by: 1
}

Counter.propTypes = {
    by : PropTypes.number
}

export default Counter