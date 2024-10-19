import image from "../assets/rocket.png"
import image2 from "../assets/illus1.webp"
import image3 from "../assets/illus2.webp"
import image4 from "../assets/illus3.webp"


const Started = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[50px] pb-[20px]  h-fit md:max-w-[1200px]">
        <div className="flex items-center justify-between w-full p-4">
            <img src={image} alt=" " className="self-start w-1/5 rotate-1" />
            <p className="self-start text-right headcard font-grey-bold ">Get started on LitePay in three steps</p>
        </div>
        <div className="flex w-full h-auto gap-[1.5em] ">
            <div className="flex-col w-1/3">
                <div className="flex transition-all duration-100 ease-in-out delay-150 illustration pr-[1.5em]  -rotate-1 hover:rotate-0">
                <img src={image2} alt=" " className="self-end transition-all ease-in-out hover:scale-105 " />
                </div>
                <div className="mt-[1em] illustrationtwo1 p-[1.5em] h-[132px] ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Download App</p>
                    <p className="text-center text-[16px] text-[#49546c] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

            <div className="flex-col w-1/3">
                <div className="flex transition-all duration-100 ease-in-out delay-150 p-[1.5em] pb-0 illustrationtwo rotate-1 hover:rotate-0">
                <img src={image3} alt=" " className="self-end transition-all ease-in-out hover:scale-105" />
                </div>
                <div className="mt-[1em] illustrationtwo2 p-[1.5em] h-[132px] ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Complete your KYC</p>
                    <p className="text-center text-[16px] text-[#49546c] leading-[20px] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

            <div className="flex-col w-1/3">
                <div className="flex transition-all duration-100 ease-in-out delay-150 p-[1.5em] pb-0 illustrationthree -rotate-1 hover:rotate-0">
                <img src={image4} alt=" " className="self-end transition-all ease-in-out hover:scale-105 " />
                </div>
                <div className="mt-[1em] illustrationtwo1 p-[1.5em] h-[132px] ">
                    <p className=" font-grey-bold text-center text-[#1b1f28] text-[24px]">Talk to an agent</p>
                    <p className="text-center text-[16px] text-[#49546c] mx-auto w-[70%]">Sign up on our web or mobile app with your details.</p>
                </div>
            </div>

        </div>
    </section>
  )
}
export default Started


        // <div class="illustration">
        //     <div class="card-heading">
        //         <img src="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/66751bd334184bb99b81be3e_card%20number%201.svg" loading="lazy" alt="">
        //         <img src="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/6686a859441a233a1cfe9778_gh.svg" loading="lazy" alt="" class="gh-sticker">
        //     </div>
        //     <div>
        //         <img src="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/667520119a888d4d8a503933_step%201.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 100vw" srcset="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/667520119a888d4d8a503933_step%201-p-500.webp 500w, https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/667520119a888d4d8a503933_step%201.webp 638w" alt="" class="image-57 va-card-1 tablet ghana">
        //         <img src="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/667520119a888d4d8a503933_step%201.webp" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 991px) 100vw, 30vw" srcset="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/667520119a888d4d8a503933_step%201-p-500.webp 500w, https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/667520119a888d4d8a503933_step%201.webp 638w" alt="Grey foreign bank account in Ghana" class="image-57 va-card-1 ghana">
        //     </div>
        //     <div class="bottom-gradient"></div>
        //     </div>
        //     <div class="fcard-heading ghana-landing">
        //         <h5 class="feature-card-heading ghana-landing"><strong>Register on Grey</strong></h5>
        //     <div class="featue-card-body ghana-landing">Sign up on our web or mobile app with your details.</div>