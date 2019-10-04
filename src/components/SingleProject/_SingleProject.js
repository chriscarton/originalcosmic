import React, { Component } from 'react'
import data from '../Projects/data.js';
import { Link } from 'react-router-dom';
import './SingleProject.scss';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import parse from 'html-react-parser';


export class SingleProject extends Component {
    constructor(props) {
        super(props);

        let paramId = props.match.params.id;
        let items = data.filter(item => item.id == paramId);
        let item = items[0];

        this.state = {
            items: data,
            item:item
        }
        
        this.setState({item:item});

        
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    cartouche(){
        return(
            <div className="cartouche">
                <div className="content">
                    {parse(this.state.item.content)}
                </div>
            </div>
        );
    }

    render() {

        

        let item = this.state.item;


        //let firstMedia = item.medias[0];
        //console.log(firstMedia);

        return (
            <div id="singleProject">

                <div className="cover">

                    <h1 className="title">{item.name}</h1>
                    <img src={item.cover} alt=""/>
                    
                    {!item.medias.length &&
                        <div>

                            {this.cartouche()}
                            <ProjectNav direction="prev" arrow="left" link={`/projet/${item.id - 1}`} text="Projet précédent" />

                            <ProjectNav direction="next" arrow="right" link={`/projet/${item.id + 1}`} text="Projet suivant" />
                        </div>
                    }
                    
                </div>
                                    
                {item.medias.length > 0 &&
                    <div className={`medias medias-${item.medias.length}`}>
                        {this.cartouche()}
                        {item.medias.map((media,index) => (
                            <div 
                                className={`media media-${index}`}
                                style={{ gridArea: `media${index}`}}
                                >
                                <img src={media} alt="" />
                            </div>
                        ))}
                        {/* La solution des id -1 et + 1 c'est pas top */}

                        <ProjectNav direction="prev" arrow="left" link={`/projet/${item.id - 1}`} text="Projet précédent" />

                        <ProjectNav direction="next" arrow="right" link={`/projet/${item.id + 1}`} text="Projet suivant"/>

                        <div className="blank"></div>
                    </div>
                }






            </div>
        )
    }
}

export default SingleProject