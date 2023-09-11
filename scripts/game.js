function selectGameGrid(event) {
  const selectedBox = event.target;
  if (selectedBox.tagName !== "LI") {
    return;
  }

  const selectedColumn = selectedBox.dataset.col - 1;
  const selectedRow = selectedBox.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    return;
  }

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  if (activePlayer === 0) {
    selectedBox.textContent = "X";
  } else {
    selectedBox.textContent = "O";
  }

  switchPlayer();
  selectedBox.classList.add("disabled");
  checkGameOver();
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

function startNewGame() {
  const selectedElements = document.querySelectorAll("#game-board li");
  for (const selectedElement of selectedElements) {
    selectedElement.innerHTML = "";
    selectedElement.classList.remove("disabled");
  }
}

function checkGameOver() {
  //Horizontal
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      console.log("Game Over you won " + gameData[i][0]);
      return gameData[i][0];
    }
  }

  //Vertical
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      console.log("Game Over you won " + gameData[0][i]);
      return gameData[0][i];
    }
  }
  //Diagonal: Top left -> bottom right
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      console.log("Game Over you won " + gameData[0][0]);
      return gameData[0][0];
    }
  }
  //Diagonal: Top right -> bottom left

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][2] > 0 &&
      gameData[0][2] === gameData[1][1] &&
      gameData[1][1] === gameData[2][0]
    ) {
      console.log("Game Over you won " + gameData[0][2]);
      return gameData[0][2];
    }
  }
}
