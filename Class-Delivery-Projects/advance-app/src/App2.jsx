// import { useState, useMemo } from 'react';
import './App.css'
import React, { useState, useCallback } from 'react';
import Child from './Components/Child';
import Count from './Components/Count';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  // function increment(){
  //   setCount(count + 1)
  //   console.log("Button Clicked")
  // }
  //  ✅ Function memoized — only re-created when 'count' changes
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);


  // function handleClick() {
  //   setCount(count + 1)
  //   console.log("Button Clicked")
  // }

  // function expensiveTask(num){
  //   console.log("Expensive Task Called")
  //   for (let i=0; i<10000; i++){
  //     console.log(i);
  //   }
  //   return num * 2;
  // }

  // const result = expensiveTask(10);

  // const result = useMemo(() => {
  //   return expensiveTask(10);
  // }, [])
 

  return (
    <div className={`app ${theme}`}>
      <h3>Learnign Performance Optimization</h3>
      <h2>Count {count}</h2> 

      <Count increment={increment} />
       {/* <br />
      <br /> */}
      <button className="toggle-btn" onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}>Toggle Theme</button>
      <p className="theme-text">Current theme:{theme}</p>
{/*     
      <button onClick={handleClick}>Increment</button>
      <h4>Count is {count}</h4>
      <Child name='Asiya' age='22' />
      <h5>{result}</h5> */}
      </div>
  )
}

export default App
