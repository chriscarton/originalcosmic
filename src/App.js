import React from 'react';
//import logo from './logo.svg';
import './App.scss';

//Import des éléments (header, footer, etc...)
import Header from './elements/Header/Header.js';
import Footer from './elements/Footer/Footer.js';

//Import du composant pour les Tests divers
import Tests from './components/Tests/Tests.js';

//Import des pages (c'est quand même le plus important)
import Homepage from './pages/Homepage/Homepage.js';
import Studiocontact from './pages/Studiocontact/Studiocontact.js';

//Import du composant allProjects (qui n'est pas vraiment une page...)
import AllProjects from './components/AllProjects/AllProjects.js';
import SingleProject from './components/SingleProject/SingleProject.js';


//On va faire nos jolies petites routes.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Link, HashRouter...

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
            <Route path="/projet/:slug" exact component={SingleProject} />

            {/* 
            <Route path='/projet/:slug' component={(props) => (
              <SingleProject timestamp={new Date().toString()} {...props} />
            )} />
            */}

            <Route path="/tests" exact component={Tests} />

          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
