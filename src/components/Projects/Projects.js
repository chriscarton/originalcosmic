import React, { Component } from 'react'
import './Projects.scss';
import data from './data.js';
import { Link } from 'react-router-dom';
import AllProjects from '../AllProjects/AllProjects.js';

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
                        <div className={`item ${item.slug}`} key={item.id}>
                            <Link to={`projet/${item.slug}`}>
                                

                                {item.cover.type=="image" &&
                                    <img src={`/img/projects/${item.cover.src}`} alt=""/>
                                }
                                {item.cover.type == "videogif" &&
                                    <video
                                        className="videogif"
                                        autoPlay
                                        loop
                                    >
                                        <source
                                            src={'/img/projects/' + item.cover.src}
                                            type="video/mp4"
                                        />
                                        Votre navigateur ne supporte pas la vidéo.
                                    </video>
                                }

                            </Link>
                        </div>
                    ))}
                </div>
                <div className="all-projects">
                    <Link to="/projets">
                        Tous nos projets
                    </Link>
                </div>
            </div>
        )
    }
}

export default Projects
