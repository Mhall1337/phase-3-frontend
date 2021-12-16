import './App.css';
import LaunchScreen from './components/LaunchScreen';
import Home from './components/Home';
import React, { useEffect, useState } from 'react';

function App() {
  const [launches, setLaunches] = useState()
  useEffect(()=>{
    fetch("http://localhost:9292/launches")
    .then((r) => r.json())
    .then(launches => setLaunches(launches))
  },[])

  return (
    <div className="App">
        <Home />
        <LaunchScreen launches ={launches}/>
    </div>
  );
}

export default App;
