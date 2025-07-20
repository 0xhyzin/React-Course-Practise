import "./GameBoard.css";

export const GameBoard = ({ onSelectSquar, gameBoard }) => {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((playerSymbol, colindex) => (
              <li key={colindex}>
                <button
                  disabled={
                    gameBoard[rowindex][colindex] === null ? false : true
                  }
                  onClick={()=>onSelectSquar(rowindex,colindex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
