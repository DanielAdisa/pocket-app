import AfterGrid from "./components/AfterGrid"
import Cards from "./components/Cards"
import Cardsection from "./components/Cardsection"
import Download from "./components/Download"
import Footer from "./components/Footer"
import GridSection from "./components/GridSection"
import Hero from "./components/Hero"
import Hero1 from "./components/Hero1"
import Hero2 from "./components/Hero2"
import Hero3 from "./components/Hero3"
import Nav from "./components/Nav"
import Payments from "./components/Payments"
import Payments1 from "./components/Payments1"
import Payments2 from "./components/Payments2"
import Pays from "./components/Pays"
import Services from "./components/Services"
import Started from "./components/Started"
import Testimonials from "./components/Testimonials"
import Testimonials1 from "./components/Testimonials1"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero3 />
      <GridSection />
      <AfterGrid />
      <Pays />
      <Started />
      {/* <Cardsection/> */}
      {/* <Testimonials1 /> */}
      {/* <Payments2 /> */}
      {/* <Services /> */}
      {/* <Download /> */}
      <Footer />
    </div>
  )
}
export default App