let tour;
let texte = "Pierre (p), Feuille (f) ou Ciseau (c) ?";
let scoreJoueur = 0;
let scoreOrdinateur = 0;

const duel = (choixJoueur, choixOrdinateur) => {
    if(choixJoueur === choixOrdinateur) égalité();

    switch(choixJoueur){
        case "p":
            if(choixOrdinateur === "c") gagne(true);
            if(choixOrdinateur === "f") gagne(false);
        break;
        case "f":
            if(choixOrdinateur === "c") gagne(false);
            if(choixOrdinateur === "p") gagne(true);
        break;
        case "c":
            if(choixOrdinateur === "p") gagne(false);
            if(choixOrdinateur === "f") gagne(true);
        break;
    }
}

const selectionOrdinateur = () => {
    let choix = choisir(3);
    switch(choix){
        case 0:
            return "p";
            console.log("L'ordinateur a choisi Pierre");
        break;
        case 1:
            return "f";
            console.log("L'ordinateur a choisi Feuille");
        break;
        case 2:
            return "c";
            console.log("L'ordinateur a choisi Ciseau");
        break;
    }
}

jouer();

function jouer(){
    tour = 1;
    jouerTour();
}

function jouerTour(){
    let réponse = prompt(texte);
    if(typeof(réponse) === "string"){
        switch(réponse.toLowerCase()){
            case "pierre":
            case "p":
                console.log("Vous avez choisi Pierre");
                duel("p", selectionOrdinateur())
            break;

            case "feuille":
            case "f":
                console.log("Vous avez choisi Feuille");
                duel("f", selectionOrdinateur())
            break;

            case "ciseau":
            case "c":
                console.log("Vous avez choisi Ciseau");
                duel("c", selectionOrdinateur())
            break;

            default:
                alert("Veuillez renseigner : " + texte);
            break;
        }
    } else alert("Veuillez renseigner : " + texte);
}

function choisir(){
    return Math.floor(Math.random() * 3);
}

function égalité(){
    alert("Égalité!!");
    console.log("===================== Égalité =====================")
    jouerTour();
}

function gagne(gagnant){
    if(gagnant){
        alert("Vous avez gagné!");
        scoreJoueur++;
    } else {
        alert("Vous avez perdu!");
        scoreOrdinateur++;
    }
    console.log("Joueur : " + scoreJoueur + " | Score : " + scoreOrdinateur);
    if(scoreOrdinateur < 4 && scoreJoueur < 4){
        jouerTour();
    } else if (scoreJoueur > scoreOrdinateur){
        gagnePartie(true);
    } else gagnePartie(false);
}

function gagnePartie(gagnant){
    if(gagnant){
        alert("Vous avez gagné la partie!");
    } else alert("Vous avez perdu la partie!")
    jouer();
}

