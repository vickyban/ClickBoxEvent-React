import React, { Component } from 'react';
import './App.css';
import Container from './Components/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container count={4}/>
      </div>
    );
  }
}

export default App;
