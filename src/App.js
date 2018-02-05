import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Box from './Box';

const transformUpper = (s) => s.toUpperCase();
const transformLower = (s) => s.toLowerCase();
const transformConfused = (s) => s.split(' ').join('...');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div className="App">
        <Box displayText={this.state.text}
             changeHandler={this._setNewText}
        />
        <Box displayText={this.state.text}
             transformText={transformUpper}
        />
        <Box displayText={this.state.text}
             transformText={transformLower}
        />
        <Box displayText={this.state.text}
             transformText={transformConfused}
        />
      </div>
    );
  }

  _setNewText = (newText) => {
    this.setState({
      text: newText
    });
  }

}

export default App;
