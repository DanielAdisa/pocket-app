import { RiMobileDownloadFill } from "react-icons/ri";
import { RiMobileDownloadLine } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";





const Download = () => {
  return (
    <div className=" md:pl-11 md:pr-11 md:w-screen md:max-w-[100vw]  mx-auto md:mx-auto pr-4 pl-4 md:mb-6 ">
        <div className="w-full wavy md:h-screen md:max-h-[90vh] max-h-[90vh] rounded-[2.5em]  h-screen mx-auto md:w-full p-4 justify-center md:max-w-[80vw] md:p-10 md:pb-0 mb-10 ">
            <div className="grid w-full h-full col-span-1 row-span-2 gap-x-6 md:grid-rows-4 md:grid-cols-6 ">
                <div className="flex-col w-full h-full text-center rounded-3xl md:col-span-3 md:row-span-4">
                    <RiMobileDownloadLine  className="mx-auto mt-[25%] mb-4 text-6xl md:mt-[30%] md:text-8xl "/>
                    <p className="text-3xl md:text-[2.75em] mt-10  text-white">Download LitePay App</p>
                    <p className="text-xl md:text-[1.7em] mt-6  text-white">Over 2 million people trust LitePay for their daily money moves, download LitePay today to get started.</p>
                    <div className="md:flex mt-[3.5%]">
                        <p className="pt-4 text-center flex items-center  border-blue-500 border-spacing-96 border-2 gap-2 font-semibold tracking-tight mx-auto w-fit pb-4 pl-8 mb-[5%] pr-8 text-[#034b93] rounded-full bg-stone-50"><span><FaGooglePlay className="" /></span>Google Play</p>
                        <p className="pt-4 text-center flex items-center  border-blue-500 border-spacing-96 border-2 gap-2 font-semibold tracking-tight mx-auto w-fit pb-4 pl-8 mb-[5%] pr-8 text-[#034b93] rounded-full bg-stone-50"><span><FaApple className="" /></span>App Store</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl md:col-span-3 md:row-span-4">
                  <div className="flex-col items-center justify-center w-full h-full ">
                    <FaBarcode className=" md:text-[500px] text-[300px] md:mt-[25%] mx-auto" />
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


