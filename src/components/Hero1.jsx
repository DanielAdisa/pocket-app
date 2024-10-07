import bg from "../assets/bg.png"
import phone from "../assets/phone2.png"
import card from "../assets/cardmain.png"
import card1 from "../assets/card2.png"
import card2 from "../assets/card3.png"
import logo from "../assets/react.svg"


const Hero1 = () => {
  return (
    <div className="text-white hero k md:h-[70vh] h-dvh w-dvw">
        <div className="grid items-center content-center justify-center grid-cols-1 mx-auto md:gap-8 lg:grid-cols-2 md:max-w-[940px] pt-[5.9375em] gap-0">
        <div className="max-h-[50%] relative  min-w-[398px] md:min-h-dvh md:min-w-[620px] md:col-span-1 mx-auto" >
            <div className="">
                <img src={logo} alt="" className="mb-[76px] " />
                <h1 className=" md:relative mb-[50px] leading-none">
                  <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">Make</div>
                  <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">money</div>
                  <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">moves</div>
                </h1>
            </div>    
            <p className="md:text-2xl w-[70%] tracking-tighter mb-[50px] font-thin">
                  …with super fast transfers, debit cards, group accounts, and shopping, PocketApp makes sending, receiving and managing your money a breeze.
                </p>
        </div>
        <div className=" min-h-[50%] relative hidden min-w-[398px] md:min-h-dvh md:min-w-[620px] md:col-span-1" >
        <img src={card} height={320} width={320} alt="" className="absolute z-20 pt-96 md:pt-[500px] md:ml-28 "/>
              <img src={phone} height={280} width={280} alt="" className="absolute z-10 md:pt-[110px] md:ml-[135px]"/>
              <img src={card1} height={320} width={320} alt="" className="absolute z-0 md:pt-[350px] md:ml-[-50px]"/>
              <img src={card2} height={320} width={320} alt="" className="absolute z-0 md:pt-[350px] md:ml-[280px]"/>
        </div>
        </div>
    </div>
  )
}
export default Hero1