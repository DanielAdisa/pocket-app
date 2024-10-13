import bg from "../assets/bg.png"
import phone from "../assets/phonewave.png"
import card from "../assets/cardmain.png"
import card1 from "../assets/BBC-logo.svg"
import cnn from "../assets/cnn.svg"
import bloom from "../assets/Bloomberg.svg"
import card2 from "../assets/card3.png"
import logo from "../assets/react.svg"
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion"


const Hero2 = () => {
  return (
    <section className="p-[1.5%] pr-0 pl-0 pb-0 h-screen mx-auto  text-black md:w-7xl md:max-w-7xl pt-[6%] rounded-3xl">
     <div className="grid w-full h-full grid-cols-1 mt-[0.5%] grid-rows-4">
        <div className="col-span-1 mt-1 mt wavy row-span-3 rounded-[2em] flex w-full h-full justify-center pt-0 overflow-hidden p-[5%] pb-0">
            <div className="w-[50%] h-full flex-1 content-center ">
                <h1 className="text-[2.5rem] w-[90%] pt-[2%] text-white/90 font-semibold ">One multi-currency app for all your money needs.</h1>
                <p className=" tracking-wide mt-[10%] bg-white/15 rounded-full w-fit p-[2%] pt-[0.5%] pb-[0.5%] text-[0.85rem] border-white/30 border-[2px]">Available On</p>
                <div className="flex w-full gap-4 ">
                    <p className=" tracking-wide mt-[5%] bg-white/15 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%]  border-white/30 border-[2px]">Playstore</p>
                    <p className=" tracking-wide mt-[5%] bg-white/15 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%]  border-white/30 border-[2px]">App Store</p>
                </div>
            </div>
            <div className="w-[50%] h-full flex items-end justify-end overflow-hidden">
                <motion.img
                whileInView={{opacity: 1, y:0}}
                initial={{opacity:1 , y:500}}
                transition={{duration:1.5, }}
                src={phone} className=" overflow-hidden h-[85%]" alt="" />
            </div>
        </div>
        <div className="flex-col content-center w-full h-full col-span-1 row-span-1 gap-10 overflow-hidden">
            <p className="w-full text-center mb-[3%]">As Featured in</p>
            <div className="flex items-center justify-between w-full pl-[1%]  pt-0 pb-0 pr-[1%] mx-auto">
            <div className="border-2 border-[#098bb8]/50 w-[10%]"/>
            <img src={card1} className=" w-[10%] " alt="" />
            <img src={cnn} className=" w-[12%] " alt="" />
            <img src={bloom} className=" w-[15%] " alt="" />
            <div className="border-2 border-[#098bb8]/50 w-[10%]"/>
           
            {/* <p className=" tracking-wide bg-[#034b93]/25 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%] text-[0.85rem] ">GoTV</p>
            <p className=" tracking-wide bg-[#034b93]/25  rounded-xl w-fit pr-[4%] pl-[4%] p-[2%] text-[0.85rem] ">The Gazette</p>
            <p className=" tracking-wide bg-[#034b93]/25 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%] text-[0.85rem] ">The Ghanaian Chronicle</p>
            <p className=" tracking-wide bg-[#034b93]/25 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%] text-[0.85rem] ">The Ghanaian</p>
            <p className=" tracking-wide bg-[#034b93]/25 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%] text-[0.85rem] ">TvGO</p> */}
            </div>
        </div>
     </div>
    </section>
  )
}
export default Hero2