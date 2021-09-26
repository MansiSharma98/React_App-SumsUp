import React, { Component } from 'react';
import  FirstComponent from './components/learning-components/FirstComponent'
import SecondComponent from './components/learning-components/SecondComponent'
import ThirdComponet from './components/learning-components/ThirdComponent'
import Counter from './components/counters/Counter';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}



class LearningComponents extends Component{
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent> </SecondComponent>
        <ThirdComponet></ThirdComponet>
      </div>
    );
    }
}
export default Counter;
