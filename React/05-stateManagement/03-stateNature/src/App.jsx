import Slider from "./components/Slider";

function App() {

  // 1. State is isolated and private: State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

  // 2. State is not tied to a particular function call or a place in the code, but it's local to the specific place on the screen. No matter how many components you rendered their state is stored separately. Every component instance manages its own state independently.

  // 3. Components can maintain their own state: Each React component instance can have its own internal state that holds data specific to that component. This state is not shared with other components or the global application state.

  // 4. State is fully private to the component declaring it. The parent component can't change it. This lets you add state to any component or remove it without impacting the rest of the components.

  return (
    <div className='app'>  
      <Slider />
      <Slider />
    </div>
  )
}

export default App