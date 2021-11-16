import { useState, useEffect } from 'react';

const Counter = () => {

	const [counter, setCounter] = useState(0);
	const [isEven, setIsEven] = useState(false);

  const add = () => {
    setCounter(counter + 1);
  }

  const subtract = () => {
    setCounter(counter - 1);
  }

  useEffect(() => {
    if (counter % 2 == 0 && counter !== 0) setIsEven(true);
		else setIsEven(false);
  }, [counter])

  return (
    <div>
			<div id="counterDiv">
				<button onClick={subtract}>-</button>
					<h2 id="counter">{counter}</h2>
					<button onClick={add}>+</button>
				</div>

				{isEven? <h3 id="huzzah">{`${counter} is even! Huzzaaaaah!`}</h3> : "" }   
    </div>
  )
}

export default Counter
