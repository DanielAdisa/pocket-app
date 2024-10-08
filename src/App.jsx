import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Hero1 from "./components/Hero1"
import Payments from "./components/Payments"

const App = () => {
  return (
    <div className=" text-stone-900 md:min-w-[940px] md:mx-auto overflow-hidden">
      <Hero1 />
      <Payments />
      <Cards />
    </div>
  )
}
export default App