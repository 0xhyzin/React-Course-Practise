import "./GameContent.css";
import { GameBoard } from "../GameBoard/GameBoard";
import { Player } from "../Player/Plalyer";
import { useState } from "react";
import { Log } from "../Log/Log";
import { WINNING_COMBINATIONS } from "./../../winning-combinations";
import { GameOver } from "../GameOver/GameOver";

function hundelPlayerActive(turn) {
  let currentPlayer = "X";
  if (turn.length > 0 && turn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getGameBoard() {
  const gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, colum } = square;
    gameBoard[row][colum] = player;
  }
  return gameBoard;
}

export const GameContent = () => {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState({
    X: "player 1",
    O: "Player 2",
  });

  const gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, colum } = square;
    gameBoard[row][colum] = player;
  }

  let winner = gameTurn.length === 9 ? "Draw" : null;
  
  for (let combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const SecondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const ThirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === SecondSquareSymbol &&
      firstSquareSymbol === ThirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const activePlayer = hundelPlayerActive(gameTurn);

  function handelPlayerActive(rowIndex, columIndex) {
    setGameTurn((prevTurn) => {
      let currentPlayer = hundelPlayerActive(prevTurn);
      const updateTurn = [
        { square: { row: rowIndex, colum: columIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updateTurn;
    });
  }
  function handelWinnerName(playerSymbole, playerName) {
    setPlayers((prewPlayer) => {
      return {
        ...prewPlayer,
        [playerSymbole]: playerName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            playerSymbol="X"
            onSaveEditing={handelWinnerName}
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="Player 2"
            playerSymbol="O"
            onSaveEditing={handelWinnerName}
          />
        </ol>
        {winner && (
          <GameOver
            winner={winner}
            onClick={() => {
              setGameTurn([]);
              winner = null;
            }}
          />
        )}
        <GameBoard onSelectSquar={handelPlayerActive} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
};
