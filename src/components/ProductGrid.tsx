import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface ProductProps {
  img: string
  title: string
  price: number
}

const ProductGrid: React.FC<ProductProps> = ({img, title, price}) => {
  return (
    <div
      className="flex flex-col flex-1 h-80 lg:h-[24rem] xl:h-[28rem] overflow-hidden rounded-sm"
      style={{boxShadow: "0px 0px 5px lightgray"}}
    >
      <div className="group flex flex-1 relative w-full object-center">
        <img src={img} alt={title} className="size-full object-cover"/>
        <div className="hidden group-hover:flex justify-center items-center absolute bg-black/20 inset-0 gap-2 ">
          <span className="bg-orange-500 hover:bg-zinc-700 transition-colors duration-200 rounded-full p-2 cursor-pointer">
            <FaSearch className="text-white"/>
          </span>
          <span className="bg-orange-500 hover:bg-zinc-700 transition-colors duration-200 rounded-full p-2 cursor-pointer">
            <FaRegHeart className="text-white"/>
          </span>
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 lg:py-6 justify-center gap-1">
        <p className="text-2xl truncate ">{title}</p>
        <p className="text-red-500  text-xl font-bold">${price}</p>
        <span></span>
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-700 transition-colors duration-300 text-white font-bold py-2">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductGrid