import React from "react";

function Square({ handleClick, id, squarePick}) {
  return (
    <button key = {id} className={"square"} onClick={() => handleClick(id)}>
      {squarePick}
    </button>
  );
}

export default Square;