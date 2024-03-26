import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <Profile 
        user="johndoe"
        location="usa, california"
        age={24}
        isActive={true}
      />
    </div>
  )
}

export default App;