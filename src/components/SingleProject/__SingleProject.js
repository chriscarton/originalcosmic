import React, { Component } from 'react'
import data from '../Projects/data.js';
import { Link } from 'react-router-dom';
import './SingleProject.scss';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import parse from 'html-react-parser';


export class SingleProject extends Component {
    constructor(props) {

        super(props);
        /*
        let paramSlug = props.match.params.slug;
        let items = data.filter(item => item.slug == paramSlug);
        let item = items[0];
        */
       /*
        this.state = {
            items: data,
            //item:item
        }
        */
        //this.setState({item:item});

        
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        let paramSlug = this.props.match.params.slug;
        
        let items = data.filter(item => item.slug == paramSlug);
        let item = items[0];

        this.setState({ item: item });
        
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
    //{this.cartouche()}
    render() {

        let item = this.state.item;
        console.log(item);

        return (
            <div id="singleProject">
                {item.medias.length > 0 &&
                    <div className={`medias medias-${item.medias.length}`}>
                        
                        {item.medias.map((media,index) => (
                            <div 
                                className={`media media-${index}`}
                                style={{ gridArea: `media${index}`}}
                                >
                                {media.type === 'image' && 
                                    <img src={media.src} alt="" />
                                }
                                {media.type === 'video' &&
                                    <div className="video">
                                        {media.src}
                                    </div>
                                }
                                {media.type === 'playlist' &&
                                    <div className="playlist">
                                        {parse(media.src)}
                                    </div>
                                }
                            </div>
                        ))}

                        <ProjectNav direction="prev" arrow="left" link={`/projet/${item.slug}`} text="Projet précédent" />

                        <ProjectNav direction="next" arrow="right" link={`/projet/${item.slug}`} text="Projet suivant"/>

                        <div className="blank">{/* Just an empty color placeholder for grid layout */}</div>
                        <div className="black">{/* Just an empty color placeholder for grid layout */}</div>
                        <div className="yellow">{/* Just an empty color placeholder for grid layout */}</div>
                    </div>
                }
            </div>
        )
    }
}

export default SingleProject