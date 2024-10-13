import { TESTIMONIALS } from "../constants/index";
import { FaUserCircle } from "react-icons/fa";


const Testimonials1 = () => {
  return (
    <div className="mx-auto md:mb-10 overflow-x-clip md:pl-11 md:pr-11 md:mx-auto">
        <div className="flex gap-6">
        <div className="flex gap-6 animate-loop-scroll ">
            {TESTIMONIALS.map((t, index) => (
               <div key={index} className="h-fit md:w-[428px] md:h-fit p-[10px] md:p-[20px] w-[270px] border-stone-400 bg-stone-50 shadow-lg border-[1px] flex flex-col rounded-2xl">
               <div className="flex flex-row items-center w-full gap-3 mb-4">
               {t.image}
               <div className="flex flex-col text-[0.7rem]">
                   <h1 className="-mb-1 font-semibold ">{t.name}</h1>
                   <h1>{t.handle}</h1>
               </div>
               </div>
               <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
                   {t.testimonialz}
               </p>
           </div>
            ))}
        </div>
        <div className="flex gap-6 animate-loop-scroll ">
            {TESTIMONIALS.map((t, index) => (
               <div key={index} className="h-fit md:w-[428px] md:h-fit p-[10px] md:p-[20px] w-[270px] border-stone-400 bg-stone-50 shadow-lg border-[1px] flex flex-col rounded-2xl">
               <div className="flex flex-row items-center w-full gap-3 mb-4">
               {t.image}
               <div className="flex flex-col text-[0.7rem]">
                   <h1 className="-mb-1 font-semibold ">{t.name}</h1>
                   <h1>{t.handle}</h1>
               </div>
               </div>
               <p className="mb-6 p-2 text-[0.8rem] leading-none tracking-wide text-left ">
                   {t.testimonialz}
               </p>
           </div>
            ))}
        </div>
        </div>
        <div className="mt-8 ml-10 mr-10 border-b-2"/>    
</div>
  )
}
export default Testimonials1