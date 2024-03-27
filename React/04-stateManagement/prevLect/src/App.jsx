import { useState } from "react";
  
// React controls UI Updation & Manipulation using hooks

function App() {

  // The useState Propogates the changes into User Interface (DOM). 
  // It tracks the state of the User Interface. 
  let [counter, setCounter] = useState(15); 
  // returns two values in an array [current value, function used to update state]

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h2>Counter Value: { counter }</h2>
      <button 
        onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App;
