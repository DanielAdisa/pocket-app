const Hero3 = () => {
  return (
    <section className="h-screen hero">
         <div className="w-full mx-auto tracking-tight text-white md:w-[1200px] h-screen md:max-w-[1200px] font-semibold font-grey-med">
          <div className="flex items-center w-full h-full">
            <div className="grid gap-y-10 grid-cols-1 grid-rows-3 w-[610px] h-[510px]">
               <div className="w-full col-span-1 row-start-1 h-fit">
                <p className=" font-grey-bold tracking-tight leading-none text-[4.6rem]">Open a US, UK, or EUR bank account in Ghana</p>
               </div>
               <div className="w-[90%] mt-[12%] col-span-1 row-start-2 ">
                 <p className="leading-relaxed font-[1.1rem] font-grey-lit">Free foreign accounts for remote workers, freelancers, creators, and digital nomads in Ghana. Get paid from anywhere, and withdraw in Ghanaian Cedis (GHS) or USDC instantly.</p>
               </div>
               <div className="w-[30%] col-span-1 row-start-3 ">
                 <p className=" text-sm rounded-md bg-blue-600 pt-[8%] pb-[8%] pr-[2%] pl-[2%] text-center">Get Started - Its Free</p>
               </div>
            </div>
          </div>
         </div>
    </section>
  )
}
export default Hero3