import { useState } from 'react';

function Square() {
  // useState is a hook that returns two values. 
  // the first, which I'm storing in "value"
  // is a variable that holds the state. 
  // the second, which I'm storing in setValue
  // is a function that sets the value of the state. 
  // when I call setValue and give it a new value 
  // react also forces an update and redraw. 
  const [value, setValue] = useState(null);
  function handleClick() {
    // a simple call to setValue. 
    setValue("X");
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}