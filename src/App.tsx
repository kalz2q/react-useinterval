import React from 'react';
import './App.css';
// 
const { useEffect, useRef, useState } = React;

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1000);
  const [delay, setDelay] = useState(500);
  const delay2 = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(count);  // 出力: 0
      // setCount(count + 1);
      setCount((prevCount) => prevCount + 1);
    }, delay);
    const interval2 = setInterval(() => {
      // console.log(count);  // 出力: 0
      // setCount(count + 1);
      setCount2((prevCount) => prevCount + 1);
    }, delay2);

    return () => { clearInterval(interval); clearInterval(interval2) };
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{count2}</h1>
    </div>);
}

export default App;
