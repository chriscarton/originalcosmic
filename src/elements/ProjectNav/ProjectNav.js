import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './ProjectNav.scss';


export class ProjectNav extends Component {

    
    

    render() {
        
        return (
            <Link 
                to={{
                    pathname:this.props.link,
                    state:'flushDeal'
                }}
                className={`nav nav-${this.props.direction}`}
            >
                <i className={`fa fa-arrow-${this.props.arrow}`}></i>
                &nbsp;{this.props.text}
            </Link>
        )
    }
}

export default ProjectNav
