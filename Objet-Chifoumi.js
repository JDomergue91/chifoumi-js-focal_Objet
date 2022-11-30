class Chifou {

    constructor() {

        
    }

    static initialisation() {
        rejouer.style.display = "none"
        titre.textContent = "CHIFOUMI"
        resultatDroite.textContent = 'none';
        droite.style.backgroundColor = "white";
        resultatGauche.textContent = 'none';
        gauche.style.backgroundColor = "white";
        imgGauche.style.backgroundImage = `url('images-pfc/depart.jpg')`;
        imgDroite.style.backgroundImage = `url('images-pfc/depart.jpg')`;
        droite.style.pointerEvents = 'auto';
        gauche.style.pointerEvents = 'auto';
    }

    static jouer(zone) {

        let random = chifoumiTab[Math.floor(Math.random()*chifoumiTab.length)];

        if([zone] == 'gauche') {
            imgGauche.style.backgroundImage = `url(${random})`;
        } else if ([zone] == 'droite') {
            imgDroite.style.backgroundImage = `url(${random})`;
        }
        document.getElementById(zone).style.pointerEvents = 'none';
       
    
        aleaDroite = Chifou.chifouCheck(imgDroite.style.backgroundImage);
        aleaGauche = Chifou.chifouCheck(imgGauche.style.backgroundImage);
    
    
        setTimeout(() => {
    
    
        if ( imgDroite.style.backgroundImage === imgGauche.style.backgroundImage ) {
            titre.textContent = "Aie, c'est l'egalite pas de chance";
            resultatDroite.textContent = "Egalite";
            droite.style.backgroundColor = "orange";
            resultatGauche.textContent = "Egalite";
            gauche.style.backgroundColor = "orange";
    
            rejouer.style.display = "initial";
    
        } else {
            if (aleaGauche == "ciseau" && aleaDroite == "feuille" || aleaGauche == "feuille" && aleaDroite == "pierre" || aleaGauche == "pierre" && aleaDroite == "ciseau") {
    
                    resultatGauche.textContent = "Gagne";
                    gauche.style.backgroundColor = "green";
                    resultatDroite.textContent = "Perdu";
                    droite.style.backgroundColor = "red";
                    
                    rejouer.style.display = "initial";
                } 
            else if(aleaDroite == "ciseau" && aleaGauche== "feuille" || aleaDroite == "feuille" && aleaGauche == "pierre" || aleaDroite == "pierre" && aleaGauche == "ciseau"){
                    
                        resultatDroite.textContent = "Gagne";
                        droite.style.backgroundColor = "green";
                        resultatGauche.textContent = "Perdu";
                        gauche.style.backgroundColor = "red";
    
                        rejouer.style.display = "initial";
            } 
        
        }
    
        }, "1000");
    }

    static chifouCheck(image){

        let chifouCheckTab = ['url("images-pfc/ciseau.jpg")', 'url("images-pfc/feuille.jpg")', 'url("images-pfc/pierre.jpg")'];

        if (image == chifouCheckTab[0]) {
            return "ciseau";
        } else if (image == chifouCheckTab[1]) {
            return "feuille";
        } else if (image == chifouCheckTab[2]) {
            return "pierre";
        }
    }
}