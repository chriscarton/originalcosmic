import React, { Component } from 'react';
import './Homepage.scss';

//Import des composants
import Home from '../../components/Home/Home.js';
import Projects from '../../components/Projects/Projects.js';

export class Homepage extends Component {

    constructor(props){
        super(props);
    }
    

    componentDidMount(){
        this.bigHeader();
    }

    bigHeader() {
        let header = document.querySelector('#Header');
        header.classList.remove('small-header')
    }

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
