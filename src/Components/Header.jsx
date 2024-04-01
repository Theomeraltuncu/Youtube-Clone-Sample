import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";


const Header = () => {
  return (

    <header className="flex justify-between items-center p-4 ">
        <Link className="flex items-center gap-2" to="/">
            <img className="w-[50px]" src="/public/youtube.png" alt="logo" />
            <h1 className="text-2xl hidden md:block font-mono">Youtube</h1>
        </Link>

        <form className="flex items-center border border-gray-400 rounded-[20px] overflow-hidden ">
            <input className="bg-black text-white px-3 py-1 outline-none" type="text" />
            <button className="border-l px-2 text-xl">
                <IoSearch/>
            </button>
        </form>

        <div className="flex gap-3 text-xl cursor-pointer">
            <FaBell className="hover:text-gray-400 transition duration-300"/>
            <IoVideocam className="hover:text-gray-400 transition duration-300"/>
            <MdVideoLibrary className="hover:text-gray-400 transition duration-300"/>
            
        </div>
    </header>
  )
}

export default Header