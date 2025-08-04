import logo from './logo.svg';
import "./App.css"
import { useState } from 'react';

import Nav from './component/navbar.js'
import Footer from "./component/footer.js"

function App() {
  const [value, setvalue] = useState(0);
  return (

    <div className="App">
      <Nav />
      <p>{value}</p>

      <button onClick={() => {
        setvalue(value + 1)
      }} >click me</button>

      <Footer logotext="hey this is app footer which is gettting change using props" />
      {/* u can use component without passing props  */}
      <Footer />
    </div>




  );
}

export default App;
