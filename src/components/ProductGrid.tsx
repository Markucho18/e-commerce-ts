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
      className="flex flex-col w-60 h-80 overflow-hidden rounded-sm"
      style={{boxShadow: "3px 3px 3px lightgray"}}
    >
      <div className="group flex flex-1 relative w-full object-center">
        <img src={img} alt={title} className="size-full object-cover"/>
        <div className="hidden group-hover:flex justify-center items-center absolute bg-black/20 inset-0 gap-2 ">
          <span className="bg-orange-500 hover:bg-orange-600 rounded-full p-2 cursor-pointer">
            <FaSearch className="text-white"/>
          </span>
          <span className="bg-orange-500 hover:bg-orange-600 rounded-full p-2 cursor-pointer">
            <FaRegHeart className="text-white"/>
          </span>
        </div>
      </div>
      <div className="flex flex-col py-4 justify-center gap-1">
        <p className="text-xl truncate ">{title}</p>
        <p className="text-red-500  text-lg font-bold">${price}</p>
        <span></span>
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductGrid