import CardCompo from "./Components/CardCompo";

function App() {

  let cardsObj = {
    title: "Hello World 1"
  }

  return (
    <>
      <CardCompo cards={cardsObj} />
    </>
  )
}

export default App;