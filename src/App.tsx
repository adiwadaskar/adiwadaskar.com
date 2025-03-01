import { useState } from 'react'

import './App.css'

function App() {
  const [state, setState] = useState(0)

  const onButtonClick = () => setState(state + 1)

  return (
    <div>
      <button onClick={onButtonClick}>
        Click me
      </button>
      <div>
        You clicked me {state} times
      </div>
    </div>
  )
}

export default App
