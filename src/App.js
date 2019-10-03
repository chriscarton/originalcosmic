import React from 'react';
import logo from './logo.svg';
import './App.scss';

//Import des éléments (header, footer, etc...)
import Header from './elements/Header/Header.js';
import Footer from './elements/Footer/Footer.js';

//Import des pages (c'est quand même le plus important)
import Homepage from './pages/Homepage/Homepage.js';
import Studiocontact from './pages/Studiocontact/Studiocontact.js';

//Import du composant allProjects (qui n'est pas vraiment une page...)
import AllProjects from './components/AllProjects/AllProjects.js';

//On va faire nos jolies petites routes.
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';

//On met du font awesome
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <main id="mainContent">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/studio" exact component={Studiocontact} />
            <Route path="/projets" exact component={AllProjects} />

            
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
