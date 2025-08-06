
import Navbar from "./components/Navbar"
import Footer from "./components/Footer.jsx"
import Card from "./components/Card.jsx"

import "./App.css"
function App() {
  
  let cardtitle = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tenetur impedit libernsectetur adipisicing elit. Consectetur inventore fugit sint neque, commodi odit, quis exercitationem eum error saepe iste aliquam unde minus fugiat esse corrupti aut vitae molestiae."
  return (
    <>


      <Navbar />
      <div className="mycards">

        <Card title="Card 1" desc={cardtitle} />
        <Card title="Card 2" desc={cardtitle} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" />
        <Card title="Card 3" desc={cardtitle} />
        <Card title="Card 4" desc={cardtitle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZzEyLandambInrHPjttThL_23T0JX6jblQ&s" />

      </div>
      <Footer />
    </>
  )
}

export default App
