let json;
let url = "https://api.agify.io/?name=";
let name;


function getJson(url, name){
    (async() => {
        const contenu = await fetch(url+name);
        const contenuJson = await contenu.json();
        return contenuJson;
        console.log(json);
    })()
}

function askForName(){
    return prompt("Please enter a name");
}

function display(_json){
    let _age, _count;

    const parsed = JSON.parse(_json);
    _age = parsed.age;
    alert("Si vous vous appelez " + name + ", vous avez probablement " + age + ".");
}

name = askForName();
json = getJson(url, name);
display(json);
