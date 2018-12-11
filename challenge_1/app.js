// On Load

document.addEventListener("DOMContentLoaded", function(event) {
    var playerElement = document.getElementsByClassName('player')[0];
    playerElement.innerHTML += 'Player X: Your Move';
    var turnCount = 0;

    addTurnHandler(turnCount);
    document.getElementsByTagName('button')[0].addEventListener('click', reset)
})

/* ------------ Game Play --------------------- */
var board = {
  '0': [0, 0, 0],
  '1': [0, 0, 0],
  '2': [0, 0, 0]
};
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
  var y = this.id.toString()[0];
  var x = this.id.toString()[1];
  board[x][y] = piece;
  console.log(board)
  assessWinBoard(board)
}

var assessWinBoard = function(board) {
  console.log(board[0][1])
  if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
    alert('Player ' + board[0][0] + ' wins!')
  }
}

/* Assess Win */
var assessWin = function(piece) {
  var boxes = document.getElementsByClassName('box');
  var count = 0;
  var board = [
  [boxes[0], boxes[1], boxes[2]],
  [boxes[3], boxes[4], boxes[5]],
  [boxes[6], boxes[7], boxes[8]],
  ]

  for (var j = 0; j < boxes.length; j++) {
    if (boxes[j].innerHTML === piece) {
      count++;
    }
  }

  if (count >= 3) {
    for (var i = 0; i < board.length; i++) {
      if (board[i][0].innerHTML === piece && board[i][1].innerHTML === piece && board[i][2].innerHTML === piece 
            || board[0][i].innerHTML === piece && board[1][i].innerHTML === piece && board[2][i].innerHTML === piece) {
        alert('Player ' + piece + ' wins!')
        updateScoreboard(piece);
        return highlightWins(board, piece);
      } else if (board[0][0].innerHTML === piece && board[1][1].innerHTML === piece && board[2][2].innerHTML === piece 
            || board[0][2].innerHTML === piece && board[1][1].innerHTML === piece && board[2][0].innerHTML === piece) {
        alert('Player ' + piece + ' wins!')
        updateScoreboard(piece);
        return highlightWins(board, piece);
      } else  if (count === 5) {
        alert('Tie!');
        return;
      }
    }
  }
}


/* ------------ Reset --------------------- */

var reset = function() {
  var boxes = document.getElementsByClassName('box');
  var playerElement = document.getElementsByClassName('player')[0]

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
    boxes[i].style.backgroundColor = '#82D0D0';
    boxes[i].style.color = 'black';
    boxes[i].style.border = '1px solid black';

  }
  playerElement.innerHTML = 'Player X: Your Move';
}


/* ------------ Helper Functions --------------------- */

var changePlayer = function() {
  var playerElement = document.getElementsByClassName('player')[0];
  var playerPiece;

  if (playerElement.innerHTML === 'Player X: Your Move') {
    playerPiece = 'X';
    playerElement.innerHTML = 'Player O: Your Move';
  } else if (playerElement.innerHTML === 'Player O: Your Move') {
    playerPiece = 'O';
    playerElement.innerHTML = 'Player X: Your Move';
  }
  addPiece.call(this, playerPiece);

}

var highlightWins = function(board, piece) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j].innerHTML === piece) {
        board[i][j].style.backgroundColor = 'black';
        board[i][j].style.color = 'white';
        board[i][j].style.border = 'white';
      }
    }
  }
}

var updateScoreboard = function(piece) {
  var scoreBoard = document.getElementById(piece);
  var newScore = parseInt(scoreBoard.innerHTML) + 1;

  scoreBoard.innerHTML = newScore;
}
