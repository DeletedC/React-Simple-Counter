import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <button onClick={add}>+</button>
        <h2>{counter}</h2>
        <button onClick={subtract}>-</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
