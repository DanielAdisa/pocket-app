import bg from "../assets/bg.png"
import phone from "../assets/Onboarding3.png"
import card from "../assets/cardmain.png"
import card1 from "../assets/card2.png"
import card2 from "../assets/card3.png"
import logo from "../assets/react.svg"
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion"

const Nav = () => {
  return (
    <section className="w-full  mx-auto tracking-tight text-white md:w-[1200px] md:max-w-[1200px] font-semibold font-grey-med h-fit">
        <nav  className="fixed h-fit z-50 mx-auto shadow-sm bg-transparet md:w-[1200px]">
                <div className="flex items-center justify-between mx-auto md:max-w-[1200px]">
                    <div className="flex ml-4">
                        <p className="rounded-full "><GiPayMoney className="text-3xl " /></p>
                    </div>
                    <div className="flex pr-0 p-[2%] gap-x-12 ">
                        <p className="rounded-full font-Grey hover:cursor-pointer">Product</p>
                        <p className="rounded-full hover:cursor-pointer">Learn</p>
                        <p className="rounded-full hover:cursor-pointer">Company</p>
                    </div>
                    <div className="flex pr-0 p-[2%] gap-x-12 ">
                        <p className="rounded-full hover:cursor-pointer">Log In</p>
                        <p className="rounded-full hover:cursor-pointer font-meduim">Get Started -- It's free</p>
                      
                    </div>
                  
                </div>
            </nav>
    </section>
  )
}
export default Nav