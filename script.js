function swap(){
    document.getElementById("main-txt").innerHTML = "Pronto para sua jornada?"
    document.getElementById("main-txt").style.fontSize = "x-large";
}

function options(){
    document.getElementById("start-button").innerHTML = "Começar";
    var button = document.createElement("button");
    var back = document.createTextNode("Voltar");
    button.appendChild(back);
    document.body.appendChild(button);
}

document.getElementById("bg-music").volume=0.1;