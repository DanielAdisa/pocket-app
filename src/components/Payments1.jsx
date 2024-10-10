import light from "../assets/light.png"
import greenstuff from "../assets/green.svg"
import phone from "../assets/Onboarding3.png"
import ashphone from "../assets/ashphone.png"


const Payments1 = () => {
  return (
   <section className="md:pt-[125px] pt-[90px] md:pl-11 md:pr-11 mb-40 md:max-w-[1034px] h-dvh mx-auto md:mx-auto p-4">
          <div className="">
              <h2 className=" font-bold text-[3rem] md:text-[4.5rem] text-[#285183] mb-[20px] leading-[1.25em]">
                  Payments
              </h2>
                <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#4689cd]/80">
                    All your transactions in one place
                </p>
            </div>
            <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-4 mb-20 md:grid-rows-3  h-[95%]">
                <div className="md:col-span-2 md:col-start-2 gridimage rounded-3xl">
                   {/* FirstImage  */}
                </div>

                <div className="md:row-start-1 md:row-span-2 md:col-span-1 bg-slate-600 rounded-3xl">w1</div>

                <div className="hidden md:block gridimagecenter rounded-3xl">
                    {/* Middle */}
                </div>

                <div className="hidden bg-red-400 md:block md:row-span-2 rounded-3xl">Word 2</div>

                <div className="bg-lime-300 md:col-span-2 gridimage2 rounded-3xl">
                    {/* Second Image */}
                </div>

            </div>
    </section>
  )
}
export default Payments1