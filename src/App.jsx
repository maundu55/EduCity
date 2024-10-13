import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"

function App() {

  return (
    <>
   <Navbar />
   <Hero />
   <div className="container">
    <Title subTitle ='OUR PROGRAM' title ='What We Offer' />
   <Programs />
   </div>
   
    </>
  )
}

export default App
