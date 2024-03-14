import React, { useState } from 'react';
import './App.css';

type SquareValue = 'X' | 'O' | '';

interface Square {
  id: string | number,
  value: SquareValue
}

interface SquareProps {
  value: SquareValue,
  onClick: () => void
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button className='square' onClick={onClick}>
    {value}
  </button>
);

const getInitSquares = () => {
  const initSquares: Square[] = [];
  for(let i = 1; i <= 9; ++i) {
    initSquares.push({
      id: i,
      value: ''
    });
  }

  return initSquares;
}

const App = () => {
  const [squares, setSquares] = useState<Array<Square>>(getInitSquares());
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const squaresCopy = squares.slice();
    if (squaresCopy[i].value) {
      return;
    }

    squaresCopy[i].value = isXNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setIsXNext(!isXNext);
  };

  return (
    <div className='table-layout'>
      {squares.map((square, i) => (
        <Square
          key={square.id}
          value={square.value}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
};

export default App;
