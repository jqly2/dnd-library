import React, { Component } from 'react';
import Cards from './components/cards.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Compendium</h1>
        </header>
        <Cards />
      </div>
    );
  }
}

export default App;
