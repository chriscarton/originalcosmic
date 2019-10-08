import React, { Component } from 'react'
import data from '../Projects/data.js';
import './SingleProject.scss';
import parse from 'html-react-parser';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';

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

        this.smallHeader();
        
    }

    smallHeader(){
        let header = document.querySelector('#Header');
        header.classList.add('small-header')
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
                {this.state.match.content && 
                <div className="content">
                    {parse(this.state.match.content)}
                </div>
                }
            </div>
        );
    }
    
    //Je ne sais pas si j'ai encore besoin de ça.
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
                    <div className={`grid ${match.slug}`}>
                        {this.cartouche()}
                
                        {match.medias.length > 0 && match.medias.map((media, index) => (
                            <div
                                key={index}
                                className={`media media${index}`}
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

                        {prev && 
                            <ProjectNav direction="prev" arrow="left" link={`/projet/${prev.slug}`} text="Projet précédent" />
                        }
                        {next && 
                           <ProjectNav direction="next" arrow="right" link={`/projet/${next.slug}`} text="Projet suivant" />
                        }
                        
                        <div className="blank">{/* Just an empty color placeholder for grid layout */}</div>
                        <div className="black">{/* Just an empty color placeholder for grid layout */}</div>
                        <div className="yellow">{/* Just an empty color placeholder for grid layout */}</div>
                    </div>
            </div>
        )
    }
}

export default SingleProject
