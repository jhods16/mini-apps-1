// On Load

document.addEventListener("DOMContentLoaded", function(event) {
    var playerElement = document.getElementsByClassName('player')[0];
    playerElement.innerHTML += "Player X: Your Move";
    var turnCount = 0;

    addTurnHandler(turnCount);
    document.getElementsByTagName('button')[0].addEventListener('click', reset)
})

/* ------------ Game Play --------------------- */

/* Turns */

var addTurnHandler = function(turnCount) {
  var boxes = document.getElementsByClassName('box');

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', changePlayer);
  }
}

var addPiece = function() {
  var piece = arguments[0];
  this.innerHTML = piece;
  assessWin(piece)
}

/* Assess Win */
var assessWin = function(piece) {
  // if there are three in a row
  var boxes = document.getElementsByClassName('box');
  var count = 0;
  var board = [
  [boxes[0], boxes[1], boxes[2]],
  [boxes[3], boxes[4], boxes[5]],
  [boxes[6], boxes[7], boxes[8]],
  ]

  for (var i = 0; i < board.length; i++) {
    if (board[i][0].innerHTML === piece && board[i][1].innerHTML === piece && board[i][2].innerHTML === piece 
          || board[0][i].innerHTML === piece && board[1][i].innerHTML === piece && board[2][i].innerHTML === piece) {
      alert("Player " + piece + " wins!")
      return;
    } else if (board[0][0].innerHTML === piece && board[1][1].innerHTML === piece && board[2][2].innerHTML === piece 
          || board[0][2].innerHTML === piece && board[1][1].innerHTML === piece && board[2][0].innerHTML === piece) {
      alert("Player " + piece + " wins!")
      return;
  }

}


/* ------------ Reset --------------------- */

var reset = function() {
  var boxes = document.getElementsByClassName('box');
  var playerElement = document.getElementsByClassName('player')[0]

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
  playerElement.innerHTML = "Player X: Your Move";
}


/* ------------ Helper Functions --------------------- */

var changePlayer = function() {
  var playerElement = document.getElementsByClassName('player')[0]
  var playerPiece;

  if (playerElement.innerHTML === "Player X: Your Move") {
    playerPiece = 'X';
    playerElement.innerHTML = "Player O: Your Move";
  } else if (playerElement.innerHTML === "Player O: Your Move") {
    playerPiece = 'O';
    playerElement.innerHTML = "Player X: Your Move";
  }
  addPiece.call(this, playerPiece);

}
 