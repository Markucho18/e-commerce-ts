import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Display, Product } from "../types";
import { usePagesContext } from "../contexts/PagesContext";
import { useProductsContext } from "../contexts/ProductsContext";

interface ProductProps extends Product{
  display: Display
}

const ProductGrid: React.FC<ProductProps> = ({id, name, price, thumbnail, category, brand, size, stock, quantity, display}) => {

  const { openProductPage } = usePagesContext()

  const { addToCart, removeFromCart } = useProductsContext()

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
              <p className="text-2xl truncate ">
                {name}
                {quantity > 0 && <span className="text-zinc-400"> (x{quantity})</span>}
              </p>
              <div className="flex w-full gap-4 items-center">
                <p className="text-red-500  text-xl font-bold">${price}</p>
                <p className="text-lg text-zinc-400 font-bold">{size}</p>
              </div>
            </div>
            <button
              className="flex place-content-center w-full bg-orange-500 hover:bg-orange-700 transition-colors duration-300 text-white font-bold py-2"
              onClick={() => addToCart(id)}  
            >
              <p className="flex items-center gap-2 text-lg">Add to Cart <FaCartPlus className="size-6"/></p>
            </button>
          </div>
        ) : (
          <div className="flex w-full h-28 gap-2 basicShadow bg-zinc-100 hover:bg-white cursor-pointer rounded-md">
            <img src={thumbnail} className="w-28 p-2 rounded-md" onClick={() => openProductPage(id)}/>
            <div className="flex flex-col flex-1 gap-2 py-2" onClick={() => openProductPage(id)}>
              <p className="text-2xl">
                {name}
                {quantity > 0 && <span className="text-zinc-400"> (x{quantity})</span>}
              </p>
              <div className="flex gap-4 items-center">
                <p className="text-red-500  text-xl font-bold">${price}</p>
                <p className="text-lg text-zinc-400 font-bold">{size}</p>
              </div>
            </div>
            <div className="flex flex-col h-full w-12 bg-orange-500">
              <button className="flex-1 hover:bg-orange-600 p-3 text-white">
                <FaRegHeart className="size-full"/>
              </button>
              <button
                className="flex-1 hover:bg-orange-600 p-3 text-white"
                onClick={() => addToCart(id)}  
              >
                <FaCartPlus className="size-full"/>
              </button>
            </div>
          </div>
        ) }
      </>
  )
}

export default ProductGrid