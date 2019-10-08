import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import './Footer.scss';

export class Footer extends Component {

    constructor(props){
        super(props);


        /*
        
        //Si on fait un lien de retour
        window.scroll({
            top: y,
            left: 0,
            behavior: 'smooth'
        });

        //Faire partir la fusée 
        //Et après faire le scroll...
        */
    }

    render() {
        return (
            <footer id="Footer">
                <div className="content">
                    <nav id="Socials">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/OriginalCosmic">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/original_cosmic_studio/">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        
                    </nav>
                    <div className="text">
                        © 2019 / Original Cosmic <br/>
                        Visual Arts Studio
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer
