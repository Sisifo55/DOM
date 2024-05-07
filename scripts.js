//EJERCICIO 1
let title = document.getElementById("gen-1");
title.innerHTML = "Generasión 1 Pokimon";

//EJERCICIO 2
let backgroundChange = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");
backgroundChange.style.background = "yellow";

//EJERCICIO 3
console.log(window.location.href);

//EJERCICIO 4
console.log(window.location.hostname);

//EJERCICIO 5
let imagenes = document.getElementsByTagName("img");
for (let i = 0; i < imagenes.length; i++) { console.log(imagenes[i].src);};

//EJERCICIO 6"
let imagenes2 = document.querySelectorAll("img");
for (let i = 0; i < imagenes2.length; i++) { imagenes2[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";};

