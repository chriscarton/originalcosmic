import React, { Component } from 'react';
import './Header.scss';

import yellogo from '../../assets/img/yellogo.png';

export class Header extends Component {
    render() {
        return (
            <header id="Header">
                <div className="part">
                    <img src={yellogo} alt="Logo de notre super agence!"/>
                </div>
                <div className="part menu">
                    Studio / Contact
                </div>
            </header>
        )
    }
}

export default Header
