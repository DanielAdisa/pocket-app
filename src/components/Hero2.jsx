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
import { TESTIMONIALS } from "../constants/index";
import { FaUserCircle } from "react-icons/fa";


const Hero2 = () => {
  return (
    <section className="p-[1.5%] pr-0 pl-0 pb-0 h-screen mx-auto  text-black md:w-7xl md:max-w-7xl pt-[6%] rounded-3xl">
     <div className="grid w-full h-full grid-cols-1 mt-[0.5%] grid-rows-4">
        <div className="col-span-1 mt-1 mt wavy rounded-t-[0px] row-span-3 rounded-[2em] flex w-full h-full justify-center pt-0 overflow-hidden p-[5%] pb-0">
            <div className="w-[50%] h-full flex-1 content-center ">
                <motion.h1 
                whileInView={{opacity: 1,x:0}}
                initial={{opacity:0 , x:-300}}
                transition={{duration:1.5, }}
                className="text-[2.5rem] w-[90%] pt-[2%] text-white/90 font-semibold ">One multi-currency app for all your money needs.</motion.h1>
                <motion.p 
                 whileInView={{opacity: 1}}
                 initial={{opacity:0}}
                 transition={{duration:1, }}
                className=" tracking-wide mt-[10%] bg-white/15 rounded-full w-fit p-[2%] pt-[0.5%] pb-[0.5%] text-[0.85rem] border-white/30 border-[2px] animate-pulse ease-in-out transition-all duration-700 delay-1000">Available On</motion.p>
                <div className="flex w-full gap-4 ">
                    <motion.p 
                    whileInView={{opacity: 1,y:0}}
                    initial={{opacity:0 , y:100}}
                    transition={{duration:1, }}
                    className=" flex items-center tracking-wide mt-[5%] bg-white/15 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%] gap-3  border-white/30 border-[2px]"><FaGooglePlay className="text-lg "/>Playstore</motion.p>
                    <motion.p 
                    whileInView={{opacity: 1,y:0}}
                    initial={{opacity:0 , y:100}}
                    transition={{duration:1, }}
                    className=" flex items-center tracking-wide mt-[5%] bg-white/15 rounded-xl w-fit pr-[4%] pl-[4%] p-[2%] gap-3 border-white/30 border-[2px]"><FaApple className="text-xl "/>App Store</motion.p>
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
        <div className="w-full col-span-1 row-span-1 mt-[3.5%] h-fit overflow-hidden">
        <div className="flex gap-6">
        <div className="flex gap-6 animate-loop-scroll ">
            {TESTIMONIALS.map((t, index) => (
               <div key={index} className="h-fit md:w-[428px] md:h-[80%] p-[10px] md:p-[20px] w-[270px] border-stone-400/10 wavy2 bg-black/5 border-[1px] overflow-clip flex rounded-2xl">
               <div className="flex items-center w-full">
               <div className="w-[20%]">
               {t.image}
               </div>
               <div className="flex content-center flex-col gap-y-2 text-[0.7rem]">
                   <h1 className="-mb-1 font-semibold ">{t.name}</h1>
                   <h1>{t.handle}</h1>
                   {t.testimonialz}
               </div>
               </div>
               <p className=" p-2 text-[0.8rem] leading-none font-medium text-white/70 tracking-wide text-left ">
               </p>
           </div>
            ))}
        </div>
        <div className="flex gap-6 animate-loop-scroll ">
            {TESTIMONIALS.map((t, index) => (
               <div key={index} className="h-fit md:w-[428px] md:h-[80%] p-[10px] md:p-[20px] w-[270px] border-stone-400/10 wavy2 bg-black/5 border-[1px] flex rounded-2xl">
               <div className="flex items-center w-full">
                <div className="w-[20%]">
               {t.image}
               </div>
               <div className="flex content-center flex-col gap-y-2 text-[0.7rem]">
                   <h1 className="-mb-1 font-semibold ">{t.name}</h1>
                   <h1>{t.handle}</h1>
                   {t.testimonialz}
               </div>
               </div>
               <p className=" p-2 text-[0.8rem] leading-none font-medium text-white/70 tracking-wide text-left ">
               </p>
           </div>
            ))}
        </div>
        </div>
            </div>
        </div>
    </section>
  )
}
export default Hero2

