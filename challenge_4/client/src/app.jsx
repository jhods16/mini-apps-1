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

  handleClick() {
    this.changePlayer();
  }

  changePlayer() {
    var player = this.state.player;

    this.setState({player: !player});
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
        <Boardview board={this.state.board} handleClick={this.handleClick}/>
        }
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));