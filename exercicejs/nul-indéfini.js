let maVariable = 1;
let maVariableNulle = null;
let maVariableIndéfinie;

console.log(typeof maVariableNulle)
if(maVariableNulle === null){
    console.log("je suis nul :(");
}

if(maVariableIndéfinie === undefined) {
    console.log("je suis indéfini");
}

if(!maVariable && maVariable !== undefined){
    console.log("Je suis défini et non nul :" + maVariable);
}

