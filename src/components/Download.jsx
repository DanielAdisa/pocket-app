import { RiMobileDownloadFill } from "react-icons/ri";
import { RiMobileDownloadLine } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import phone from "../assets/phonedown.png"





const Download = () => {
  return (
    <div className=" md:pl-11 md:pr-11 md:w-auto md:max-w-[65vw] md:min-w-[65vw] mx-auto md:mx-auto pr-4 pl-4 md:mb-6 ">
        <div className="w-full overflow-clip wavy md:pt-10 md:h-auto md:max-h-[auto] md:min-h-[15vw] md:min-w-[45vw] max-h-[75vh] rounded-[2.5em]  h-screen mx-auto md:w-auto md:pl-4 md:pr-4  pb-0 justify-center md:max-w-[60vw]  md:pb-0 mb-10 ">
            <div className="grid w-full md:h-[100%] h-full md:max-h-[95%]  col-span-1 row-span-2 gap-x-6 md:grid-rows-2 md:grid-cols-4 ">
                <div className="flex-col content-center w-full h-full mt-auto mb-auto ml-auto mr-auto space-y-4 text-center md:w-auto md:h-auto md:space-y-7 rounded-3xl md:col-span-2 md:row-span-2">
                    {/* <RiMobileDownloadLine  className="mx-auto text-6xl md:text-6xl "/> */}
                    <p className="text-3xl font-bold text-white md:text-4xl">Download LitePay App</p>
                    <p className="text-xl md:text-xl tracking-wide text-stone-400 xs:font-semibold md:max-w-[85%]  mx-auto">Over 2 million people trust LitePay for their daily money moves, download LitePay today to get started.</p>
                    <div className="items-center justify-center gap-8 mx-auto md:w-[75%] md:flex">
                        <p className="md:pt-[4%] md:mt-0 mt-[4%] md:pb-[4%] text-center pl-[4%] pr-[4%] w-1/2 pt-[4%] pb-[4%] flex items-center justify-center  gap-4 font-semibold tracking-tight mx-auto  text-stone-950 md:mb-[4%] rounded-full bg-stone-50"><span><FaGooglePlay className="text-3xl" /></span>Google Play</p>
                        <p className="md:pt-[4%] md:mt-0 mt-[4%] md:pb-[4%] text-center pl-[4%] pr-[4%]  w-1/2 pt-[4%] pb-[4%] flex items-center justify-center   gap-4 font-semibold tracking-tight mx-auto text-stone-950 md:mb-[4%] rounded-full bg-stone-50"><span><FaApple className="text-3xl" /></span>Apple Store</p>
                        {/* <p className="pt-4 text-center flex items-center  border-blue-500 border-spacing-96 border-2 gap-2 font-semibold tracking-tight mx-auto w-fit pb-4 pl-8  pr-8 text-[#034b93] rounded-full bg-stone-50"><span><FaApple className="" /></span>Apple Store</p> */}
                    </div>
                </div>
                <div className="flex w-full h-full rounded-3xl md:col-span-2 md:row-span-2">
                  <div className="flex-col content-end mx-auto pb-0 w-[70%] md:w-[60%]  ">
                      <img src={phone} alt="" />
                  </div>
                </div>
            </div>
        </div>



        <div className="flex justify-between w-full p-8 pt-6 pb-6 font-semibold rounded-full shadow-lg md:text-xl md:pl-24 md:pr-24 bg-stone-200 h-fit">
            <p className="p-4 pt-1 pb-1 rounded-full hover:bg-stone-800 hover:text-stone-50">FAQs</p>
            <p className="p-4 pt-1 pb-1 rounded-full hover:bg-stone-800 hover:text-stone-50">Privacy</p>
            <p className="p-4 pt-1 pb-1 rounded-full hover:bg-stone-800 hover:text-stone-50">Terms</p>
            <p className="p-4 pt-1 pb-1 rounded-full hover:bg-stone-800 hover:text-stone-50">Help</p>
        </div>
    </div>
  )
}
export default Download


