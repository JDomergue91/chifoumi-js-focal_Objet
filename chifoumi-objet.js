let titre = document.getElementById("titre");
let rejouer = document.getElementById("boutonRejouer");
let chifoumiTab = ["images-pfc/ciseau.jpg", "images-pfc/feuille.jpg", "images-pfc/pierre.jpg"];

let aleaGauche;
let aleaDroite;

let gauche = document.getElementById("gauche");
let imgGauche = document.getElementById('image-gauche');
let resultatGauche = document.getElementById("resultat-gauche");

let droite = document.getElementById("droite");
let imgDroite = document.getElementById("image-droite");
let resultatDroite = document.getElementById("resultat-droite");

window.addEventListener('load', (event) => {
    Chifou.initialisation();
})
