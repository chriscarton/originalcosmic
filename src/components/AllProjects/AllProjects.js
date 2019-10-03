import React, { Component } from 'react';
import './AllProjects.scss';
import data from '../Projects/data.js';


export class AllProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: data
        }
    }

    render() {
        return (
            <div id="allProjects">
                <div className="grid items">
                    {this.state.projects.map((item) => (
                        <div className={`item item-${item.id}`} key={item.id}>
                            <img src={`/img/projects/${item.img}`} alt="{item.img}" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default AllProjects
