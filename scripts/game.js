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

  selectedBox.classList.add("disabled");
  const winnerId = checkGameOver();
  if (winnerId !== 0) {
    gameOver(winnerId);
  }

  currentRound++;
  switchPlayer();
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
  backdropElement.style.display = "none";
  gameOverOverlay.style.display = "none";
  gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  currentRound = 1;
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
      return gameData[0][2];
    }
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
      return gameData[0][2];
    }
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function gameOver(winnerId) {
  backdropElement.style.display = "block";
  gameOverOverlay.style.display = "flex";

  if (winnerId === 1) {
    winnerName.innerHTML = player1Name.innerHTML + " Wins";
    player1Score++;
  } else if (winnerId === 2) {
    winnerName.innerHTML = player2Name.innerHTML + " Wins";
    player2Score++;
  } else {
    winnerName.innerHTML = "It's a Draw";
    gameTie++;
  }
}

