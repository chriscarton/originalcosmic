import React, { Component } from 'react';
import './Home.scss';

import Typed from 'typed.js';

import ocskills3 from '../../assets/videos/ocskills3.mp4';

export class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let strings = document.querySelector('#typedStrings').textContent;

        /*
        //Smart Backspacing
        var typed = new Typed('.element', {
            //strings: ['This is a JavaScript library', 'This is an ES6 module'],
            strings: [
                'Chez Original Cosmic,^1000 on est gentils.', 
                'Chez Original Cosmic,^1000 il y a de l'animation.',
                'Chez Original Cosmic,^1000 il y a du design graphique.',
                'Chez Original Cosmic,^1000 on fait aussi du développement web.^1000',
                ''
                //Une chaine vide pour finir (est-ce que ça va effacer?)
            ],
            smartBackspace: true // Default value
        });
        */

        var typed = new Typed('#typed', {
            strings: [strings],
            typeSpeed: 50,
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
                        
                        //Tester ça
                        //ocSkills.addEventListener("onloadeddata",function(){
                            ocSkills.play();

                            ocSkills.onended = function () {

                                Video.style.display = 'none';
                                Intro.style.display = 'block';

                                if(Intro){

                                    setTimeout(function () {
                                        Intro.classList.remove('to-out');
                                    }, 1000);

                                }

                            };
                        //});
                            

                    
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
                        Original Cosmic^2500 {'<br>'}
                        est un {'<br>'}
                        studio de design^1000.^1000.^1000. {'<br>'}
                        graphique {'<br>'}
                        et^500 d'animation^1000.^1000.^1000. {'<br>'}
                        ^1000 basé à Lille.{'<br>'}
                    </h1>
                    <div id="typed" className="title"></div>
                </div>
                <div id="Video">
                    <video
                        id="ocSkills"
                        className="media-video"
                        onLoadedData={(e) => this.hideLoader()}
                    >
                        <source src={ocskills3} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                        {/* C'est bizzare mais à chaque yarn start la vidéo ne fonctionne plus il faut la recopier dans le même dossier et la réimporter */}
                    </video>
                </div>
            </div>
        )
    }
}

export default Home
