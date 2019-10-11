import React, { Component } from 'react';
import './Tests.scss';
import data from '../Projects/data.js';

export class Tests extends Component {

    constructor(props){
        super(props);
    }

    render() {

        let myJSON = JSON.stringify(data,null,'\t');
        console.log(myJSON);

        return (
            <div id="Tests">
                {myJSON}
            </div>
        )
    }
}

/*

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
*/

export default Tests
