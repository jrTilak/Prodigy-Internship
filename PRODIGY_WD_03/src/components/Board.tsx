import Square from "./Square";

const Board = ({ squares, onClick }:any) => {
  return (
    <div className="board">
      {squares.map((square:any, i:any) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
