import { RiMobileDownloadFill } from "react-icons/ri";
import { RiMobileDownloadLine } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import phone from "../assets/phonedown.png"





const Download = () => {
  return (
    <div className=" md:pl-11 md:pr-11 md:w-screen md:max-w-[100vw]  mx-auto md:mx-auto pr-4 pl-4 md:mb-6 ">
        <div className="w-full overflow-clip wavy md:h-screen md:max-h-[50vh] max-h-[90vh] rounded-[2.5em]  h-screen mx-auto md:w-full p-6 pb-0 justify-center md:max-w-[80vw]  md:pb-0 mb-10 ">
            <div className="grid w-full h-full md:max-h-[100%]  col-span-1 row-span-2 gap-x-6 md:grid-rows-4 md:grid-cols-6 ">
                <div className="flex-col w-full md:max-h-[100%] h-full text-center md:space-y-7 content-start rounded-3xl md:col-span-3 md:row-span-4">
                    <RiMobileDownloadLine  className="mx-auto text-6xl md:text-8xl "/>
                    <p className="text-3xl md:text-[3em] font-bold   text-white">Download LitePay App</p>
                    <p className="text-xl md:text-[1.8em] md:max-w-[85%] font-medium mx-auto text-white">Over 2 million people trust LitePay for their daily money moves, download LitePay today to get started.</p>
                    <div className="md:flex w-[60%] md:space-y-0 space-y-3  mx-auto">
                        <p className="pt-4 text-center flex items-center  border-blue-500 border-spacing-96  border-2 gap-2 font-semibold tracking-tight mx-auto w-fit pb-4 pl-8  pr-8 text-[#034b93] rounded-full bg-stone-50"><span><FaGooglePlay className="" /></span>Google Play</p>
                        <p className="pt-4 text-center flex items-center  border-blue-500 border-spacing-96 border-2 gap-2 font-semibold tracking-tight mx-auto w-fit pb-4 pl-8  pr-8 text-[#034b93] rounded-full bg-stone-50"><span><FaApple className="" /></span>Apple Store</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl md:col-span-3 md:row-span-4">
                  <div className="flex-col content-end mx-auto pb-0 w-[95%] md:w-[60%] h-full ">
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


