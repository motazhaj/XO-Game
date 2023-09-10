function openNamesOverlay() {
  backdropElement.style.display = "block";
  namesOverlay.style.display = "block";
}

function closeNamesOverlay() {
  backdropElement.style.display = "none";
  namesOverlay.style.display = "none";
}

function setNames() {
  player1Name.innerHTML = "test";
  player2Name.innerHTML = "test2";
  closeNamesOverlay();
}
