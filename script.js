document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
  
    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return true;
        }
      }
  
      return false;
    }
  
    function checkTie() {
      return !gameBoard.includes("");
    }
  
    function handleClick(index) {
      if (gameBoard[index] === "" && !checkWinner() && !checkTie()) {
        gameBoard[index] = currentPlayer;
        renderBoard();
        if (checkWinner()) {
          alert(`Player ${currentPlayer} wins!`);
        } else if (checkTie()) {
          alert("It's a tie!");
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
  
    function renderBoard() {
      board.innerHTML = "";
      for (let i = 0; i < gameBoard.length; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = gameBoard[i];
        cell.addEventListener("click", () => handleClick(i));
        board.appendChild(cell);
      }
    }
  
    renderBoard();
  });
  