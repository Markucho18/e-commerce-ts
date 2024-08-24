import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Display, Product } from "../types";
import { usePagesContext } from "../contexts/PagesContext";

interface ProductProps extends Product{
  display: Display
}

const ProductGrid: React.FC<ProductProps> = ({id, name, price, thumbnail, category, brand, size, stock, display}) => {

  const { openProductPage } = usePagesContext()

  return (
      <>
        {display === 'grid' ? (
          <div
            className="flex flex-col flex-1  rounded-sm bg-zinc-100 hover:bg-white cursor-pointer "
            style={{boxShadow: "0px 0px 5px lightgray"}}
          >
            <div className="group flex relative w-full object-center h-[14rem]">
              <img src={thumbnail} alt={name} className="size-full object-cover"/>
              <div className="hidden group-hover:flex justify-center items-center absolute bg-black/20 inset-0 gap-2 ">
                <button
                  className="bg-orange-500 hover:bg-zinc-700 transition-colors duration-200 rounded-full p-2"
                  onClick={() => openProductPage(id)}
                >
                  <FaSearch className="text-white"/>
                </button>
                <button className="bg-orange-500 hover:bg-zinc-700 transition-colors duration-200 rounded-full p-2">
                  <FaRegHeart className="text-white"/>
                </button>
              </div>
            </div>
            <div className="flex flex-col px-2 py-2 lg:py-3 justify-center gap-1">
              <p className="text-2xl truncate ">{name}</p>
              <p className="text-red-500  text-xl font-bold">${price}</p>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-700 transition-colors duration-300 text-white font-bold py-2">
              Add to Cart
            </button>
          </div>
        ) : (
          <div className="flex w-full h-28 gap-2 basicShadow bg-zinc-100 hover:bg-white cursor-pointer rounded-md">
            <img src={thumbnail} className="w-28 p-2 rounded-md" onClick={() => openProductPage(id)}/>
            <div className="flex flex-col flex-1 gap-2 py-2" onClick={() => openProductPage(id)}>
              <p className="text-2xl">{name}</p>
              <p className="text-red-500  text-xl font-bold">${price}</p>
            </div>
            <div className="flex flex-col h-full w-12 bg-orange-500">
              <button className="flex-1 hover:bg-orange-600 p-3 text-white">
                <FaRegHeart className="size-full"/>
              </button>
              <button className="flex-1 hover:bg-orange-600 p-3 text-white">
                <FaCartPlus className="size-full"/>
              </button>
            </div>
          </div>
        ) }
      </>
  )
}

export default ProductGrid