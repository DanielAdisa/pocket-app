import { TESTIMONIALS } from "../constants/index";
import { FaUserCircle } from "react-icons/fa";

const Testimonials1 = () => {
  return (
    <div className="p-4 mx-auto mb-48 overflow-x-clip md:pl-11 md:pr-11 md:mx-auto">
    <div className="flex items-center justify-center mx-auto ">
        <h1 className="font-bold  items-center text-[2.5rem] md:text-[4rem] md:max-w-[1034px] text-[#212337] mb-[12px]  leading-[1.25em] mr-3">Testimonials</h1>
        <p className="flex items-center justify-center gap-2 pt-1 pb-1 pl-2 pr-2 font-serif text-sm font-thin leading-snug tracking-tight rounded-full md:text-sm bg-stone-200"><span> <FaUserCircle className="text-blue-400 "  /></span>Follow LitePay</p>
    </div>
    <p className="text-[1rem] md:text-[2rem] font-bold mx-auto text-start leading-[1.35em] md:max-w-[1034px] mt-0 mb-[50px] text-[#bfc2d9]">
    Here’s what some users who have hopped on the LitePay train have to say.
    </p>
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