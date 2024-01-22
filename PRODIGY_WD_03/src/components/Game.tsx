import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function calculateWinner(squares: any[]) {
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

    if (squares.includes(null) === false) {
      return "Draw!";
    }

    return null;
  }

  const handleClick = (i:any) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    return (
      <button
        className="reset-btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Start Game
      </button>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />

      <div className="winner">
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>

        {resetGame()}
      </div>
    </>
  );
};

export default Game;
