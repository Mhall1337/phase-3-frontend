import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from 'react';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
