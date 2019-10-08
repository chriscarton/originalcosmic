import React, { Component } from 'react';
import './Home.scss';

import Typed from 'typed.js';

import ocskills from '../../assets/videos/ocskills.mp4';

export class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let strings = document.querySelector('#typedStrings').textContent;

        var typed = new Typed('#typed', {
            strings: [strings],
            typeSpeed: 80,
            startDelay: 1000,
            showCursor: false,
            onStringTyped: function () {
                setTimeout(function () {

                    let Intro = document.querySelector('#Intro');
                    Intro.classList.add('to-out');

                    setTimeout(function () {

                        Intro.style.display = 'none';

                        let Video = document.querySelector('#Video');
                        Video.style.display = 'block';

                        let ocSkills = document.querySelector('#ocSkills');
                        ocSkills.play();

                        ocSkills.onended = function () {
                            //alert("The video has ended");
                            Video.style.display = 'none';
                            Intro.style.display = 'block';

                            setTimeout(function () {
                                Intro.classList.remove('to-out');
                            },1000);
                            //C'est là que ça se passe
                        };

                    }, 3500);

                }, 1000);
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
                    <h1 id="typedStrings">
                        Original Cosmic {'<br>'}
                        est un {'<br>'}
                        studio de design {'<br>'}
                        graphique {'<br>'}
                        et d'animation {'<br>'}
                        basé à Lille.{'<br>'}
                    </h1>
                    <div id="typed" className="title"></div>
                </div>
                <div id="Video">
                    <video
                        id="ocSkills"
                        className="media-video"
                        onLoadedData={(e) => this.hideLoader()}
                    >
                        <source src={ocskills} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                </div>
            </div>
        )
    }
}

export default Home
