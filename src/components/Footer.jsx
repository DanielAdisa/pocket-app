import { GiPayMoney } from "react-icons/gi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className=" md:pl-11 md:pr-11 md:max-w-[1034px] mx-auto md:mx-auto md:mb-6 pb-10 p-4">
        <div className="flex flex-col items-center justify-center gap-12 p-5 pt-0 pb-0 md:flex-row md:justify-between">
            <div className="text-5xl "><GiPayMoney/></div>
            <div className="flex flex-col gap-4 ">
                <a href={'mailto:example@gmail.com'} className="">
                    hello@litepay.com
                </a>
                <a href={'mailto:example@gmail.com'} className="">
                    +233 123 456 78
                </a>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 text-2xl md:text-right">
                <TiSocialInstagram />
                <FaSquareXTwitter />
                <MdAttachEmail />
                </div>
                <div className="text-center md:text-right">
                    <p className="">
                        Somewhere In
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer