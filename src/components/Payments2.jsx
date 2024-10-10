import { MdOutlineSendToMobile } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPiggyBank } from "react-icons/gi";
import phone from "../assets/phoneguy.jpg"
import upwards from "../assets/upway.jpeg"
import { SiWwise } from "react-icons/si";
import { SiAwssecretsmanager } from "react-icons/si";
import { MdSendToMobile } from "react-icons/md";
import onb from "../assets/Onboarding1.png"


const Payments2 = () => {
  return (
    <section className="md:pt-[125px] pt-[90px] md:pl-11 md:pr-11 mb-0 md:max-w-[1034px] h-[fit] mx-auto md:mx-auto p-4">
        <div className="">
                <h2 className=" font-bold text-[3rem] md:text-[4.5rem] text-[#285183] mb-[20px] leading-[1.25em]">
                    Payments
                </h2>
                <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#4689cd]/80">
                    All your transactions in one place
                </p>
        </div>
        <div className="grid md:w-[900px] rounded-2xl grid-cols-1 gap-1 mb-20 md:grid-cols-6 md:grid-rows-4 h-fit md:h-[610px]">

            <div className="md:h-[150px] flex p-4 items-center text-stone-100 text-2xl  rounded-2xl w-full col-span-1 md:col-start-1 bg-[#2f85b8] ">
              <div className="flex-col">
                <MdSendToMobile className="text-5xl " />
                <p className="mt-5 font-medium">Send</p>
              </div>
            </div>


            <div className="col-span-1 flex items-center text-2xl text-[#2f85b8] p-4 rounded-2xl w-full h-[150px] md:col-start-2 md:row-start-1 bg-stone-100 ">
              <div className="flex-col">
                <GiReceiveMoney className="text-5xl " />
                <p className="mt-5 font-medium">Receive</p>
              </div>
            </div>


            <div className="col-span-1 flex items-center text-2xl text-[#2f85b8] p-4 rounded-2xl w-full h-[150px] md:col-start-1 bg-stone-100">
              <div className="flex-col">
                <GiPiggyBank className="text-5xl " />
                <p className="mt-5 font-medium">Save</p>
              </div>
            </div>


            <div className="md:col-span-1 rounded-2xl w-full h-[150px] md:col-start-2 bg-[#2f85b8] flex p-4 items-center text-stone-100 text-2xl ">
              <div className="flex-col">
                <SiAwssecretsmanager className="text-5xl " />
                <p className="mt-5 font-medium">Secure</p>
              </div>
            </div>


            <div className="relative flex flex-col justify-end w-full p-4 overflow-hidden md:row-span-2 md:col-start-1 md:col-span-2 rounded-2xl isolate">
              <img src={phone} alt="" class="absolute blur-sm  inset-0 h-full w-full object-cover"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black  via-[#2f85b8]/60"></div>
              <h3 class="z-10 mt-3 text-3xl font-bold text-white">Transact</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">...with ease</div>
            </div>


            <div className="relative flex flex-col h-[150px] justify-end w-full md:h-full p-4 overflow-hidden md:col-start-3 md:row-end-3 md:row-start-1 md:col-span-2 rounded-2xl">
              <img src={onb} alt="" class="absolute  inset-0 h-full w-full object-contain"/>
              <div class="absolute inset-0 bg-gradient-to-t from-stone-500  via-[#2f85b8]/60"></div>
            </div>

            <div className="w-full bg-black md:col-span-2 md:col-start-5 md:row-start-1 md:row-end-3 rounded-2xl"></div>

            <div className="relative flex flex-col justify-end w-full h-full p-4 overflow-hidden md:row-start-3 md:row-span-2 md:col-start-3 md:col-span-4 rounded-2xl isolate ">
              <img src={upwards} alt="" class="absolute inset-0 h-full blur-sm w-full object-center object-cover"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-[#2f85b8]/60"></div>
              <h3 class="z-10 mt-3 text-3xl font-bold text-white">Grow</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">...your busniess and earnings</div>
            </div>
        </div>
    </section>
  )
}
export default Payments2