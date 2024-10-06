import { useFiltersContext } from "../contexts/FiltersContext"
import { brand, category, size } from "../types"

interface CheckboxProps {
  type: 'category' | 'brand' | 'size'
  name: category | brand | size
  total?: number
}

const FiltersCheckbox: React.FC<CheckboxProps> = ({type, name, total}) => {

  const { filters, addFilter, removeFilter } = useFiltersContext()

  const handleCategoryChange = (category: category) => {
    if((filters.category as category[]).includes(category)) removeFilter('category', category)
     else addFilter('category', category)
   }
 
   const handleBrandChange = (brand: brand) => {
     if((filters.brand as brand[]).includes(brand)) removeFilter('brand', brand)
     else addFilter('brand', brand)
   }
 
   const handleSizeChange = (size: size) => {
     if((filters.size as size[]).includes(size)) removeFilter('size', size)
     else addFilter('size', size)
   }

  return (
    <>
      {type === 'brand' ? (
        <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={(filters.brand as brand[]).includes(name as brand)}
            onChange={() => handleBrandChange(name as brand)}
          />
          <p className="flex flex-1">{name}</p>
          <p className="text-zinc-600">({total})</p>
        </label>
      ) : type === 'category' ? (
        <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={(filters.category as category[]).includes(name as category)}
            onChange={() => handleCategoryChange(name as category)}
          />
          <p className="flex flex-1">{name}</p>
          <p className="text-zinc-600">({total})</p>
        </label>
      ) : (
        <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
          <input
            type="checkbox"
            className="peer opacity-0"
            checked={(filters.size as size[]).includes(name as size)}
            onChange={() => handleSizeChange(name as size)}
          />
          <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">{name}</p>
        </label>
      )} 
    </>
  )
}

export default FiltersCheckbox

