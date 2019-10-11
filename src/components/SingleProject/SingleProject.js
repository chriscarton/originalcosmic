import React, { Component } from 'react'
import data from '../Projects/data.js';
import './SingleProject.scss';
import parse from 'html-react-parser';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import Media from '../../elements/Media/Media.js';

import loader from '../../assets/img/loader.gif';

//https://www.npmjs.com/package/react-lazy-load
import LazyLoad from 'react-lazy-load';

//import Image from '../../elements/Image/Image.js';
import Img from 'react-image';

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
            isNew: false,
            //isLoading:true
        }
        
        //this.handleNext = this.handleNext.bind(this);

    }



    componentDidMount() {
        
        
        this.smallHeader();


        //window.addEventListener('load', this.handleLoad);


     

    }

    componentWillUpdate(){
        console.log('componentWillUpdate!');

        let imgs = document.querySelectorAll('#singleProject img');

        if(imgs){
            imgs.forEach(function(img){
                img.removeAttribute('src')
            });
        }
    }

    componentDidUpdate(){
        console.log('componentDidUpdate!');
        setTimeout(function(){
            window.scrollTo(0, 0);
        },1000);
        
    }

    smallHeader(){
        let header = document.querySelector('#Header');
        header.classList.add('small-header')
    }


    //fuck hell ben ça ça marche...
    componentWillReceiveProps(nextProps) {

        window.scrollTo(0, 0);

        let paramSlug = nextProps.match.params.slug;

       


        let results = data.filter(function (entry, index) {
            if (entry.slug === paramSlug) {

                entry.prev = data[index - 1];
                entry.next = data[index + 1];

                return entry;
            }
        });
        let match = results[0];

        setTimeout(()=>{
            this.setState({
                match: match
            });
        },1000);
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

    imgOnLoad(e){
        e.target.classList.add('is-loaded');
    }

    render() {

        let isLoading = this.state.isLoading;
        let match = this.state.match;
        
        let prev = match.prev;
        let next = match.next;
        
        let loading = <img src={loader} className="loader" alt="" />;

        return (
            <div id="singleProject">
                {this.state.isLoading ? (    
                    <div id="ocLoaderContainer">
                        <img src={loader} alt=""/>
                    </div>
                ):(
                <div id="projectGrid" className={`grid ${match.slug}`}>
                    {this.cartouche()}
            
                    {match.medias.length > 0 && match.medias.map((media, index) => (
                        
                        <Media
                            key={index}
                            index={index}
                            media={media}
                        />

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
                )}
            </div>
        )
    }
}

export default SingleProject
