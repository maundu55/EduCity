import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"

function App() {

  return (
    <>
   <Navbar />
   <Hero />
   <div className="container">
    <Title subTitle ='OUR PROGRAM' title ='What We Offer' />
   <Programs />
   <About />
   <Title subTitle ='Gallery' title ='Campus Photos' />
   <Campus />
   <Title subTitle ='TESTIMONIALS' title ='What Students Say' />
   </div>
   
    </>
  )
}

export default App
