// récup des éléments HTML
const newGameBtn = document.getElementById("newGame");
const displayGlobal1 = document.getElementById("global_1");
const displayGlobal2 = document.getElementById("global_2");
const displayRound1 = document.getElementById("round_1");
const displayRound2 = document.getElementById("round_2");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");

//fonction pour obtenir un résultat aléatoire
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// déclaration et initialisation des variables
let currentScore1 = 0;
let totalScore1 = 0;
let currentScore2 = 0;
let totalScore2 = 0;
let currentPlayer = 1;
let value = 0;
