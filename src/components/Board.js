// import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick, historys }) {
  //  const setSquare = (idx) => {
  //   return (
  //     [...Array(9)].map((_, idx) => {
  //       return(
  //     <Square
  //       handleClick={handleClick}
  //       id={idx}
  //       squarePick={squares[idx]}
  //     />
  //     )}
  //     )
  //   );
  // }

  const moves = historys.map((step, move) => {
    const description = move ? `Move #${move}` : 'Game start';
    return <li key={move} className="board-row">{description}</li>
  });
  return (
    <div className="board">
      <ul className="squares">
        { [...Array(9)].map((_, idx) => {
          return (
              <Square
                handleClick={handleClick}
                id={idx}
                squarePick={squares[idx]}
              />
          );
        })}
      </ul>
      <div>
       {moves}
        {/* <div className="board-row">"Your code here"</div>
        <div className="board-row">"Your code here"</div>
        <div className="board-row">"Your code here"</div> */}
      </div>
    </div>
  );
}