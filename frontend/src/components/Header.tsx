import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { usePagesContext } from "../contexts/PagesContext";
import SearchBar from "./SearchBar";
import { useProductsContext } from "../contexts/ProductsContext";
import { calculateQuantity } from "../utils/calculateQuantity";

const Header: React.FC = () => {

  const { products } = useProductsContext()

  const { setPage } = usePagesContext()

  return (
    <header className="flex w-full responsive-padding">
      <div className="flex flex-1 items-center justify-between py-4">
        <p className="text-4xl select-none hidden sm:flex">
          <span className="text-orange-600">RAF</span>CART
        </p>
        <SearchBar/>
        <div className="flex gap-4">
          <button
            title="Cart"
            className="group relative first-letter:flex flex-col items-center text-black/70 hover:text-black"
            onClick={() => setPage('cartPage')}
          >
            <FaShoppingCart className="size-6"/>
            <p className="text-zinc-600 text-sm">Cart</p>
            {calculateQuantity(products) > 0 && (
              <div className="group-hover:bg-red-600 absolute bottom-8 left-4 bg-red-500 rounded-full text-white px-1">
                {calculateQuantity(products)}
              </div>
            )}
          </button>
          <button title="Profile" className="flex flex-col items-center text-black/70 hover:text-black">
            <IoPersonSharp className="size-6"/>
            <p className="text-zinc-600 text-sm">Account</p>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header