import phone2 from "../assets/bg2.png"
const Services = () => {
  return (
    <section className=" pt-[90px] md:pt-[125px] md:pl-11 md:pr-11  md:max-w-[1034px] mx-auto md:mx-auto p-4">
        <div className="">
                <h2 className=" font-bold text-[3rem] md:text-[4.5rem] tracking-tighter text-[#285183] mb-[20px] leading-[1.25em]">
                    Services
                </h2>
                <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#4689cd]/80">
                    What makes us STAND out...
                </p>
        </div>

        <div className="grid md:w-fit md:gap-1.5 rounded-2xl text-stone-50 grid-cols-1 gap-1 mb-20 md:grid-cols-6 md:grid-rows-4 h-screen md:h-screen">
            <div className="flex items-center justify-center w-full h-full col-span-1 row-start-1 bg-black md:col-span-2 rounded-xl md:h-full">
                <h1 className="text-2xl md:text-5xl ">01</h1>
            </div>

            <div className="flex items-center justify-center h-full col-span-1 row-start-3 bg-black rounded-xl md:col-span-2 md:col-start-5 md:row-start-2 md:h-full">
                <h1 className="text-2xl md:text-5xl ">02</h1>
            </div>

            <div className="flex items-center justify-center h-full col-span-1 row-start-5 bg-black rounded-xl row md:col-span-2 md:h-full md:row-start-3">
                <h1 className="text-2xl md:text-5xl ">03</h1>
            </div>

            <div className="flex items-center justify-center h-full col-span-1 bg-black rounded-xl md:h-full md:col-start-5 md:col-span-2 md:row-start-4">
                <h1 className="text-2xl md:text-5xl ">04</h1>
            </div>

            <div className="relative flex flex-col justify-end w-full h-full col-span-1 row-start-2 p-6 overflow-hidden bg-blue-300 md:text-left md:h-full rounded-xl md:row-start-2 md:col-span-4">
                <img src={phone2} alt="" class="absolute  blur-sm inset-0 h-full w-full object-cover"/>
                <div class="absolute inset-0   "></div>
                <h3 class="z-10  md:text-3xl  font-bold">Get 25 free transfers to International banks every month. </h3>
            </div>

            <div className="relative flex flex-col justify-end w-full h-full col-span-1 row-start-4 p-6 overflow-hidden bg-blue-300 md:text-right md:h-full rounded-xl md:row-start-1 md:col-span-4">
                <img src={phone2} alt="" class="absolute  blur-sm inset-0 h-full w-full object-cover"/>
                <div class="absolute inset-0  "></div>
                <h3 class="z-10  md:text-3xl   font-bold">Enjoy cashless payment options online and offline.</h3>
            </div>

            <div className="relative flex flex-col justify-end h-full row-start-6 p-6 overflow-hidden bg-blue-300 md:text-left md:col-start-3 md:h-full rounded-xl md:col-span-4 md:row-start-3">
                <img src={phone2} alt="" class="absolute  blur-sm inset-0 h-full w-full object-cover"/>
                <div class="absolute inset-0   "></div>
                <h3 class="z-10  md:text-3xl   font-bold">Pay your essential bills and buy gift cards easily from one place.</h3>
            </div>

            <div className="relative flex flex-col justify-end h-full p-6 overflow-hidden bg-blue-300 md:text-right md:col-span-4 md:h-full rounded-xl md:row-start-4">
                <img src={phone2} alt="" class="absolute  blur-sm inset-0 h-full w-full object-cover"/>
                <div class="absolute inset-0   "></div>
                <h3 class="z-10  md:text-3xl   font-bold">Save money automatically any time you spend.</h3>
            </div>

        </div>
    </section>
  )
}
export default Services
