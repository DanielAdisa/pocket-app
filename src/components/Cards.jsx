const Cards = () => {
  return (
    <div className=" md:pl-11 md:pr-11 md:max-w-[1034px] mx-auto md:mx-auto mb-48 p-4">
        <div className="flex items-center ">
        <h2 className=" font-bold text-[3rem] md:text-[4.5rem] text-[#212337] mb-[12px] leading-[1.25em] mr-3">
           Cards
        </h2>
        <p className="pt-1 pb-1 pl-2 pr-2 text-sm font-semibold tracking-wider rounded-full bg-stone-100">Coming Soon</p>
        
        </div>
        <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#bfc2d9]">
            All your transactions in one place
        </p>
        <div className="grid items-center content-center justify-center grid-cols-1 gap-4 mx-auto md:gap-8 md:grid-cols-5">
            <div className="md:col-span-3 col-span-1 min-h-[600px] bg-black "> hello</div>
            <div className="md:col-span-2  col-span-1 min-h-[600px] bg-black"> hello</div>
        </div>
    </div>
  )
}
export default Cards