import Square from './squareview.jsx'

var Boardview = function(props) {
  var board = props.board;

  return (
    <div className="board">
      {board.map((row) => {
        return row.map((square) => {
         return <Square handleClick={props.handleClick}/>
        })
      })}
    </div>
    )
  
}

export default Boardview;