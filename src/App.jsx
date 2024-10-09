import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Hero1 from "./components/Hero1"
import Navbar from "./components/Navbar"
import Payments from "./components/Payments"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div className=" text-stone-900 md:min-w-[940px] md:mx-auto overflow-hidden">
      {/* <Navbar /> */}
      <Hero1 />
      <Payments />
      <Cards />
      <Testimonials />
    </div>
  )
}
export default App