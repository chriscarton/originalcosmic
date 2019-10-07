import React, { Component } from 'react'
import data from '../Projects/data.js';
//import { Link } from 'react-router-dom';
import './SingleProject.scss';
//import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import parse from 'html-react-parser';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import { Link } from 'react-router-dom';

//Bon ça il faut voir... 
//https://www.npmjs.com/package/react-hashchange
//Pour faire fonctionne le retour
//import HashChange from "react-hashchange";

export class SingleProject extends Component {
    constructor(props) {

        super(props);

        let paramSlug = this.props.match.params.slug;

        let results = data.filter(function (entry,index) {
            if (entry.slug === paramSlug) {

                entry.prev = data[index-1];
                entry.next = data[index+1];

                return entry;
            }
        });
        let match = results[0];
        
        this.state = {
            match: match,
            isNew: false
        }
        
        //this.handleNext = this.handleNext.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        //alert('didMount');
        
    }


    //fuck hell ben ça ça marche...
    componentWillReceiveProps(nextProps) {
        let paramSlug = nextProps.match.params.slug;

        console.log(paramSlug);


        let results = data.filter(function (entry, index) {
            if (entry.slug === paramSlug) {

                entry.prev = data[index - 1];
                entry.next = data[index + 1];

                return entry;
            }
        });
        let match = results[0];

        this.setState({
            match: match
        });
    }





    cartouche(){
        return(
            <div className="cartouche">
                <div className="content">
                    {parse(this.state.match.content)}
                </div>
            </div>
        );
    }
    /*
    handleNext(paramSlug){
        //let paramSlug = this.props.match.params.slug;

        console.log(paramSlug);

       
        let results = data.filter(function (data) {
            if (data.slug === paramSlug) {
                return data;
            }
        });
        let match = results[0];
        
        this.setState({
            match:match
        });
        
    }
    */

    shouldComponentUpdate() { 
        return true; 
    }

    render() {


        let match = this.state.match;
        
        //Bon, à un moment, ça va ne pas exister... 
        //Là il faudra gérer...

        let prev = match.prev;
        let next = match.next;

        return (
            <div id="singleProject">
                {match.medias.length > 0 &&
                    <div className={`medias medias-${match.medias.length}`}>
                        {this.cartouche()}
                        {match.medias.map((media, index) => (
                            <div
                                key={index}
                                className={`media media-${index}`}
                                style={{ gridArea: `media${index}` }}
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
                        <ProjectNav direction="prev" arrow="left" link={`/projet/${prev.slug}`} text="Projet précédent" />

                        <ProjectNav direction="next" arrow="right" link={`/projet/${next.slug}`} text="Projet suivant" />
                        {/* ok ce lien là fonctionne... */}
                        {/*
                        <Link 
                            to='/projet/afrika-glam' 
                            className="nav nav-next" 
                            // onClick={(paramSlug) => this.handlePrev('afrika-glam')}
                        >
                            <i className="fa fa-arrow-left"></i>
                            &nbsp;Projet précédent
                        </Link>

                        <Link 
                            to='/projet/afrika-glam' 
                            className="nav nav-next" 
                            // onClick={(paramSlug) => this.handleNext('afrika-glam')}
                        >
                            <i className="fa fa-arrow-right"></i>
                            &nbsp;Projet suivant
                        </Link>
                        */}

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
