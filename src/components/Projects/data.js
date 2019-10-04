let data = [
    {
        id:1,
        name:"Voici mon premier projet",
        img:"001_ALEXLEFOUTST1-960x1440.jpg",
        slug:"",
        medias:[
            ""
        ]
    },
    {
        id: 2,
        name: "Voici mon second projet",
        img:"002_amandaIS-960x1440.jpg",
        slug:"",
        medias:[
            ""
        ]
    },
    {
        id: 3,
        name: "Le déserteur",
        img:"003_LEDESERTEURBAT120160DEF-960x1440.jpg",
        content: "Affiche française pour « 𝗟𝗲 𝗗𝗲́𝘀𝗲𝗿𝘁𝗲𝘂𝗿 » de Maxime Giroux. Avec Martin Dubreuil, Romain Duris, Reda Kateb et SoKo. Production : Metafilms.<hr/>𝗖𝗹𝗶𝗲𝗻𝘁: Ligne 7<br>𝗠𝗶𝘀𝘀𝗶𝗼𝗻 : Print / Multimédia © 2019 𝘖𝘳𝘪𝘨𝘪𝘯𝘢𝘭 𝘊𝘰𝘴𝘮𝘪𝘤",
        slug:"le-deserteur",
        medias:[
            {
                type:'image',
                src:"http://originalcosmic.fr/wp-content/uploads/2019/06/DSRTRFONNW.jpg",
            },
            {
                type:'image',
                src:"http://originalcosmic.fr/wp-content/uploads/2019/05/DSRTRmock1a-480x480.jpg",
            },
            {
                type:'image',
                src:"http://originalcosmic.fr/wp-content/uploads/2019/05/DSRTRmock2a-480x480.jpg",
            },
            {
                type:'image',
                src:"http://originalcosmic.fr/wp-content/uploads/2019/05/DSRTRmock3a-480x480.jpg",
            },
            {   
                type:'image',
                src:"http://originalcosmic.fr/wp-content/uploads/2019/05/DSRTRmock4a-480x480.jpg",
            },
            {
                type:'image',
                src:"http://originalcosmic.fr/wp-content/uploads/2019/05/DSRTRmock5a-480x480.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "Afrika Glam",
        img:"004_afglamoc-2-960x960.jpg",
        content: "AFRIKA GLAM Pour Afrika Box<hr>Direction artistique<br>Photographie<br>Design graphique<br>Print<br>2019",
        slug:"afrika-glam",
        cover:"http://originalcosmic.fr/wp-content/uploads/2019/03/AFGLAMA0PTA-960x960.jpg",
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/03/AFRIKAGLAMPOSTCARD-1440x960.jpg"
            }
        ]
    },
    {
        id: 5,
        name: "Original Cosmic Playlist",
        img:"005_ocp1-768x768.gif",
        content:"Original Cosmic Playlist. Chaque mois, une playlist, une composition visuelle originale.",
        slug:"original-cosmic-playlist",
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/06/ocp1.gif"
            },
            {
                type:"playlist",
                src:"<iframe width='100%' height='300' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/805416213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>"
            }
        ]
    },
    {
        id: 6,
        name: "Paleo",
        img:"006_Gif-1-Paleo-Denis-pour-OC_1-1-768x432.gif",
        content: "PALEO<hr>Animation 2D<br>clip promotionnel<br>Pour Bitteschoen TV<br>2017",
        slug:"paleo",
        medias:[
            {
                type:"video",
                src:"https://www.youtube.com/watch?v=WEjdhLse2Sg&feature=youtu.be"
            }
            //Mettre la video?
        ]
    },
    {
        id: 7,
        name: "The Mice",
        img:"007_themiceprofile-1024x1024.png",
        content: "THE MICE « Incantations »<hr><br>Pochette de disque<br>Photographie<br>Design graphique<br>Clip musical<br>2016",
        slug:"the-mice",
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/02/themicevinyl-1440x960.jpg",
            },
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/02/micecover2-960x960.jpg"
            },
            {
                type:"video",
                src:"https://www.youtube.com/watch?v=F0uWuyqAFoY"
            }
        ]
    },
    {
        id: 8,
        name: "Yellow and blue",
        img:"008_fb8b0920194783.562e73d182e89-1024x724.jpg",
        content: "MARK ROTHKO « Yellow and blue »<hr><br>Réinterprétation Photographique<br>Direction artistique<br>2016",
        slug:"yellow-and-blue",
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/02/fb8b0920194783.562e73d182e89-1336x890.jpg"
            }
        ]
    },
    {
        id: 9,
        name: "Akina Wise",
        img:"009_akinaface-1024x1024.png",
        content: "AKINA WISE « Galaxy Girl »<hr><br>Pochette de disque<br>Design graphique / Photographie<br>2017",
        slug:"akina-wise",
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/02/akinavinyl-1440x960.jpg"
            },
            {
                type: "image",
                src: "http://originalcosmic.fr/wp-content/uploads/2019/02/akinados-960x960.jpg"
            }
        ]
    },
    {
        id: 10,
        name: "Eldorado Afro",
        img: "010_eldoradoafroINSTAleft.jpg",
        content:"Eldorado Afro: Une journée sur l’héritage africain du Mexique<hr><br>𝗖𝗹𝗶𝗲𝗻𝘁: Wawa L’asso<br>𝗠𝗶𝘀𝘀𝗶𝗼𝗻: Design graphique / DA<br>Direction artistique: F.E Original Cosmic<br>Photo: Elliot Duk<br>Style: Jeannine Fischer<br>Modèle: Coralie Djondo<br>Make up: Sophia<br>Assistante: Estelle Periou<hr>© 2019 𝘖𝘳𝘪𝘨𝘪𝘯𝘢𝘭 𝘊𝘰𝘴𝘮𝘪𝘤",
        slug:"eldorado-afro",
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/06/EldoradoAfroAff-960x1440.jpg"
            }
            //there is none...
        ]
    },


    //Voilà on a tout
    //Maintenant il faut mettre les images
    {
        id:11,
        name:"Ombres Colorées",
        img:"011_WAKASQUAREOC-768x768.jpg",
        content:"Ombres Colorées<hr>Client: Wawa L’AssoMission: Print / MultimédiaPhoto: Matt DohenyModel: Will B.Bell",
        slug:"ombres-colorees",
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/05/WAKAMOCKPOSTOC-1440x1440.jpg"
            }
        ]
    },
    {
        id:12,
        name:'Maescroc',
        img:"012_1-900x895.png",
        content:"MAESCROC « NordikZoo »<hr><br>Pochette de disque<br>Poster<br>Design graphique<br>2016",
        slug:'maescroc',
        medias:[
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/02/9e290317527117.56647b81cf2d0-960x960.jpg"
            },
            {
                type: "image",
                src: "http://originalcosmic.fr/wp-content/uploads/2019/02/f0238c17527117.5664a1a5ad5a0-1-433x866.jpg"
            }
        ]
    },
    {
        id:13,
        name:"OMG",
        img:"013_OMG-3eme-decor-150x150.gif",
        content: "OMG<br>En développement<br>Film court d’animation",
        slug:'omg',
        medias: [
            {
                type:"video",
                src:"https://www.youtube.com/watch?v=i0NQXLxOXEo&feature=youtu.be"
            }
        ]
    },
    {
        id:14,
        name:"Doux divorce records",
        img:"014_DDRLOGFACE-768x768.jpg",
        content:"DOUX DIVORCE RECORDS<br>Label de musique<hr>Identité visuelle<br>Design graphique<br>2017",
        slug:"doux-divorce-records",
        medias: [
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/02/13925472_1153557848000435_706687528803582981_o-960x960.png"
            },
            {
                type: "image",
                src: "http://originalcosmic.fr/wp-content/uploads/2019/02/13909005_574832796029717_191003813203858820_o-480x480.jpg"
            },
            {
                type: "image",
                src: "http://originalcosmic.fr/wp-content/uploads/2019/02/11021112_878714695484753_6208556186257630867_n-480x480.jpg"
            }
        ]
    },
    {
        id:15,
        name:"Ronan Martin",
        img:"015_capalone-698x286.png",
        content:"RONAN MARTIN « À l’intérieur »<hr>Pochette de disque<br>Design graphique<br>2017<br>",
        slug:"ronan-martin",
        medias: [
            {
                type: "image",
                src: "http://originalcosmic.fr/wp-content/uploads/2019/02/ronaninter3-1920x960.jpg"
            },
            {
                type:"image",
                src:"http://originalcosmic.fr/wp-content/uploads/2019/02/rmdosvinl-960x960.jpg"
            }
            
        ]
    },
    {
        id:16,
        name: "Ronan Martin « Les rayons »",
        img: "016_2-900x895.png",
        content: "RONAN MARTIN « Les rayons »<hr>Pochette de disque<br>Clip musical<br>Direction artistique<br>Réalisation vidéo<br>Design graphique<br>2015",
        slug: "ronan-martin-les-rayons",
        medias: [
            {
                type: "image",
                src: "http://originalcosmic.fr/wp-content/uploads/2019/02/ronanrayonsvin-1440x960.jpg"
            },
            {
                type: "video",
                src: "https://www.youtube.com/watch?v=sES64_1VmVU"
            },
            {
                type: "image",
                src: "http://originalcosmic.fr/wp-content/uploads/2019/02/1907526_913693705320185_9131023012842273479_n-480x480.png"
            }
        ]
    },
    {
        id:17,
        name: "Salvak « Vendetta »",
        img: "017_cycle-01-150x150.gif",
        content: "SALVAK « Vendetta »<hr>Clip musical<br>Animation 2d<br>2017",
        slug: "vendetta",
        medias: [
            {
                type: "video",
                src: "https://www.youtube.com/watch?v=Mg_s40GsIbo"
            }
        ]
    }


];
export default data;

