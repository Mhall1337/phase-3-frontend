import './App.css';
import LaunchScreen from './components/LaunchScreen';
import Home from './components/Home';
import React, { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
        <Home />
        <LaunchScreen />
    </div>
  );
}

export default App;
