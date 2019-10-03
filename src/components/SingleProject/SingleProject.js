import React, { Component } from 'react'
import data from '../Projects/data.js';
import { Link } from 'react-router-dom';
import './SingleProject.scss';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';

export class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: data
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        let paramId = this.props.match.params.id;
        
        let items = this.state.items.filter(item => item.id == paramId);
        let item = items[0];

        let prevItems = this.state.items.filter(item => item.id == paramId + 1);
        let prevItem = prevItems[0];

        let nextItems = this.state.items.filter(item => item.id == paramId+1);
        let nextItem = nextItems[0];



        return (
            <div id="singleProject">
                <div className="cover">

                    <h1 className="title">{item.name}</h1>
                    <img src={item.cover} alt=""/>
                    
                </div>
                <div className="medias">
                    <div className="cartouche">
                        <div className="content">
                            {item.content}
                        </div>
                    </div>
                    {item.medias.map((media) => (
                        <div className="media">
                            <img src={media} alt="" />
                        </div>
                    ))}

                    {/* On pourrait en faire un composant (elements) */}
                    
                    <ProjectNav direction="prev"/>
                    <ProjectNav direction="next"/>


                </div>
            </div>
        )
    }
}

export default SingleProject
