import { MdOutlineSendToMobile } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPiggyBank } from "react-icons/gi";

import upwards from "../assets/upway.jpeg"
import { SiWwise } from "react-icons/si";
import { SiAwssecretsmanager } from "react-icons/si";
import { MdSendToMobile } from "react-icons/md";
import onb from "../assets/Onboarding1.png"
import phone2 from "../assets/Onboarding3.png"


const Payments2 = () => {
  return (
    <section className="md:pt-[125px] pt-[90px] md:pl-11 md:pr-11 mb-0 md:max-w-[80vw] h-[fit] mx-auto md:mx-auto p-4">
        <div className="">
                <h2 className=" font-bold text-[3rem] md:text-[4.5rem] tracking-tighter text-[#285183] mb-[20px] leading-[1.25em]">
                    Payments
                </h2>
                <p className="text-[1rem] md:text-[2rem] tracking-tight font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#4689cd]/80">
                    All your transactions in one place
                </p>
        </div>
        <div className="grid md:w-[75vw] rounded-2xl grid-cols-1 gap-1 md:grid-cols-6 md:grid-rows-4 h-screen md:h-screen">

          <div className="relative flex-col justify-end w-full p-4 md:flex hidden row-span-2 overflow-hidden bg-black md:col-span-6 md:h-full h-[108px] rounded-2xl isolate"></div>

            <div className="md:hidden md:h-[150px] flex p-4 items-center row-start-1 shadow-inner hover:shadow-inner-[0px]  text-stone-100 text-2xl  rounded-2xl w-full col-span-1 md:col-start-1 bg-[#2f85b8] ">
              <div className="flex-col">
                <MdSendToMobile className="md:text-5xl " />
                <p className="mt-5 font-medium">Send</p>
              </div>
            </div>


            <div className="md:hidden col-span-1 flex items-center text-2xl text-[#2f85b8] row-start-2 p-4 rounded-2xl w-full md:h-[150px] md:col-start-2 md:row-start-1 bg-stone-100 ">
              <div className="flex-col">
                <GiReceiveMoney className="md:text-5xl " />
                <p className="mt-5 font-medium">Receive</p>
              </div>
            </div>


            <div className="md:hidden col-span-1 flex items-center text-2xl text-[#2f85b8] p-4 rounded-2xl w-full md:h-[150px] md:col-start-1 bg-stone-100">
              <div className="flex-col">
                <GiPiggyBank className="md:text-5xl " />
                <p className="mt-5 font-medium">Save</p>
              </div>
            </div>


            <div className="md:hidden md:col-span-1 md:row-start-2 rounded-2xl w-full md:h-[150px] row-start-4 md:col-start-2 bg-[#2f85b8] row-span-1 flex p-4 items-center text-stone-100 text-2xl ">
              <div className="flex-col">
                <SiAwssecretsmanager className="md:text-5xl " />
                <p className="mt-5 font-medium">Secure</p>
              </div>
            </div>


            <div className="relative flex flex-col justify-end w-full col-span-1 row-start-3 p-4 overflow-hidden md:h-full md:row-start-3 md:row-span-2 md:col-start-1 md:col-span-2 rounded-2xl isolate">
              {/* <img src={phone} alt="" class="absolute blur-sm  inset-0 h-full w-full object-cover"/> */}
              <div class="absolute inset-0 bg-gradient-to-t from-black  "></div>
              <h3 class="z-10 mt-3 md:text-3xl font-bold text-white">Transact</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">...with ease</div>
            </div>


            <div className="relative flex-col justify-end hidden w-full row-span-1 row-start-6 p-4 overflow-hidden md:hidden mb md:h-full md:col-start-3 md:row-end-3 md:row-start-1 md:col-span-2 rounded-2xl">
              <img src={phone2} alt="" class="absolute  blur-sm inset-0 h-full w-full object-contain"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black  "></div>
              <h3 class="z-10 mt-3 md:text-3xl  font-bold text-[#2f85b8]/70">All in one place...</h3>
            </div>

            <div className="md:hidden relative hidden flex-col justify-end w-full p-4 overflow-hidden h-[108px] md:h-full row-span-1 md:col-span-2 md:col-start-5 md:row-start-1 md:row-end-3 rounded-2xl">
              <img src={onb} alt="" class="absolute blur-sm md:blur-0  inset-0 h-full w-full object-contain"/>
              <div class="absolute inset-0 md:hidden bg-gradient-to-t from-black "></div>
              <h3 class="z-10 mt-3 md:text-3xl md:hidden font-bold text-[#2f85b8]/70">Seamless transactions</h3>
            </div>

            <div className="relative flex flex-col justify-end w-full p-4 overflow-hidden md:h-full md:row-start-3 md:row-span-2 md:col-start-3 md:col-span-4 rounded-2xl isolate ">
              <img src={upwards} alt="" class="absolute inset-0 h-full blur-sm w-full object-center object-cover"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black "></div>
              <h3 class="z-10 mt-3 md:text-3xl font-bold text-white">Grow</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">...your busniess and earnings</div>
            </div>
        </div>
    </section>
  )
}
export default Payments2