import React from 'react';
import logo from './logo.svg';
import './App.scss';



//Import des éléments (header, footer, etc...)
import Header from './elements/Header/Header.js';

//Import des pages (c'est quand même le plus important)
import Homepage from './pages/Homepage/Homepage.js';
import Studiocontact from './pages/Studiocontact/Studiocontact.js';

//Et enfin on va faire nos jolies petites routes.
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <main id="mainContent">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/studio" exact component={Studiocontact} />

            
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
