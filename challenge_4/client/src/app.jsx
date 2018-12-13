import Boardview from './components/boardview.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],

      player: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateSquare = this.updateSquare.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }

  handleClick(e) {
    var board = this.state.board;
    var id = e.target.id;
    var row = parseInt(id[0]);
    var col = parseInt(id[2]);

    var checkRows = function() {
      for (var i = 5; i >= row; i--) {
        if (board[i][col] === 0) {
          id = ''+ i + ',' + col + '';
          return id;
        } 
      }
      return id;
    }
    id = checkRows();
    this.updateSquare(id);
    this.updateBoard(id);
    this.changePlayer();
  }

  updateBoard(id) {
    var board = this.state.board;
    var row = parseInt(id[0]);
    var col = parseInt(id[2]);

    if (this.state.player) {
      board[row][col] = 'A';
    } else {
      board[row][col] = 'B';
    }

    this.setState({board: board})
    this.checkHorizontal();
    this.checkVertical();
  }

  changePlayer() {
    var player = this.state.player;

    this.setState({player: !player});
  } 

  updateSquare(id) {
    var square = document.getElementById(id);

    if (this.state.player) {
      square.setAttribute('style', 'background-image: url(/greenpiece.png);');
    } else {
      square.setAttribute('style', 'background-image: url(/redpiece.png);');
    }
  }

  checkHorizontal() {
    var board = this.state.board;
    var piece; 
    var count = 0;

    if (this.state.player) {
      piece = 'A';
    } else {
      piece = 'B';
    }
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 8; col++) {
        if (board[row][col] === piece) {
          count++;
        } else {
          count = 0;
        }
        if (count === 4) {
          alert(`Player ${piece} wins!`)
          return;
        }
      }
    }
  }

  checkVertical() {
    var board = this.state.board;
    var piece; 
    var count = 0;

    if (this.state.player) {
      piece = 'A';
    } else {
      piece = 'B';
    }
    for (var col = 0; col < 8; col++) {
      for (var row = 0; row < 6; row++) {
        if (board[row][col] === piece) {
          count++;
        } else {
          count = 0;
        }
        if (count === 4) {
          alert(`Player ${piece} wins!`)
          return;
        }
      }
    }    
  }

  render() {
    var player;

    if (this.state.player) {
      player = <div className="player">Player A</div>
    } else {
      player = <div className="player">Player B</div>
    }

    return (
      <div>
        {player}
        <Boardview board={this.state.board} handleClick={(e) => {this.handleClick(e)}}/>
        }
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));