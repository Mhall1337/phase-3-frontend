import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React, { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch("http://localhost:9292/launches")
    .then(r => r.json())
    .then(launches => console.log(launches))
  },[])

  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
