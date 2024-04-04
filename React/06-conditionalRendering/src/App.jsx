import UserGreeting from "./UserGreeting"

/*

Conditional rendering allows you to control what gets rendered in your application based on certain conditions, for example show, hide or change component.

*/

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={false} username={"johndoe548"}/>
    </>
  )
}

export default App
