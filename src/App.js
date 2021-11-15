import './App.css';
import { useState } from 'react';
import Header from './components/Header';


function App() {

  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  }

  const subtract = () => {
    setCounter(counter - 1);
  }

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
