import React, { useState } from 'react';
import './App.css';

type SquareValue = 'X' | 'O' | 'null';

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button className='square' onClick={onClick}>
    {value}
  </button>
);

const App = () => {
  const [squares, setSquares] = useState<Array<SquareValue>>(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const squaresCopy = squares.slice();
    if (squaresCopy[i]) {
      return;
    }
    
    squaresCopy[i] = isXNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setIsXNext(!isXNext);
  };

  return (
    <div className='table-layout'>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
};

export default App;
