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