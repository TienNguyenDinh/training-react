import { useState } from 'react'

function App() {
  const initialItems = ['Apple', 'Banana', 'Cherry'];

  const [items, setItems] = useState(
    initialItems.map(item => ({ name: item, completed: false }))
  );

  const handleClick = (index) => {
    const newItems = [...items];

    newItems[index].completed = !newItems[index].completed;

    setItems(newItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <p>Click item to mark or unmark it.</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}
            onClick={() => handleClick(index)}
            style={{ textDecoration: item.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
