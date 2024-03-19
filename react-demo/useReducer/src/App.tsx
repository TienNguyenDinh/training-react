import { createContext, useContext, useReducer } from 'react';
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

interface CountContextProps {
  count: number;
  dispatchCount: React.Dispatch<Action>;
}

const CountContext = createContext<CountContextProps | null>(null);

const App = () => {
  const [count, dispatchCount] = useReducer(countReducer, 0);

  return (
    <CountContext.Provider value={{ count, dispatchCount }}>
      <Counter />
    </CountContext.Provider>
  )
}

const Counter = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('Counter must be used within a CountProvider');
  }

  const { count, dispatchCount } = context;

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
