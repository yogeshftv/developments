import { useState } from "react"

function App() {
  // 1. Objects are mutable meaning it is possible

  // 2. State can hold any kind of JavaScript value, including objects. But you should'nt change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make copy of an existing one), and then set the state to use that object.

  const [employee, setEmployee] = useState({
    fname: 'first name',
    lname: 'last name',
    age: 0,
    location: 'location',
    designation: 'designation',
    experience: 0
  });

  function handleState() {
    setEmployee((prevState) => {
      return { ...prevState, fname: "Max", lname: "Dupri", age: 24, location: "USA California", designation: "Software Engineer" }
    })
  }

  return (
    <div className="app">
      <p>{ employee.fname }</p>
      <p>{ employee.lname }</p>
      <p>{ employee.age }</p>
      <p>{ employee.location }</p>
      <p>{ employee.designation }</p>
      <p>{ employee.experience }</p>
      <button onClick={handleState}>Submit</button>
    </div>
  )
}

export default App
