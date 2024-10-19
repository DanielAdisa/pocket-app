import image from "../assets/rocket.png"

const Started = () => {
  return (
    <section className="w-full mx-auto md:w-[1200px] mt-[50px] pb-[20px]  h-fit md:max-w-[1200px]">
        <div className="flex items-center justify-between w-full p-4">
            <img src={image} alt=" " className="self-start w-1/5 " />
            <p className="self-start text-right headcard font-grey-bold ">Get started on LitePay in three steps</p>
        </div>
        <div className="">
            hello
        </div>
    </section>
  )
}
export default Started