// On Load

document.addEventListener("DOMContentLoaded", function(event) {
    var playerElement = document.getElementsByClassName('player')[0];
    playerElement.innerHTML += "Player X: Your Move";

    turnHandler();
})

/* ------------ Game Play --------------------- */

/* Turns */

var turnHandler = function() {
  var boxes = document.getElementsByClassName('box')

  for(var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', changePlayer);
  }
}


/* ------------ Reset --------------------- */


/* ------------ Helper Functions --------------------- */

var changePlayer = function() {
  var playerElement = document.getElementsByClassName('player')[0]
  if (playerElement.innerHTML === "Player X: Your Move") {
    playerElement.innerHTML = "Player O: Your Move";
  } else if (playerElement.innerHTML === "Player O: Your Move") {
    playerElement.innerHTML = "Player X: Your Move";
  }
}