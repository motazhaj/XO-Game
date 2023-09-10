function openNamesOverlay() {
  backdropElement.style.display = "block";
  namesOverlay.style.display = "block";
}

function closeNamesOverlay() {
  backdropElement.style.display = "none";
  namesOverlay.style.display = "none";
}

function setNames(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let enteredPlayer1Name = formData.get("player1Name").trim();
  let enteredPlayer2Name = formData.get("player2Name").trim();

  if (!enteredPlayer1Name) {
    enteredPlayer1Name = "Player 1";
  }
  if (!enteredPlayer2Name) {
    enteredPlayer2Name = "Player 2";
  }

  player1Name.innerHTML = enteredPlayer1Name;
  player2Name.innerHTML = enteredPlayer2Name;
  closeNamesOverlay();
}
