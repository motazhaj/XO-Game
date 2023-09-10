const startGameButton = document.getElementById("start-game");
const showNamesOverlayButton = document.getElementById("show-names-overlay");
const namesOverlay = document.getElementById("set-names-overlay");

const player1NameInput = document.getElementById("player1NameLabel");
const player2NameInput = document.getElementById("player2NameLabel");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const setNamesButton = document.getElementById("set-names-button");
const cancelSetNamesButton = document.getElementById("cancel-button");

showNamesOverlayButton.addEventListener("click", openNamesOverlay);

cancelSetNamesButton.addEventListener("click", closeNamesOverlay);

setNamesButton.addEventListener("click", setNames);
