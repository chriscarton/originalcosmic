import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> */}
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
