import { GiPayMoney } from "react-icons/gi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import phone from "../assets/phonewave.png"


const Footer = () => {
  return (
    <section className="w-full mx-auto p-[71.8px] mt-[50px] h-fit bg-black/90  rounded-t-[1.5em]">
        <div className="mx-auto md:w-[1200px] h-fit max-h-fit md:max-w-[1200px]">
            <div className="flex-col content-center w-full h-full">
                <p className="text-center font-grey-bold heading4 w-[500px] mx-auto ">Get digital banking at your fingertips</p>
                <div className="grid grid-cols-2 mx-auto mt-[40px] mb-[1em] gap-[10px] h-[50px] w-[350px]">
                    <div className="col-span-1 p-4 storelink1 "></div>
                    <div className="col-span-1 p-4 storelink2"></div>
                </div>
            </div>
            <div className="mt-[1em]  overflow-hidden ">
                <div className="flex w-full  items-center justify-center gap-5 mt-[2em]">
                    <div className="w-1/2 h-[30em] wavy rounded-[20px]">
                        <img src={phone} alt=""  className=" w-[80%] mx-auto rounded-[20px]"/>
                    </div>
                    <div className="w-1/2">
                        <div className="w-1/4 ">hi</div>
                        <div className="w-1/4 ">there</div>
                        <div className="w-1/4 ">bro</div>
                        <div className="w-1/4 ">me</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Footer