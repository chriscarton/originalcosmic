import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './ProjectNav.scss';
import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';


export class ProjectNav extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            direction: props.direction
        }
    }

    render() {
        let prevItem = {
            id:1
        }
        let direction = this.state.direction;
        
        let icon = '';
        let text = '';

        if(direction==="prev"){
            icon = '<i className="fa fa-arrow-left"></i>';
            text = "Projet précédent";
        }else if(direction==="next"){
            icon = '<i className="fa fa-arrow-right"></i>';
            text = "Projet suivant";
        }
        return (
            <Link to={`/projet/${prevItem.id}`} className={`nav nav-${direction}`}>
                {/* Pour une raison étrange mon icone ne s'affiche pas*/}
                {parse(icon)}
                &nbsp;{text}
            </Link>
        )
    }
}

export default ProjectNav
