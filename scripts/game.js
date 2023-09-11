function selectGameGrid(event) {
  if (event.target.tagName !== "LI") {
    return;
  }

  if (activePlayer === 0) {
    event.target.textContent = "X";
  } else {
    event.target.textContent = "O";
  }
  switchPlayer();
  event.target.classList.add("disabled");
}

function switchPlayer() {
  if (activePlayer === 1) {
    activePlayer = 0;
    activePlayerElement.innerHTML = player1Name.innerHTML;
  } else {
    activePlayer = 1;
    activePlayerElement.innerHTML = player2Name.innerHTML;
  }
}
