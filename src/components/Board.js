// import React, { useState } from "react";
import History from "./History";
import Square from "./Square";


export default function Board({history, squares, handleClick, histories, handleJump }) {

 



  return (
    <div className="board">
      <ul className="squares">
        <div>
        <Square handleClick={handleClick} id={0} squarePick={squares[0]}/> 
        <Square handleClick={handleClick} id={1} squarePick={squares[1]}/>
        <Square handleClick={handleClick} id={2} squarePick={squares[2]}/> 
         </div>
         <div>
        <Square handleClick={handleClick} id={3} squarePick={squares[3]}/> 
        <Square handleClick={handleClick} id={4} squarePick={squares[4]}/>
        <Square handleClick={handleClick} id={5} squarePick={squares[5]}/> 
         </div>
         <div>
        <Square handleClick={handleClick} id={6} squarePick={squares[6]}/> 
        <Square handleClick={handleClick} id={7} squarePick={squares[7]}/>
        <Square handleClick={handleClick} id={8} squarePick={squares[8]}/> 
         </div>
      </ul>
      <div>
      <History history={history} handleJump={handleJump} />
      </div>
    </div>
  );
}