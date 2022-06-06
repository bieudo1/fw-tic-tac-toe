import React from "react";

function Square({ handleClick, id, squarePick}) {
  return (
    <button className={"square"} onClick={() => handleClick(id)}>
      {squarePick}
    </button>
  );
}

export default Square;