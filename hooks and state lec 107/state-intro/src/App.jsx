import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcnt] = useState(10 - 5);
  return (
    <>
      <div  >
        <p>connt is {count}</p>
        <button onClick={() => {

          setcnt(count + 1);

        }}>click me</button>
      </div>
    </>
  )
}

export default App
