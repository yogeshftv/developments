import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myCustomApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// If react compiles the above JSX code in same format as below then, if the below code passed to createRoot() method will it work?
const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click to visit google'
};

// Would Work
const anotherElement = (
  <a href="https://google.com" target="_blank">visit google</a>
)

const variable = "I will be injected only after all the tree graph for the element is prepared";

// The react way has predefined syntax and format which it uses to create elements
const ReactWay = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click to visit google',
  variable
);

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactWay
);

{/* It is simply an function which is parsed by the bundler into react understandable code */}
{/* You can write the <App /> as App() too and it will still work the same */}
{/* ReactElement => No if we try to pass the ReactElement obj to createRoot method it won't work because React has particular syntax & format in which it accepts obj. */}
{/* anotherElement => Would work */}