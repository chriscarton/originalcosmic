import React, { Component } from 'react';
import parse from 'html-react-parser';
import loader from '../../assets/img/loader.gif';

import './Media.scss';

export class Media extends Component {


    imageLoaded(e){
        let parent = e.target.parentElement;

        let loaderOverlay = parent.querySelector('.loader-overlay');
        loaderOverlay.style.display = "none";

        let placeholder = parent.querySelector('.placeholder');
        placeholder.style.display="none";

        let original = e.target;
        original.style.display="block";

    }

    render() {

        let index = this.props.index;
        let media = this.props.media;

        return (
            <div
                className={`media media${index}`}
                style={{
                    animationDelay: index * 0.75 + 's'
                }}
            >
                {media.type === 'image' &&
                    <>
                        <div className="loader-overlay">
                            <img src={loader} alt=""/>
                        </div>
                        <img 
                            src={`/img/medias/placeholders/${media.src}`} 
                            alt={media.src} 
                            className="placeholder" 
                        />
                        <img 
                            src={`/img/medias/${media.src}`} 
                            alt={media.src} 
                            className="original" 
                            onLoad={(e)=>this.imageLoaded(e)}
                        />
                    </>
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
                {media.type === 'iframe' &&
                    <div className="iframe-container">
                        {parse(media.src)}
                    </div>
                }
            </div>
        )
    }
}

export default Media
