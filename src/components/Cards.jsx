import card from "../assets/cardsprwal.png"


const Cards = () => {
  return (
    <div className=" md:pl-11 md:pr-11 md:max-w-[1034px] mx-auto md:mx-auto mb-48 p-4">
        <div className="flex items-center ">
        <h2 className=" font-bold text-[3rem] md:text-[4.5rem] text-[#212337] mb-[12px] leading-[1.25em] mr-3">
           Cards
        </h2>
        <p className="pt-1 pb-1 pl-2 pr-2 text-[0.675rem] font-semibold tracking-wider rounded-full md:text-sm bg-stone-100">Coming Soon</p>
        
        </div>
        <p className="text-[1rem] md:text-[2rem] font-bold leading-[1.35em] mt-0 mb-[1rem] text-[#bfc2d9]">
            All your transactions in one place
        </p>
        <div className="grid items-center content-center justify-center grid-cols-1 gap-4 mx-auto md:gap-8 md:grid-cols-5">

            <div className="md:col-span-3 col-span-1 max-h-fit md:max-h-[600px] bg-[#f0eff2] rounded-[36px] pb-0 p-10 pm ">
                <div className="grid grid-rows-2 gap-4">
                    <div className="row-span-1 pb-0 mb-0">
                      <p className="text-2xl font-bold leading-relaxed">Connect your physical card to your personal Pocket, Groups, and Shops. You're in complete control.</p>
                    </div>
                    <div className="relative flex w-full row-span-1 pb-0 mb-0">
                      <img src={card} alt=" " className="pb-0 mx-auto mb-0-mt-32 md:-mt-52" />
                    </div>
                </div>
            </div>



            {/* Orange */}
            <div className="md:col-span-2  col-span-1 min-h-[600px] bg-[#f9a70b] rounded-[36px] flex">
              <div className="pt-10 mx-auto">
                <svg width="5.188em" height="5.188em" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="83" height="83" rx="32" fill="#fff"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M62 42c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20ZM48.004 52l2-4-5.896-3.962-3.886-.248L38.004 46l4 6h6ZM36.012 36.01 34.002 40l-6.457-4.87C30.115 29.731 35.62 26 41.999 26c1.342 0 2.645.165 3.89.476L44.002 34l-7.99 2.01Z" fill="#FFA400"></path></svg>
              </div>
              <p className="absolute justify-center text-center">Spend globally with virtual cards</p>
            </div>
        </div>
    </div>
  )
}
export default Cards