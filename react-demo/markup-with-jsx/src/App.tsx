const App = () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  const isLoggedIn = true;

  return (
    <div>
      <h1>Item List from {isLoggedIn ? 'User123' : 'Guest'}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
