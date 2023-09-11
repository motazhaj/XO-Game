let activePlayer = 0;
let player1Score = 0;
let player2Score = 0;
let gameTie = 0;

let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let currentRound = 1;

const startGameButton = document.querySelectorAll(".start-game");
const showNamesOverlayButton = document.getElementById("show-names-overlay");
const namesOverlay = document.getElementById("set-names-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");

const player1NameInput = document.getElementById("player1NameLabel");
const player2NameInput = document.getElementById("player2NameLabel");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const cancelSetNamesButton = document.getElementById("cancel-button");

const activePlayerElement = document.getElementById("active-player");
const gameGridElement = document.getElementById("game-board");
const gameOverOverlay = document.getElementById("game-over");
const winnerName = document.getElementById("winner-name");

showNamesOverlayButton.addEventListener("click", openNamesOverlay);
cancelSetNamesButton.addEventListener("click", closeNamesOverlay);
backdropElement.addEventListener("click", closeNamesOverlay);
formElement.addEventListener("submit", setNames);

startGameButton.forEach(function (startButton) {
  startButton.addEventListener("click", startNewGame);
});

// startGameButton.addEventListener("click", startNewGame);
gameGridElement.addEventListener("click", selectGameGrid);
