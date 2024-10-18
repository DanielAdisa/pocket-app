import image from "../assets/handedphone.png"

import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Pays = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[50px] pb-[20px] h-fit md:max-w-[1200px]">
       <div className="flex items-start justify-between w-full pl-[71.8px] pt-[71.8px] h-full greengrid2 overflow-clip">
            <div className="w-1/3">
                {/* <img src={image} alt="" className=" w-fit h-[100%]" /> */}
                <p className="text-[1em] uppercase font-grey-med tracking-[2px] text-[#1b1f28]">Payments</p>
                <p className="text-[50px]  -tracking-[1px] font-grey-bold leading-[45px] mt-[40px] text-[#1b1f28]">Send Recieve and Save globally </p>
                <p className="text-[1rem] w-[95%] font-grey-med text-convertsmall1 text-[#1b1f28] mt-[40px]">Shop securely online at all your favorite stores, and make secure payments for flights, hotels, subscriptions, and more using your virtual Mastercard. </p>
                <p className="text-[19px] flex font-grey-med text-[#2467e3] items-center gap-3 text-start mt-[100px] w-[35%] leading-[26px]">Get Spot  <IoArrowForwardCircleOutline /> </p>
            </div>
            <div className="content-end w-2/3">
                <img src={image} alt="" className="" />
            </div>
       </div>
    </section>
  )
}
export default Pays