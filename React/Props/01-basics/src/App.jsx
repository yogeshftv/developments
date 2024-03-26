import Child from "./components/Child"

function App() {
  
  //* 1. React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

  return (
    <>
      <div className="app">
        <Child 
          name="john doe"
          age={26}
          phone="8174157410"
          location="USA, Cincinnati"
        />
      </div>
    </>
  )
}

export default App
