import { usePagesContext } from "../contexts/PagesContext"
import { size } from "../types"

interface SearchSuggestionProps {
  id: number
  name: string
  price: number
  thumbnail: string
  size : size
  quantity: number
}

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({id, name, thumbnail, price, size, quantity})  => {

  const { openProductPage } = usePagesContext()
 
  return (
    <div
      className="flex gap-4 p-2 items-center bg-zinc-100/50 hover:bg-white cursor-pointer select-none"
      onClick={() => openProductPage(id)}
    >
      <img
        className="size-10 rounded-md"
        src={thumbnail}
        alt={name} 
      />
      <div className="flex flex-col">
        <p className="text-bold text-lg">{name}</p>
        <div className="flex gap-2">
          <p className="text-red-600">{price}</p>
          <p className="text-zinc-500">({size})</p>
          {quantity > 0 && <p className="text-zinc-600">(x{quantity})</p>}
        </div>
      </div>
    </div>
  )
}

export default SearchSuggestion

