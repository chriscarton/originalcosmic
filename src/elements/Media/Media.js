import React, { Component } from 'react';
import parse from 'html-react-parser';
import loader from '../../assets/img/loader.gif';

import './Media.scss';

export class Media extends Component {


    

    render() {

        let index = this.props.index;
        let media = this.props.media;

        //On va voir...
        //let versions = ['320','600','960','1280'];

        return (
            <div
                className={`media media${index}`}
                style={{
                    animationDelay: index * 0.75 + 's'
                }}
            >
                {media.type === 'image' &&
                                            
                    <img 
                        srcSet={media.versions.map((w) => (
                            '/img/medias/' + w + '/' + media.src + ' ' + w + 'w'
                        ))} 
                        src={`/img/medias/${media.src}`} 
                        alt="" 
                        className="original" 
                    />
                    
                }
                {media.type === 'video' &&
                    <div className="video">
                        {media.src}
                    </div>
                }
                {media.type === 'videogif' &&
                    <video
                        className="videogif"
                        autoPlay 
                        loop
                    >
                        <source 
                            src={'/img/medias/'+media.src} 
                            type="video/mp4" 
                        />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
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
