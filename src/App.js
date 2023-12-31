import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(){
    this.setState(state => {
      return{
      count: state.count+1
      }
    });
  }

  decrement(){
    this.setState(state => {
      return{
        count:state.count-1
        }
      });

  }

  reset(){
    this.setState({count: 0});
  }
  // Change code above this line
  render() {
    return (

    <div className='App-header'>
      <h2>This is my simple counter</h2>
      <div className='App'>
        <button className='btn' onClick={this.increment}>Increment!</button>
        <button className='btn' onClick={this.decrement}>Decrement!</button>
        <button className='btn' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    </div>
    );
  }
};


export default App;
