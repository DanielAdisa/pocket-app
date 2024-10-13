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
    <section className="mx-auto md:w-7xl md:max-w-full">
        <nav className="fixed py-[1%] z-50 bg-white shadow-sm md:w-full">
                <div className="flex items-center justify-between mx-auto md:max-w-7xl">
                    <div className="flex ml-4">
                        <p className="text-blue-600 rounded-full hover:bg- hover:text-blue-600/35"><GiPayMoney className="text-3xl " /></p>
                    </div>
                    <div className="flex pr-0 p-[2%] gap-x-12 ">
                        <p className=" text-[#034b93]/80 font-medium hover:text-[#034b93] hover:cursor-pointer rounded-full   ">Busniess</p>
                        <p className=" rounded-full font-semibold hover:text-[#034b93] hover:cursor-pointer text-[#034b93]/80 ">About</p>
                        <p className=" text-[#034b93]/80 font-semibold hover:text-[#034b93] hover:cursor-pointer rounded-full  ">Blog</p>
                        <p className=" rounded-full font-semibold hover:text-[#034b93] hover:cursor-pointer text-[#034b93]/80 ">FAQS</p>
                        <p className=" text-[#034b93]/80 font-semibold hover:text-[#034b93] hover:cursor-pointer rounded-full ">Careers</p>
                    </div>
                </div>
            </nav>
    </section>
  )
}
export default Nav