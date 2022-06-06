import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [history , setHistory ] = useState([{
    squares : (Array(9).fill(null))
  }]);
  const [winner, setWinner] = useState(null);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    const newWinner = calculateWinner(history[history.length - 1].squares);
    setWinner(newWinner);
  }, [history]);

//  console.log(winner);
  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null ;
  };

  //Handle player
  const handleClick = (id) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[id]) {
      return;
    }
    squares[id] = xIsNext ? "X" : "O";

    setHistory(
      currentHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(currentHistory.length);
    setXIsNext((prevState) => !prevState);
  };


  //Undo game
  const handleJump = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  //Restart game
  const handlRestart = () => {
    setStepNumber(0);
    setHistory([
      {
        squares: Array(9).fill(null),
      },
    ]);
    setXIsNext(true);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board
          squares={history[stepNumber].squares}
          handleClick={handleClick}
          handleJump={handleJump}
          history={history}
        />
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;