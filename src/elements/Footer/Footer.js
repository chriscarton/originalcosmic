import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export class Footer extends Component {
    render() {
        return (
            <footer id="Footer">
                <div className="content">
                    <nav id="Socials">
                        <a target="_blank" href="https://www.facebook.com/OriginalCosmic">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/original_cosmic_studio/">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
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
