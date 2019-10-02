import React, { Component } from 'react'
import './Projects.scss';
import data from './data.js';

export class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            projects:data
        }
    }

    render() {
        return (
            <div id="Projects">
                <div className="items">
                    {this.state.projects.map((item)=>(
                        <div className={`item item-${item.id}`} key={item.id}>
                            <img src={`/img/projects/${item.img}`} alt="{item.img}"/>
                        </div>
                    ))}
                </div>
                <div>
                    Tous nos projets (lien)
                </div>
            </div>
        )
    }
}

export default Projects
