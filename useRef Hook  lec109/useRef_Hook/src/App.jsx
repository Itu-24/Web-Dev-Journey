import { useState, useEffect } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const a = useRef(0);
  // const [indicator, setindicator] = useState(3);

  // useeffect runs after the render is completed 
  // useEffect(() => {
  //   // if (count > 0) {

  //   //   setindicator((indicator) => {
  //   //     return indicator + 2;
  //   //   })
  //   // }
  //   a.current = a.current + 1;
  //   console.log(`rendering...... value of a is ${a.current}`);
  // })

  // 2nd use dom manipulation
  const btnref = useRef();

  useEffect(() => {


    btnref.current.style.backgroundColor = 'green'
    console.log("first rendering........");
  }, [])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          {/* <button>{indicator}</button> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount(count + 1)}>
          count is {count} and useref variable a value is {a.current}
        </button> */}
        <button ref={btnref} onClick={() => setCount(count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => {
        btnref.current.style.display = 'none';
      }} >hide button</button>
    </>
  )
}

export default App
