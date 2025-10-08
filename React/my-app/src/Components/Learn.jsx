import React from 'react'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'

const Learn = () => {
    const [count, setCount] = useState(0)
    const [total, settotal] = useState(0)

    // 1. side-effect function
    // 2. clean up function
    // 3. dependency array
    //variations of useEffect
    //variation 1: runs on every render
    // useEffect(() => {
    //     alert("I will run on every render")
    // })

    // variation 2: runs only once after initial render

    // useEffect(() => {
    //  alert("I will run only once")
    // }, [])

    // variation - 3: runs when anything in the dependency array changes

    // useEffect(() => {
    //     alert("Runs when any thing changes in dependency array")
    // }, [count])

    // variation - 4:  multiple dependencies
    // useEffect(() => {
    //   alert("Runs when any thing changes in dependency array")
    // }, [count, total])

    // variation - 5: cleanup function
    useEffect(() => {
      console.log("I am inside useEffect, i am responsible for side effects")
      return () => {
       console.log("I am inside cleanup function")
      }
    }, [count])
    
    

    
  
    function handleClick(){
        setCount(count + 1);
        console.log("COunt btn is clicked")
    }
    function handleTotal(){     
        settotal(total + 1);
        console.log("Total btn is clicked")
    }
  return (
    <div>
        <h2>Leanirng Use Effect Hook</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleTotal}>total btn</button>
        <h3>count: {count}</h3>
        <h3>Total : {total}</h3>
    </div>
  )
}

export default Learn