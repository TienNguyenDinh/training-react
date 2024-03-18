import { useState, useEffect } from 'react';
import './App.css';

interface Data {
  id: string,
  userId: string,
  title: string,
  completed: boolean
}

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<Data[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Data[]) => setData(data));
  }, []);

  return (
    <div key={count}>
      <p>Count: {count}</p>
      <p>Data length: {data.length}</p>
    </div>
  )
}

export default App
