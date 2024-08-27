import { useState, useEffect } from "react"
import SearchSuggestion from "./SearchSuggestion";
import { FaSearch } from "react-icons/fa";
import { useProductsContext } from "../contexts/ProductsContext";
import { Product } from "../types";
import { usePagesContext } from "../contexts/PagesContext";

interface SearchBarProps {

}

const SearchBar: React.FC<SearchBarProps> = () => {

  const { page } = usePagesContext()

  const { products } = useProductsContext()

  const [searchText, setSearchText] = useState("")

  const [searchProducts, setSearchProducts] = useState<Product[]>([])

  const handleSearchText = (value: string) => {
    if(value.length > 0){
      const coincidences = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
      setSearchProducts(coincidences.slice(0, 5))
      console.log(coincidences)
    }
    else{
      setSearchProducts([])
    }
    setSearchText(value)
  }
  
  useEffect(() => {
    setSearchText("")
    setSearchProducts([])
  },[page])
  

  return (
    <form className="flex flex-1 relative sm:mx-4 md:mx-10 lg:mx-16 xl:mx-24 2xl:mx-36 bg-white rounded-lg border-2 border-orange-500 hover:border-orange-600 ">
      <label htmlFor="" className="flex flex-1 items-center gap-2 p-2">
        <FaSearch className="text-black/50"/>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearchText(e.target.value)}
          value={searchText}
          className="focus:outline-none w-full"
        />
      </label>
      <button type="submit" className="bg-orange-500 px-4 text-white font-semibold hover:bg-orange-600">
        Search
      </button>
      <div className="flex flex-col absolute z-10 mt-12 bg-white basicShadow rounded-md w-full divide-y-[1px] divide-zinc-500/50 overflow-hidden">
        {searchProducts.map((product, i) => (
          <SearchSuggestion
            key={i}
            id={product.id}
            name={product.name}
            price={product.price}
            thumbnail={product.thumbnail}
            size={product.size}
            quantity={product.quantity}
          />
        ))}
      </div>
    </form>
  )
}

export default SearchBar