import React, { Component } from 'react';
import './Studiocontact.scss';
import StudioContent from '../../contents/Studio/Studio.js';

export class Studiocontact extends Component {
    render() {
        return (
            <div className="page" id="Studiocontact">
                <div className="grid">
                    
                    <article>
                        {StudioContent}
                    </article>
                    <div id="Denis">
                        <img src="/img/team/DENIS.jpg"/>
                    </div>
                    <div id="Adrien">
                        <img src="/img/team/ADRIEN.jpg" />
                    </div>
                    
                    <div id="Romain">
                        <img src="/img/team/ROMAIN.jpg" />
                    </div>
                    <div id="Julien">
                        <img src="/img/team/JULIEN.jpg" />
                    </div>
                    
                    <div id="Raph">
                        <img src="/img/team/RAPH.jpg" />
                    </div>
                    <div id="Frank">
                        <img src="/img/team/FRANK.jpg" />
                    </div>
                    <div id="Chris">
                        <img src="/img/team/CHRIS.jpg" />
                    </div>
                    <div id="Emma">
                        <img src="/img/team/EMMA.jpg" />
                    </div>

                </div>
            </div>
        )
    }
}

export default Studiocontact
