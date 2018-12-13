import Square from './squareview.jsx'

var Boardview = function(props) {
  var board = props.board;

  return (
    <div className="board">
      {board.map((row, i) => {
        return row.map((square, k) => {
          var ik = [i, k].toString();
          return <Square loc={ik} handleClick={props.handleClick}/>
        })
      })}
    </div>
    )
}

export default Boardview;