import React, { useState } from 'react'

export default function HookUseState() {

  const [counter, setCounter] = useState(0);
  
  function incrementCounter() {
    setCounter(counter + 1);
    console.log(counter);
  }

  function decrementCounter() {
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <div>
      <h1>{ counter }</h1>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
    </div>
  )
}

/* 

- When you click on the code output in browser, you will find out that even though after clicking on increment and decrement button there seems to be no visible change in the UI. However if you log the value of counter variable the function seems to be working perfectly. 
- The issue over here is that, We are not telling React to re-render the page & show the new values everytime the variable counter changes its value. To resolve this issue all we have to do is to use useState() hook whose main purpose it to re-render the UI when the state changes for every component or piece of UI that is using that state variable.

- To define useState() hook: const [stateVariable, stateUpdaterFunction] = useState(initialValue/initialState);
- To update the state value you need to use the stateUpdaterFunction that updates the value of the state variable.

*/
