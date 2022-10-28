let mistakeLimit;
let lost, won = false;
let word, str;

jouer();


//--------------------------------------------------------------

function jouer(){
    init();

    while(!(won && lost)){
    console.log(mistakeLimit + "::::")

        let letter = prompt("Mot à trouver : " + str + "\nIl vous reste " + mistakeLimit +" tentatives. \nVeuillez entrer une lettre ").toLowerCase();
        console.log("letter: " + letter)
        if(letter.length == 1){
            if(word.includes(letter)){
                console.log(str);
                let index = word.indexOf(letter)
                let strArray = str.split("");
                strArray.splice(index, 1, letter);
                str = strArray.join();
                str = str.replaceAll(",", "");
                alert("Mot à trouver : " + str + "\nlettre trouvée!")
            } else {
                alert("Pas d'bol!")
                mistakeLimit--;
            }
        } else alert("Erreur!!!");
        if(mistakeLimit < 0){
            lost = true;
            loose();
        } 
        if(!str.includes("-")){
            console.log("Gagné!!!")
            won = true;
            win();
        }
        
    display();
    }
}


function init(){
    mistakeLimit = 2;

    alert("Nouvelle partie");
    word = prompt("Veuillez entrer un mot :");
    str = "";
    for (let i = 0; i < word.length; i++) {
        str = str + "-"
    }
}

function display(){
    alert("Mot à trouver : " + str + "\nnombre d'essais restants : " + mistakeLimit);
}

function win(){
    alert("gagné!!! mot : " + word)
    newGame();
}

function loose(){
    alert("perdu!!! mot : " + word)
    newGame();
}

function newGame(){
    let response = prompt("Voulez vous jouer une nouvelle partie ? O/n");
    if(response.toLowerCase == "o"){
        jouer();
    }
}
