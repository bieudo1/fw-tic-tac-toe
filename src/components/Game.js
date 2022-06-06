import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history , setHistory ] = useState([{
    sep : (Array(9).fill(null))
  }]);
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState("x");

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(squares))
  },[squares])

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
    // console.log("b",squares)
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a])
        return squares[a];
      }
    }
    return null ;
  };

  //Handle player
  const handleClick = (id) => {
    if (squares[id] === null) {
      // let newArr = squares;
      player === "x" ? setPlayer("O") : setPlayer("x");
      // newArr[id] = player;
      // setSquares(newArr);
      setHistory(prev=> [...prev,{history: history.concat([{sep: squares}])}]);
      setSquares(prev => [...prev,squares[id]=player]);
    }
  };
  console.log(history)
// console.log("c",calculateWinner(squares))
// console.log("a",squares)
  //Restart game
  const handlRestart = () => {
    setSquares(Array(9).fill(null));
    // setXIsNext(true);
    setPlayer("x");
    setWinner(null);    
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: { winner === null ? "Next playe" : winner }</h2>
      <div className="game">
        <span className="player">Next player is: {player}</span>
        <Board squares={squares} handleClick={handleClick} historys={history} />
      </div>
      <button onClick={() => handlRestart()} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;