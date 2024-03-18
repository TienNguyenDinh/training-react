import { useReducer } from 'react';
import './App.css';

type Action = 

interface Payload {
  value: number
}

const countReducer = (state: number, action: Action) => {
  const { payload } = action;

  switch(action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    case 'PLUS': {
      return state + payload.value;
    }
    case 'MINUS': {
      return state - payload.value;
    }
    case 'RESET': {
      return 0;
    }
  }
}

const App = () => {
  const [count, dispatchCount] = useReducer(countReducer, 0);

  return (
    <>
    </>
  )
}

export default App
