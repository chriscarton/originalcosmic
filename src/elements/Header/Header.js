import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import yellogo from '../../assets/img/yellogo.png';

export class Header extends Component {
    render() {
        return (
            <header id="Header">
                <div className="part">
                    <img src={yellogo} alt="Logo de notre super agence!"/>
                </div>
                <div className="part menu">
                    <Link className="arrow-link" to="/studio">Studio / Contact</Link>
                </div>
            </header>
        )
    }
}

export default Header
