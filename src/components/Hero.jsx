import bg from "../assets/bg.png"
import phone from "../assets/phone2.png"
import card from "../assets/cardmain.png"
import card1 from "../assets/card2.png"
import card2 from "../assets/card3.png"
import logo from "../assets/react.svg"

const Hero = () => {
  return (
    <div className="text-white hero ">
        <div className="items-center justify-center block pt-28 md:flex h-dvh md:h-1/2dvh">
            <div className="md:w-[470px] md:h-[1060px]">
                <img src={logo} alt="" className="mb-[76px] " />
                <h1 className=" md:relative mb-[50px] leading-none">
                  <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">Make</div>
                  <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">money</div>
                  <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">moves</div>
                </h1>
                <p className="md:text-2xl w-[100%] mb-[50px] font-thin">
                  …with super fast transfers, debit cards, group accounts, and shopping, PocketApp makes sending, receiving and managing your money a breeze.
                </p>
            </div>
            <div className="md:w-[470px] md:h-[1060px] md:relative ">
              <img src={card} height={320} width={320} alt="" className="absolute z-20 md:pt-[500px] md:ml-28"/>
              <img src={phone} height={280} width={280} alt="" className="absolute z-10 md:pt-[110px] md:ml-[135px]"/>
              <img src={card1} height={320} width={320} alt="" className="absolute z-0 md:pt-[350px] md:ml-[-30px]"/>
              <img src={card2} height={320} width={320} alt="" className="absolute z-0 md:pt-[350px] md:ml-[250px]"/>
            </div>
        </div>
    </div>
  )
}
export default Hero

// padding-top: 5.9375em;
        // <div className=" flex max-w-[80em] w-[100%] mx-auto p-[43px]">
        //     <div className="flex flex-wrap items-center justify-between ">
        //       <div className=" w-1/2 max-w-[100%] m-8 relative pr-[5em] mb-[184px] z-20">
        //           <img src={logo} alt="" className="mb-[76px] " />
                  // <h1 className=" relative mb-[50px] leading-none">
                  //   <div className="block text-start w-[100%] box-border text-[8em] font-extrabold">Make</div>
                  //   <div className="block text-start w-[100%] box-border text-[8em] font-extrabold">money</div>
                  //   <div className="block text-start w-[100%] box-border text-[8em] font-extrabold">moves</div>
                  // </h1>
                  // <p className="text-2xl w-[100%] mb-[50px] font-thin">
                  // …with super fast transfers, debit cards, group accounts, and shopping, PocketApp makes sending, receiving and managing your money a breeze.
                  // </p>
        //       </div>
        //       <div className="">

        //       </div>
        //     </div>
        // </div>

        // items-center relative justify-center overflow-hidden text-[14px] min-h-screen reflex