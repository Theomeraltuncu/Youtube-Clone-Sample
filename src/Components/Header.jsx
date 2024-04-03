import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    if (text.trim() === "") {
      return;
    }

    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center p-4 ">
      <Link className="flex items-center gap-2" to="/">
        <img className="w-[50px]" src="/public/youtube.png" alt="logo" />
        <h1 className="text-2xl hidden md:block font-mono">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="group flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          placeholder="Search"
          className="group-hover:border-blue-500 group-hover:border border border-transparent bg-black text-white px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-500 input"
          type="text"
        />
        <button className="border-l px-4 text-2xl bg-zinc-800">
          <IoSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-300" />
        <IoVideocam className="hover:text-gray-400 transition duration-300" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-300" />
      </div>
    </header>
  );
};

export default Header;
