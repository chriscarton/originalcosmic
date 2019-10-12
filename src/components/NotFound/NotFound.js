import React, { Component } from 'react';
import './NotFound.scss';

import { Link } from 'react-router-dom';

export class NotFound extends Component {
    render() {
        return (
            <div id="notFound">
                <div className="inner">
                    <h1>Erreur <span className="numbers">404</span>.</h1>
                    <p>La page n'a pas été trouvée.</p>
                    <Link to="/" className="backlink">
                        <i className="fa fa-arrow-left"></i> Retour
                    </Link>
                </div>
            </div>
        )
    }
}

export default NotFound
