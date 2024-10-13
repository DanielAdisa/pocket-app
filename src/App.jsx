import Cards from "./components/Cards"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Hero1 from "./components/Hero1"
import Hero2 from "./components/Hero2"
import Nav from "./components/Nav"
import Payments from "./components/Payments"
import Payments1 from "./components/Payments1"
import Payments2 from "./components/Payments2"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Testimonials1 from "./components/Testimonials1"

const App = () => {
  return (
    <div className="overflow-hidden text-stone-900 md:mx-auto">
      <Nav />
      <Hero2 />
      {/* <Testimonials1 /> */}
      <Payments2 />
      {/* <Services /> */}
      <Download />
      <Footer />
    </div>
  )
}
export default App