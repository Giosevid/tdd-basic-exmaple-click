import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      error: false
    }
  }

  incrementCounter = () => {
    if (this.state.error) this.setState({ error: false })
    this.setState({ counter: this.state.counter + 1 })
  }

  decrementCounter = () => {
    if(this.state.counter === 0) {
      this.setState({ error: true })
    } else {
      this.setState({counter: this.state.counter - 1})
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">This is counter currently { this.state.counter }</h1>
        <h2 data-test="error-message" style={{ color: 'red' }}>{this.state.error && 'The counter cannot go below 0'}</h2>
        <button onClick={this.incrementCounter} data-test="increment-button">Increment counter</button>
        <button onClick={this.decrementCounter} data-test="decrement-button">Decrement Counter</button>
      </div>
    );
  }
}

export default App;
