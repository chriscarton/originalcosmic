import React from 'react';
import logo from './logo.svg';
import './App.scss';

//Import des composants
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';

//Import des éléments (header, footer, etc...)
import Header from './elements/Header/Header.js';

//Et enfin on va faire nos jolies petites routes.
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
