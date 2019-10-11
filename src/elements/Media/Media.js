import React, { Component } from 'react';
import parse from 'html-react-parser';

export class Media extends Component {
    render() {

        let index = this.props.index;
        let media = this.props.media;

        return (
            <div
                key={index}
                className={`media media${index}`}
                style={{
                    animationDelay: index * 0.75 + 's'
                }}
            >
                {media.type === 'image' &&
                    // <Image src={media.src}/>
                    // <Img src={media.src} loader={loading} />

                    <img src={`/img/medias/${media.src}`} alt={media.src} />
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
