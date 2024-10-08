const Navbar = () => {
  return (
    <nav className=" py-4 md:max-w-[940px] mx-auto shadow-2xl shadow-white ">
        <div className="flex items-center justify-between">
        <div className="flex ml-4">
            <p className="pt-2 pb-2 pl-4 pr-4 text-[#034b93]  hover:bg-blue-600 hover:text-stone-300 rounded-full bg-stone-300">Lite-Pay</p>
        </div>
        <div className="flex ml-4 mr-4 space-x-6">
            <p className="pt-2 pb-2 pl-4 pr-4 text-[#034b93] rounded-full bg-stone-300">Login</p>
            <p className="pt-2 pb-2 pl-5 pr-5 bg-blue-600 rounded-full text-stone-50">Register</p>
        </div>
        
        </div>
    </nav>
  )
}
export default Navbar