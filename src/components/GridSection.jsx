import card1 from "../assets/BBC-logo.svg"
import cnn from "../assets/cnn.svg"
import bloom from "../assets/Bloomberg.svg"

const GridSection = () => {
  return (
    <div className="w-full mx-auto md:w-[1200px] pb-0 h-[10vh] md:max-w-[1200px]">
        <div className="flex w-full h-[10vh] justify-evenly items-center">
            <div className=" w-[20%]">
                <p className="tracking-[0.25em] text-[0.875rem] text-[#8592ad] text-start font-grey-reg">AS SEEN ON</p>
            </div>
            <div className=" w-[80%] mb-0 justify-between flex">
                <img src={card1} alt="" className="w-[10%]"/>
                <img src={cnn} alt="" className="w-[10%]"/>
                <img src={bloom} alt="" className="w-[10%]"/>
            </div>
            
        </div>
    </div>
  )
}
export default GridSection
