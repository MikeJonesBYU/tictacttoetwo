import { useState } from 'react';


// pass in the onSquareClick function so that 
// this square has a click handler.  
function Square({ value, onSquareClick }) {
  return (
  <button className="square" onClick={onSquareClick}>
        {value}
      </button>
  );    
}



export default function Board() {
  // set up the board state at the parent level.  
  const [squares, setSquares] = useState(Array(9).fill(null));

  //  Utilizing closures: `i` is bound within the closure of `handleClick`, 
  // ensuring its value remains consistent. 
  // This specific version of `handleClick` is passed to the `Square` 
  // constructor as its click handler.
  function handleClick(i) {
    // create a shallow copy of the squares array with the slice method. 
    // the shallow copy is a local mutable state that we use to make our 
    // modifications because that's good practice in react.  
    const nextSquares = squares.slice();
    // uupdate our local slice.    
    nextSquares[i] = "X";
    // and now push our local changes up to the global state.  
    setSquares(nextSquares);
  }
  return (
    <>
    hi there 
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}