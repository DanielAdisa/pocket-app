import image from "../assets/afterhero.png"
import { MdPaid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";import { GiWallet } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoArrowForwardCircleOutline } from "react-icons/io5";





const AfterGrid = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[100px] h-fit md:max-w-[1200px]">
       <div className="flex-col w-full h-fit">
            <div className="flex w-full p-4 mb-0 grid-blue border-b-0 border-r-0 border-[1.2px] rounded-xl h-fit">
                <div className=" w-[30%] font-grey-bold leading-[64px] text-[50px]">
                    <p className="text-[#5e19b3]">Fast, Safe, Social Payments</p>
                </div>
                <div className=" w-[45%] flex-col h-full content-end mt-4 mb-0 ">
                    <p className="text-[20px] font-grey-reg leading-tight  ">Get paid faster, send money securely, unlock free airtime and more, all in one place.</p>
                    <p className="text-[19px] flex font-grey-med pt-[3%] pb-[3%] text-[#2467e3] items-center gap-3 text-start mt-4 w-[35%] rounded-md border-[1px] leading-[26px]">Get Spot  <IoArrowForwardCircleOutline /> </p>
                </div>
            </div>
            <div className=" purple-grid border-b-0 border-l-0 border-[1.2px] rounded-xl p-4 mt-[10px]">
               <img src={image} alt="" className="" />
            </div>
            <div className="flex w-full text-black/90 greengrid rounded-xl mt-[10px] space-x-4 p-4">
                <div className="flex-col w-[25%] space-y-3">
                    <MdPaid className="h-[50px] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold">Get Paid</p>
                    <p className="text-[1rem] w-[80%] font-grey-med ">Instant, free payments so you get your money fast.</p>
                </div>
                <div className="flex-col w-[25%] space-y-3">
                    <FaShoppingCart className="h-[50px] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold">Spend Together</p>
                    <p className="text-[1rem] w-[80%] font-grey-med ">Save for shared expenses with free group accounts.</p>
                </div>
                <div className="flex-col w-[25%] space-y-3">
                    <GiWallet className="h-[50px] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold">Skip the Fees</p>
                    <p className="text-[1rem] w-[80%] font-grey-med ">No monthly account or card transaction fees.</p>
                </div>
                <div className="flex-col w-[25%] space-y-3">
                    <AiOutlineSafetyCertificate className="h-[50px] w-[50px] "/>
                    <p className="text-[1.5rem] font-grey-bold">Instant Rewards</p>
                    <p className="text-[1rem] w-[80%] font-grey-med ">Stay connected with Airtime Rewards on every purchase.</p>
                </div>
            </div>
       </div>
    </section>
  )
}
export default AfterGrid

