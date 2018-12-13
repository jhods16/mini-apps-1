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
    this.handleClick = this.handleClick.bind(this)
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
      board[row][col] = 1;
    } else {
      board[row][col] = 2;
    }
    
    this.setState({board: board})
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
    console.log(square);
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