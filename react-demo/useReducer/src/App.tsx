import { useReducer } from 'react';
import './App.css';

type Type = 'INCREMENT' | 'DECREMENT' | 'RESET';

interface Action {
  type: Type
}

const countReducer = (state: number, action: Action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    case 'RESET': {
      return 0;
    }
    default: {
      throw new Error('Unknow action!');
    }
  }
}

const App = () => {
  const [count, dispatchCount] = useReducer(countReducer, 0);

  return (
    <>
      <p>Count: {count}</p>
      <div>
        <button type="button" onClick={() => dispatchCount({ type: 'INCREMENT' })}>Increment</button>
        <button type="button" onClick={() => dispatchCount({ type: 'DECREMENT' })}>Decrement</button>
        <button type="button" onClick={() => dispatchCount({ type: 'RESET' })}>Reset</button>
      </div>
    </>
  )
}

export default App
