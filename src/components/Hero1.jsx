import bg from "../assets/bg.png"
import phone from "../assets/Onboarding1.png"
import card from "../assets/cardmain.png"
import card1 from "../assets/card2.png"
import card2 from "../assets/card3.png"
import logo from "../assets/react.svg"
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";




const Hero1 = () => {
  return (
    <div className="pb-12 hero md:h-fit h-fit w-dvw text-stone-100">
      <nav className="py-4 mx-auto shadow-md md:px-8">
        <div className="flex items-center justify-between">
        <div className="flex ml-4">
            <p className="pt-2 pb-2 pl-4 pr-4 rounded-full text-stone-50 hover:bg-blue-600 hover:text-stone-300 "><GiPayMoney className="text-3xl " /></p>
        </div>
        <div className="flex ml-4 mr-4 space-x-6">
            <p className="pt-2 pb-2 pl-4 pr-4 text-[#034b93] font-semibold rounded-full bg-stone-50">Login</p>
            <p className="pt-2 pb-2 pl-5 pr-5 bg-[#034b93] rounded-full text-stone-50">Register</p>
        </div>
        
        </div>
    </nav>
        <div className="flex flex-wrap-reverse items-center lg:flex-row-reverse md:max-w-[940px] pt-6 md:pt-20 md:mx-auto">
            <div className="w-full md:w-1/2 ">
                <div className="flex justify-center lg:p-8 ">
                    <img src={phone} alt="Daniel Adisa" className=" delay-1000 duration-700 ease-in-out transition-all w-[350px] md:w-[2000px]" width={1000} height={1000} />
                </div>
            </div>

            <div className="w-full md:w-1/2">
            <h1 className=" mb-[50px] leading-none md:leading-none">
                <div className="text-center text-[60px] md:text-start w-[100%] box-border md:text-[90px] font-bold">Send</div>
                <div className="text-center text-[60px] md:text-start w-[100%] box-border md:text-[90px] font-bold">Recieve</div>
                <div className="text-center text-[60px] md:text-center md:w-[60%] box-border md:text-[90px] font-bold">&</div>
                <div className="text-center text-[60px] md:text-start w-[100%] box-border md:text-[90px] font-bold">Manage</div>
                <div className="text-center text-[60px] md:text-start w-[100%] box-border md:text-[90px] font-bold">Money</div>
              </h1>
              <p className="md:text-xl text-base md:leading-none leading-none tracking-normal md:m-0 mx-auto w-[80%] md:w-[80%] text-center md:text-start    mb-10">
                  …with super fast transfers, debit cards, group accounts, and shopping, PocketApp makes sending, receivi8 and managing your money a breeze.
              </p>

              <p className="pt-2 text-center flex items-center  border-blue-500 border-spacing-96 border-2 gap-2 md:hidden font-semibold tracking-tight mx-auto w-fit pb-2 pl-4 mb-4 pr-4 text-[#034b93] rounded-full bg-stone-50"><span><SiAppstore className="" /></span>App Store</p>
              <p className="pt-2 text-center flex items-center  border-blue-500 border-spacing-96 border-2 gap-2 md:hidden font-semibold tracking-tight mx-auto w-fit pb-2 pl-4 mb-16 pr-4 text-[#034b93] rounded-full bg-stone-50"><span><FaGooglePlay className="" /></span>Google Play</p>

            </div>
        </div>
    </div>
  )
}
export default Hero1

{/* <img src={card} height={320} width={320} alt="" className="absolute z-20 pt-96 md:pt-[500px] md:ml-28 "/>
  <img src={phone} height={280} width={280} alt="" className="absolute z-10 md:pt-[110px] md:ml-[135px]"/>
  <img src={card1} height={320} width={320} alt="" className="absolute z-0 md:pt-[350px] md:ml-[-50px]"/>
<img src={card2} height={320} width={320} alt="" className="absolute z-0 md:pt-[350px] md:ml-[280px]"/> */}
// {/* <div className="">

//             </div>    
            // <p className="md:text-2xl w-[70%] tracking-tighter mb-[50px] font-thin">
            //       …with super fast transfers, debit cards, group accounts, and shopping, PocketApp makes sending, receiving and managing your money a breeze.
            //     </p>


  // <div className="text-white hero k md:h-[70vh] h-[125dvh] w-dvw">
  //     <div className="grid items-center content-center justify-center grid-cols-1 mx-auto md:gap-8 lg:grid-cols-2 md:max-w-[940px] pt-[5.9375em] gap-0">
  //     <div className="max-h-[50%] relative  min-w-[398px] md:min-h-dvh md:min-w-[620px] md:col-span-1 mx-auto" >
  //         <div className="grid flex-col grid-cols-1">
  //         <img src={logo} alt="" className="mb-[76px] " />
              // <h1 className=" md:relative mb-[50px] leading-none">
              //   <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">Make</div>
              //   <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">money</div>
              //   <div className="block text-start w-[100%] box-border md:text-[120px] font-bold">moves</div>
              // </h1>
  //         </div>
  //     </div>



  //     <div className=" min-h-[50%] relative hidden min-w-[398px] md:min-h-dvh md:min-w-[620px] md:col-span-1" >
  //     </div>


  //     </div>
  // </div>