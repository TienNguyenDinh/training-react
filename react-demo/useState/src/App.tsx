import { useState } from 'react';
import './App.css';

interface User {
  username: string,
  password: string
}

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User>({
    username: 'helloguy',
    password: '1234'
  });

  function handleClick() {
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  function handleChangeField(field: string, value: string) {
    setUser({
      ...user,
      [field]: value
    });
  }

  return (
    <>
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
    <input
      onChange={(e) => handleChangeField('username', e.target.value)}
      placeholder='Enter username...' />
    <input
      onChange={(e) => handleChangeField('password', e.target.value)}
      placeholder='Enter password...' />
    <p>username: {user.username}</p>
    <p>password: {user.password}</p>
    </>
  );
}

export default App
