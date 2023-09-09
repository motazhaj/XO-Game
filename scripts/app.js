const startGameButton = document.getElementById("start-game");
const showNamesOverlayButton = document.getElementById("show-names-overlay");
const cancelSetNamesButton = document.getElementById("cancel-button");
const setNamesButton = document.getElementById("set-names-button");
const namesOverlay = document.getElementById("set-names-overlay");

const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");

showNamesOverlayButton.addEventListener(
  "click", () =>
  namesOverlay.style.display = "block"
);
