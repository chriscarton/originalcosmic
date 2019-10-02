import React, { Component } from 'react';
import './Homepage.scss';

//Import des composants
import Home from '../../components/Home/Home.js';
import Projects from '../../components/Projects/Projects.js';

export class Homepage extends Component {
    render() {
        return (
            <div className="page" id="Homepage">
                <Home/>
                <Projects/>
            </div>
        )
    }
}

export default Homepage
