import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Hero1 from "./components/Hero1"
import Navbar from "./components/Navbar"
import Payments from "./components/Payments"
import Testimonials from "./components/Testimonials"
import Testimonials1 from "./components/Testimonials1"

const App = () => {
  return (
    <div className=" text-stone-900 md:min-w-[940px] md:mx-auto overflow-hidden">
      {/* <Navbar /> */}
      <Hero1 />
      <Payments />
      <Cards />
      <Testimonials1 />
    </div>
  )
}
export default App