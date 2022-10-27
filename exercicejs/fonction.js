console.log("Version avec Function");
function retournerDeuxValeurs(param1, param2 = 30) {
    if(param1){
        return  param1 + " -- " + param2;
    }
    return "!!premier paramètre non défini!! --" + param2;
}

const réponseFonction = retournerDeuxValeurs("coucou");
console.log(réponseFonction);

console.log("Version fonction fléchée");
const retournerDeuxValeursF = (param1, param2 = 30) => {
    if(param1){
        return  param1 + " -- " + param2;
    }
    return "!!premier paramètre non défini!! -- " + param2;
}
console.log(typeof retournerDeuxValeursF);
const réponseFonctionF = retournerDeuxValeursF("coucouF" , "coucou?");
console.log(réponseFonctionF);

function somme(nombre1 = 0, nombre2 = 0, nombre3 = 0){
    if(isNaN(nombre1) && isNaN(nombre2) && isNaN(nombre3)){
        return nombre1 + nombre2 + nombre3;
    }
}
