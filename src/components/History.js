import React from 'react'

const History = ({history,handleJump}) => {
  return history.map((step, move) => {
        const description = move ? `Move #${move}` : 'Game start';
        return <li onClick = {()=> handleJump(move)} key={move} className="board-row">{description}</li>
      });
  
}

export default History
