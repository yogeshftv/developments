import { useState } from 'react';

function App() {
  // 1. Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state.
  const [arr, setArr] = useState([1,2,3,4,5,6]);

  function workingWithArr() {
    // 2. Just like with objetcs, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array. In brief they should be treated as read-only.
    setArr((prevValue) => {
      return [...prevValue, 7,8,9];
    });

    // 3. Which means you shouldn't use methods that mutate the array, such as push() and pop(). Instead everytime you want to update an array, you'll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like filter() and map(). Then you can set your state to the resulting new array.

  }

  return (
    <div className="app">
      <div className="container">
        <br />
        <h2>Working with arrays in state</h2>
        <br />
        <br />
        <button onClick={ workingWithArr }>Arrays works like objects too when working with state</button>
        <br />
        <br />
        <p>{ arr }</p>
      </div>
    </div>
  )
}

export default App;