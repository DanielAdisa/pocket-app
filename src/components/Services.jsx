import phone2 from "../assets/Onboarding3.png"
const Services = () => {
  return (
    <section className=" pt-[90px] l md:pt-[125px] md:pl-11 md:pr-11 mb-0 md:max-w-[1034px] h-[fit] mx-auto md:mx-auto p-4">
        <div className="">
                <h2 className=" font-bold text-[3rem] md:text-[4.5rem] text-[#285183] mb-[20px] leading-[1.25em]">
                    Services
                </h2>
                <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#4689cd]/80">
                    What makes us STAND out...
                </p>
        </div>

        <div className="grid md:w-[900px] md:gap-1.5 rounded-2xl text-stone-100 grid-cols-1 gap-1 mb-20 md:grid-cols-6 md:grid-rows-4 h-fit md:h-[610px]">
            <div className="col-span-1 w-full h-[108px] rounded-xl md:h-full row-start-1 flex items-center justify-center bg-black">
                <h1 className="text-2xl md:text-5xl ">01</h1>
            </div>

            <div className="col-span-1 flex items-center rounded-xl justify-center row-start-3 md:col-start-6 md:row-start-2 md:h-full h-[108px] bg-black">
                <h1 className="text-2xl md:text-5xl ">02</h1>
            </div>

            <div className="col-span-1 flex items-center rounded-xl row row-start-5 justify-center md:h-full  h-[108px] bg-black md:row-start-3">
                <h1 className="text-2xl md:text-5xl ">03</h1>
            </div>

            <div className="col-span-1 flex items-center rounded-xl justify-center md:h-full md:col-start-6  h-[108px] md:row-start-4 bg-black">
                <h1 className="text-2xl md:text-5xl ">04</h1>
            </div>

            <div className="relative flex flex-col justify-end md:text-left   p-6 overflow-hidden w-full h-[108px] md:h-full rounded-xl col-span-1 md:row-start-1 row-start-2 bg-blue-300 md:col-span-5">
                {/* <img src={phone2} alt="" class="absolute  blur-sm inset-0 h-full w-full object-contain"/> */}
                <div class="absolute inset-0 bg-gradient-to-t from-black/80  "></div>
                <h3 class="z-10 mt-3 md:text-3xl  font-bold">Get 25 free transfers to International banks every month. </h3>
            </div>

            <div className="relative flex flex-col justify-end md:text-right  p-6 overflow-hidden w-full h-[108px] md:h-full rounded-xl col-span-1 row-start-4 bg-blue-300 md:row-start-2 md:col-span-5">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80  "></div>
                <h3 class="z-10 mt-3 md:text-3xl   font-bold">Enjoy cashless payment options online and offline.</h3>
            </div>

            <div className="relative flex flex-col justify-end md:text-left  p-6 overflow-hidden bg-blue-300 md:h-full rounded-xl h-[108px] row-start-6 md:col-span-5 md:row-start-3">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80  "></div>
                <h3 class="z-10 mt-3 md:text-3xl   font-bold">Pay your essential bills and buy gift cards easily from one place.</h3>
            </div>

            <div className="relative flex flex-col justify-end md:text-right  p-6 overflow-hidden md:col-span-5 md:h-full rounded-xl  h-[108px] md:row-start-4 bg-blue-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80  "></div>
                <h3 class="z-10 mt-3 md:text-3xl   font-bold">Save money automatically any time you spend.</h3>
            </div>

        </div>
    </section>
  )
}
export default Services
