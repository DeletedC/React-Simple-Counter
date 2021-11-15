import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';


function App() {

  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  }

  const subtract = () => {
    setCounter(counter - 1);
  }

  useEffect(() => {
    if (counter % 2 == 0 && counter !== 0) console.log(`${counter} is even! Huzzaaaaah!`);
  })

  return (
    <div className="App">
      <Header />
      <button onClick={add}>+</button>
      <h2>{counter}</h2>
      <button onClick={subtract}>-</button>
    </div>
  );
}

export default App;
