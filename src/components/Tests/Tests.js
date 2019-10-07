import React, { Component } from 'react';
import './Tests.scss';
import data from '../Projects/data.js';

export class Tests extends Component {
    render() {
        return (
            <div id="Tests">
                Voilà mes tests...
                <p>Afficher les slugs de data.js</p>
                <hr/>
                {data.map(function(project){
                    return(
                    <div>
                        {project.slug}
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Tests
