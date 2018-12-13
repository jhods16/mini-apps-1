var Square = function(props) {
  return (
    <div id={props.loc} className="square" onClick={props.handleClick}></div>
  )
}

export default Square;