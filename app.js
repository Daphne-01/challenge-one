// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let sorteo25 = "";
let list = document.getElementById("listaAmigos");
let winner = document.getElementById("resultado");

function agregarAmigo(){
    let newFriend = document.getElementById("amigo").value;
    if (newFriend != ""){
        sorteo25.push(newFriend);
        console.log(sorteo25);
        document.getElementById("amigo").value = "";
        list.innerHTML = "";
        winner.innerHTML = "";
        for (let i = 0; i<sorteo25.length; i++ ){
            let name = sorteo25[i];
            let liElem = document.createElement("LI");
            liElem.textContent = name;
            list.append(liElem);
        }
    } else {
        alert("Por favor inserte un nombre");
    }
}

function sortearAmigo(){
    let totalFriends = sorteo25.length;
    if (totalFriends > 1){
        let index = Math.floor(Math.random()*totalFriends);
        winner.innerHTML = `Cha Cha Cha Chan... y tu amigo secreto es: ${sorteo25[index]}`;
        list.innerHTML = ""
        inicio();
    } else if (totalFriends == 1){
        alert("No tienes suficientes amigos :( \nIngresa al menos uno más para sortear");
    } else {
        alert("No tienes amigos, ingresa amigos para poder sortear.");
    }
}

function inicio(){
    sorteo25 = [];
}

inicio();