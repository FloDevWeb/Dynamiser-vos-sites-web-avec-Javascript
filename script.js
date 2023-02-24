// récup des éléments HTML
const newGameBtn = document.getElementById("newGame");
const displayGlobal1 = document.getElementById("global_1");
const displayGlobal2 = document.getElementById("global_2");
const displayRound1 = document.getElementById("round_1");
const displayRound2 = document.getElementById("round_2");
const rollDice = document.getElementById("roll");
const hold = document.getElementById("hold");
const player1Status = document.getElementById("player1");
const player2Status = document.getElementById("player2");

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

// fonction pour tout initialiser en cas de nouvelle partie
function newGame() {
  currentScore1 = 0;
  totalScore1 = 0;
  currentScore2 = 0;
  totalScore2 = 0;
  currentPlayer = 1;
  displayGlobal1.innerHTML = 0;
  displayGlobal2.innerHTML = 0;
  displayRound1.innerHTML = 0;
  displayRound2.innerHTML = 0;
  updatePlayerStatus(1);
}

newGameBtn.addEventListener("click", newGame);

// fonction qui gère le calcul quand on lance le dé
function roll() {
  value = getRandomInt(1, 7);
  console.log(value);
  if (value > 1) {
    if (currentPlayer === 1) {
      currentScore1 += value;
      displayRound1.innerHTML = currentScore1;
    } else {
      currentScore2 += value;
      displayRound2.innerHTML = currentScore2;
    }
  } else {
    if (currentPlayer === 1) {
      currentScore1 = 0;
      displayRound1.innerHTML = currentScore1;
      currentPlayer = 2;
      updatePlayerStatus(2);
    } else {
      currentScore2 = 0;
      displayRound2.innerHTML = currentScore2;
      currentPlayer = 1;
      updatePlayerStatus(1);
    }
  }
}

rollDice.addEventListener("click", roll);
rollDice.addEventListener("click", animDice);

// fonction pour mettre le score courant dans le score total
function keepScore() {
  if (currentPlayer === 1) {
    totalScore1 += currentScore1;
    displayGlobal1.innerHTML = totalScore1;
    currentScore1 = 0;
    displayRound1.innerHTML = currentScore1;
    winGame();
    currentPlayer = 2;
    updatePlayerStatus(2);
  } else {
    totalScore2 += currentScore2;
    displayGlobal2.innerHTML = totalScore2;
    currentScore2 = 0;
    displayRound2.innerHTML = currentScore2;
    winGame();
    currentPlayer = 1;
    updatePlayerStatus(1);
  }
}

hold.addEventListener("click", keepScore);

// fonction fin de partie
function winGame() {
  if (totalScore1 > 99) {
    alert("Player 1 win the game !!!");
    newGame();
  } else if (totalScore2 > 99) {
    alert("Player 2 win the game !!!");
    newGame();
  }
}

// gestion animation du dé

function animDice() {
  // Afficher le résultat du dé
  const dice = document.getElementById("dice");
  const face = dice.querySelector(".front");
  face.textContent = value;

  // Ajouter une animation de roulement
  dice.classList.add("rolling");

  // Supprimer l'animation après 1 seconde
  setTimeout(function () {
    dice.classList.remove("rolling");
  }, 1000);
}

// gestion player actif

// Fonction pour mettre à jour le statut des joueurs
function updatePlayerStatus(activePlayer) {
  if (activePlayer === 1) {
    player2Status.classList.add("invisible");
    player1Status.classList.remove("invisible");
  } else {
    player2Status.classList.remove("invisible");
    player1Status.classList.add("invisible");
  }
}

// Appeler la fonction pour mettre à jour le statut initial
updatePlayerStatus(1);
