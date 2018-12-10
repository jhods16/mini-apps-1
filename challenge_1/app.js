// On Load

document.addEventListener("DOMContentLoaded", function(event) {
    var playerElement = document.getElementsByClassName('player')[0];
    playerElement.innerHTML += "Player X: Your Move";

    addTurnHandler();
})

/* ------------ Game Play --------------------- */

/* Turns */

var addTurnHandler = function() {
  var boxes = document.getElementsByClassName('box')

  for(var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', changePlayer);
  }
}

var addPiece = function() {
  var piece = arguments[0];
  this.innerHTML = piece;
}
/* ------------ Reset --------------------- */


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