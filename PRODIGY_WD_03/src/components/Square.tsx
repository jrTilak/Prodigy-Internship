const Square = ({ value, onClick }:{
  value: string;
  onClick: () => void;

}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
