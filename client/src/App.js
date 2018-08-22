import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Articles from "./Articles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Articles />
      </div>
    );
  }
}

export default App;
