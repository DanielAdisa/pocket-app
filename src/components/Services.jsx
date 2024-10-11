const Services = () => {
  return (
    <section className=" pt-[90px] md:pl-11 md:pr-11 mb-0 md:max-w-[1034px] h-[fit] mx-auto md:mx-auto p-4">
        <div className="">
                <h2 className=" font-bold text-[3rem] md:text-[4.5rem] text-[#285183] mb-[20px] leading-[1.25em]">
                    Services
                </h2>
                <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#4689cd]/80">
                    What makes us STAND out...
                </p>
        </div>

        <div className="grid md:w-[900px] rounded-2xl grid-cols-1 gap-1 mb-20 md:grid-cols-6 md:grid-rows-4 h-fit md:h-[610px]">
            <div className="col-span-1 bg-black"></div>
            <div className="col-span-5 bg-blue-300"></div>
        </div>
    </section>
  )
}
export default Services