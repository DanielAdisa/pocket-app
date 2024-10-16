import image from "../assets/afterhero.png"
import { MdPaid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";import { GiWallet } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";




const AfterGrid = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[100px] h-fit md:max-w-[1200px]">
       <div className="flex-col w-full h-fit">
            <div className="flex w-full p-4 mb-0 bg-blue-500/15 h-fit">
                <div className=" w-[30%] font-grey-bold leading-[64px] text-[50px]">
                    <p className="">Fast, Safe, Social Payments</p>
                </div>
                <div className=" w-[45%] flex-col mb-0 ">
                    <p className="text-[18px] font-grey-med font-medium leading-[26px] ">Get paid faster, send money securely, unlock free airtime and more, all in one place.</p>
                    <p className="text-[18px] font-grey-bold pt-[3%] pb-[3%] pr-[2%] text-white text-center mt-4 pl-[2%] w-[35%] rounded-md  bg-black/80 leading-[26px]">Get Spot</p>
                </div>
            </div>
            <div className=" bg-blue-500/15 p-4 mt-[10px]">
               <img src={image} alt="" className=" grayscale hover:grayscale-0" />
            </div>
            <div className="flex w-full bg-blue-500/15 mt-[10px] space-x-4 p-4">
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