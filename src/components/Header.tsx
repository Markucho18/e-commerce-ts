import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="flex w-full responsive-padding">
      <div className="flex flex-1 items-center justify-between py-4">
        <p className="text-4xl select-none hidden sm:flex">
          <span className="text-orange-600">RAF</span>CART
        </p>
        <form className="flex flex-1 sm:mx-4 md:mx-10 lg:mx-16 xl:mx-24 2xl:mx-36 bg-white rounded-lg border-2 border-orange-500 hover:border-orange-600 ">
          <label htmlFor="" className="flex flex-1 items-center gap-2 p-2">
            <FaSearch className="text-black/50"/>
            <input type="text" placeholder="Search" className="focus:outline-none w-full" />
          </label>
          <button type="submit" className="bg-orange-500 px-4 text-white font-semibold hover:bg-orange-600">
            Search
          </button>
        </form>
        <div className="flex gap-4">
          <button title="Favorites" className="text-black/70 hover:text-black">
            <FaRegHeart className="size-6"/>
          </button>
          <button title="Cart" className="text-black/70 hover:text-black">
            <FaShoppingCart className="size-6"/>
          </button>
          <button title="Profile" className="text-black/70 hover:text-black">
            <IoPersonSharp className="size-6"/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header