import light from "../assets/light.png"
import greenstuff from "../assets/green.svg"
import phone from "../assets/Onboarding1.png"
import ashphone from "../assets/ashphone.png"

import balls from "../assets/balls.mp4";
import cake from "../assets/cake.mp4";
import vidhold from "../assets/0100.jpg";

const Payments1 = () => {
  return (
   <section className="md:pt-[125px] pt-[90px] md:pl-11 md:pr-11 mb-0 md:max-w-[1034px] h-[fit] mx-auto md:mx-auto p-4">
          <div className="">
              <h2 className=" font-bold text-[3rem] md:text-[4.5rem] text-[#285183] mb-[20px] leading-[1.25em]">
                  Payments
              </h2>
                <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#4689cd]/80">
                    All your transactions in one place
                </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 mb-20 md:grid-cols-3 md:grid-rows-3 h-fit">
                <div className="overflow-hidden h-fit md:col-span-2 md:col-start-2 rounded-3xl">
                   {/* FirstImage  */}
                   <video src={balls} className="object-fit blur-sm " muted autoPlay loop playsInline ></video>
                </div>

                <div className="text-center md:row-start-1 h-fit md:row-span-2 md:col-span-1 rounded-3xl">
                        hello There
                </div>

                <div className=" md:block gridimagecenter rounded-3xl">
                    {/* Middle */}
                </div>

                <div className="hidden bg-red-50 md:block md:row-span-2 rounded-3xl">Word 2</div>

                <div className="overflow-hidden h-fit md:col-span-2 rounded-3xl">
                    {/* Second Image */}
                    <video src={cake} className=" object-fit blur-sm" muted autoPlay loop playsInline  ></video>
                </div>

            </div>
    </section>
  )
}
export default Payments1