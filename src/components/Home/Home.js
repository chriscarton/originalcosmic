import React, { Component } from 'react';
import './Home.scss';

import Typed from 'typed.js';


export class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let strings = document.querySelector('#typedStrings').textContent;

        var typed = new Typed('#typed', {
            strings: [strings],
            typeSpeed: 50,
            startDelay: 2500,
            showCursor: false,
            
            onStringTyped: function () {

                setTimeout(function () {

                    let Intro = document.querySelector('#Intro');

                    if(Intro){

                        Intro.classList.add('to-out');

                        setTimeout(function () {

                            Intro.style.display = 'none';

                            let Video = document.querySelector('#Video');
                            Video.style.display = 'block';

                            let ocSkills = document.querySelector('#ocSkills');
                            
                            if(ocSkills.readyState === 4){
                                ocSkills.play();
                            }else{
                                ocSkills.onloadeddata = function () {
                                    ocSkills.play();
                                }
                            }

                            ocSkills.onended = function () {

                                Video.style.display = 'none';
                                Intro.style.display = 'block';

                                if(Intro){

                                    setTimeout(function () {
                                        Intro.classList.remove('to-out');
                                    }, 1000);

                                }

                            };
                        
                        }, 3500);

                    }

                }, 2500);
                

            }
            
        });

    }

    hideLoader() {
        /*
        //Bon ça c'est de l'ancien code...
        let ban = document.querySelector('.ban');
        let camera_container = ban.querySelector('.camera-container');
        camera_container.classList.add('disapear');
        */
    }



    render() {
        return (
            <div id="Home">
                <div id="Intro">
                    <h1 className="title">
                        Original Cosmic
                    </h1>
                    <div id="typedStrings">
                        studio de design graphique {'<br>'}
                        ^1000et d'animation
                    </div>
                    <div id="typed"></div>
                </div>
                <div id="Video">
                    <video
                        id="ocSkills"
                        className="media-video"
                        controls
                    >
                        <source src={process.env.PUBLIC_URL + '/video/ocskills.mp4'} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                        
                    </video>
                </div>
            </div>
        )
    }
}

export default Home
