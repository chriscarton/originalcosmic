# Encoder les fonts en base64

Par exemple pour qu'un titre ne s'affiche qu'une fois que la fonte est chargée. 
Voir https://transfonter.org/ qui propose cette option. 

# Problème de persistance des images 

Il se peut que l'attribut src persiste si l'on est renvoyé vers le même composant mais avec des données différentes. 

Voici comment régler ce problème : 

    componentWillUpdate(){
        console.log('componentWillUpdate!');

        let imgs = document.querySelectorAll('#singleProject img');

        if(imgs){
            imgs.forEach(function(img){
                img.removeAttribute('src')
            });
        }
    }

# Transition entre les routes avec react-pose 

    yarn add react-pose

Ajouter ceci

    import posed, { PoseGroup } from 'react-pose';

    const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
    });

Modifier le render de App.js comme ceci : 
    
    render(){
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Header/>
                <Route
                render={({ location }) => (
                <main id="mainContent">
                    <PoseGroup>
                        <RouteContainer key={location.pathname}>
                        
                        <Switch location={location}>
                            <Route path="/" exact component={Homepage}/>
                            <Route path="/studio" exact component={Studiocontact} />
                            <Route path="/projets" exact component={AllProjects} />
                            <Route path="/projet/:slug" exact component={SingleProject} />

                            <Route path="/tests" exact component={Tests} />
                            {/* <Route component={NotFound} /> */}
                        </Switch>
                        </RouteContainer>
                    </PoseGroup>
                    
                </main>
                )}>
                </Route>

                <Footer/>
            </div>
            </Router>
        );
    }

**Attention** *RouteContainer* doit bien recevoir pathname (*key={location.pathname}*) et non pas *key* comme indiqué dans la documentation. 

Cette issue est documentée dans : 
https://github.com/Popmotion/popmotion/issues/535

# Problèmes avec les fontes

## Fonte Cocogoose 

Bon voilà je me doutais bien que ça allait merder car cette fonte je ne l'ai trouvé qu'en *trial* sur dafont, c'est pour dire. Bref, il n'y a pas de chiffres dans cette fonte. Quand j'essaye d'écrire *Erreur 404* ça me fait *Erreur @@@* (voyez le @ comme un caractère bizarre). 

Donc la solution (pour de l'intégration uniquement) c'est de faire un span numbers pour les nombres. 

    h1,h2,h3,h4,h5,h6{
        font-family: 'COCOGOOSE';
        .numbers{
            font-family: 'Ubuntu Mono';
        }
    }

Si Frank veut vraiment utiliser cette typo il faut l'acheter et elle coûte 25 bucks. 

https://www.zetafonts.com/cocogoose

# Fonte Ubuntu Mono 

Là il n'y a pas de problème technique par contre (ben oui). Mais je sais bien que si on me demande le nom de la fonte il y a forcément un *Apple Genius* qui va se pointer et me dire : *mais non non malheureux, n'utilise pas ça, Linux c'est d'la merde*. 

Voilà le fait est que Frank n'a pas pu me dire quelle typo il utilisait donc j'ai utilisé la monospace de mon système et il s'avère que c'est celle-ci et que ça marche très très bien. 

# TO DO

Trouver une solution pour le padding des iframes qui est légèrement trop grand...

Mettre en place github pages via la vidéo de traversy media

Il faudrait une solution 404 pour :
http://localhost:3000/projet/ldsqd

Formulaire de contact 

Peut-être qu'il y a un problème avec l'évènement ready de la video
Et bien vérifié que la vidéo existe sinon ça peut planter les autres pages...

# Faire une vidéo à partir d'un .gif

Lancer la commande : 

    ffmpeg -i animated.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" video.mp4

Sur *ocp.1.gif* on passe donc d'un gif de 28mo à une vidéo mp4 de 3.6mo

Ce lien explique tout : 

https://rigor.com/blog/optimizing-animated-gifs-with-html5-video

Du coup mon intégration comment ça se passe ?


# Redimensionner des images avec mogrify 

Redimensionne toutes les images jpg **qui font plus de 320px de large** à 320px de large dans un dossier 320 :

    mogrify -path 320 -resize 320x "320x>" *.jpg

Pareil pour 600 : 

    mogrify -path 600 -resize 600x "600x>" *.jpg

mogrify -path 1280 -resize 1280x "1280x>" *.jpg

convert -path 1920 -resize 1920x1920\> *.jpg: