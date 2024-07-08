import React from 'react'
import ReactDOM from 'react-dom/client'
import HookUseState from './Components/HookUseState'

function App() {
  return (
    <>
      <HookUseState />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)