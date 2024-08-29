import ProductGrid from "../components/ProductGrid";
import FiltersCheckbox from "../components/FiltersChekbox";
import { GiCancel } from "react-icons/gi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Display, Product, category, brand, size, Sort} from "../types";
import { useState, useEffect } from "react"
import { useFiltersContext } from "../contexts/FiltersContext";
import { sortResults } from "../utils/sortResults"
import { useProductsContext } from "../contexts/ProductsContext";
import { usePagesContext } from "../contexts/PagesContext";

interface ResultsPageProps {
  searchText: string
}

const ResultsPage: React.FC<ResultsPageProps> = ({ searchText }) => {

  const { setPage, setSearchText } = usePagesContext()

  const { products } = useProductsContext()
  
  const { filters, addFilter, clearFilter } = useFiltersContext()

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const [minPrice, setMinPrice] = useState(0)

  const [sortType, setSortType] = useState<Sort>("priceMin")

  const getFilteredProducts = () => {
    const filteredProducts = products.filter((product) => {
      const matchesSearchText = product.name.toLowerCase().includes(searchText.toLowerCase())
      const matchesCategory = filters.category.length === 0 || (filters.category as category[]).includes(product.category);
      const matchesBrand = filters.brand.length === 0 || (filters.brand as brand[]).includes(product.brand);
      const matchesSize = filters.size.length === 0 || (filters.size as size[]).includes(product.size);
      const matchesPrice = product.price >= filters.minPrice
      return matchesSearchText && matchesCategory && matchesBrand && matchesSize && matchesPrice;
    });
  
    return filteredProducts;
  };

  const handleMinPrice = (min: number) => {
    addFilter('minPrice', min)
  }

  const [productDisplay, setProductDisplay] = useState<Display>('grid')

  useEffect(()=>{
    return (()=>{
      clearFilter()
    })
  },[])

  useEffect(()=>{
    console.log("searchText ha cambiado en ResultsPage: ", searchText)
  },[searchText])

  useEffect(()=>{
    const filtered = getFilteredProducts();
    setFilteredProducts(filtered);
  },[filters])

  useEffect(()=>{
    if(searchText === ""){
      const filtered = getFilteredProducts();
      setFilteredProducts(filtered);
    }
  },[searchText])

  return (
    <div className="flex flex-1 w-full responsive-padding py-4 gap-8">
      <aside
        className="flex flex-col h-max w-60 rounded-sm pt-2 pb-6 divide-y divide-zinc-300"
        style={{boxShadow: "0px 0px 5px lightgray"}}
      >
        <section className="flex flex-col mb-2">
          <h2 className="px-2 text-lg font-semibold">CATEGORIES</h2>
          <FiltersCheckbox
            type="category"
            name="Bedroom"
            total={products.filter(product => product.category.includes("Bedroom")).length}
          />
          <FiltersCheckbox
            type="category"
            name="Sofa"
            total={products.filter(product => product.category.includes("Sofa")).length}
          />
          <FiltersCheckbox
            type="category"
            name="Office"
            total={products.filter(product => product.category.includes("Office")).length}
          />
          <FiltersCheckbox
            type="category"
            name="Outdoor"
            total={products.filter(product => product.category.includes("Outdoor")).length}
          />
        </section>
        <section className="flex flex-col py-4">
          <h2 className="px-2 text-lg font-semibold">BRANDS</h2>
          <FiltersCheckbox
            type="brand"
            name="Dominik"
            total={products.filter(product => product.brand.includes("Dominik")).length}
          />
          <FiltersCheckbox
            type="brand"
            name="Karl"
            total={products.filter(product => product.brand.includes("Karl")).length}
          />
          <FiltersCheckbox
            type="brand"
            name="Maxing"
            total={products.filter(product => product.brand.includes("Maxing")).length}
          />
          <FiltersCheckbox
            type="brand"
            name="Ernest"
            total={products.filter(product => product.brand.includes("Ernest")).length}
          />
        </section>
        <section className="flex flex-col py-4 gap-2">
          <h2 className="px-2 text-lg font-semibold">PRICE: ${minPrice}</h2>
          <div className="flex w-full px-2">
            <input
              type="range"
              min={0}
              max={products.sort((a, b) => b.price - a.price)[0].price + 1}
              value={minPrice}
              onChange={(e) =>{
                setMinPrice(parseInt(e.target.value))
                handleMinPrice(parseInt(e.target.value))
              }}
            />
          </div>
        </section>
        <section className="flex flex-col gap-4 pb-4">
          <h2 className="px-2 text-lg font-semibold pt-2">SIZE</h2>
          <form className="flex justify-center gap-2">
            <FiltersCheckbox
              type="size"
              name="XS"
            />
            <FiltersCheckbox
              type="size"
              name="S"
            />
            <FiltersCheckbox
              type="size"
              name="M"
            />
            <FiltersCheckbox
              type="size"
              name="L"
            />
            <FiltersCheckbox
              type="size"
              name="XL"
            />
          </form>
        </section>
        <section className="flex justify-between pt-2 px-4">
          <p className="text-zinc-600 text-xl">Results: {filteredProducts.length}</p>
          <p className="text-zinc-600 text-xl">Total: {products.length}</p>
        </section>
      </aside>
      <main className="flex flex-col flex-1">
        <header className="flex justify-between w-full pb-2">
          <div className="flex items-center gap-4">
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value as Sort)}
              className="rounded-md bg-white hover:bg-zinc-100 p-2 pr-4 text-md text-zinc-500 basicShadow"
            >
              <option value="priceMin">Price (- +)</option>
              <option value="priceMax">Price(+ -)</option>
              <option value="xsXL">Size (XS - XL)</option>
              <option value="xlXS">Size (XL - XS)</option>
              <option value="aZ">A-Z</option>
              <option value="Za">Z-A</option>
            </select>
            {searchText.length > 0 && (
              <div className="flex gap-2">
                <p className="text-xl font-bold">Search filter: <span className="text-zinc-600">"{searchText}"</span></p>
                <button
                  className="text-zinc-500 size-6 hover:text-zinc-700"
                  onClick={()=>{
                    setPage('resultsPage')
                    setSearchText("")
                  }}
                >
                  <GiCancel className="size-full"/>
                </button>
              </div>
            )}
            
          </div>
          <form className="flex gap-2">
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input
                name="productDisplay"
                defaultChecked
                type="radio"
                className="peer opacity-0"
                onChange={() => setProductDisplay("grid")}
              />
              <BsFillGrid3X3GapFill className="peer-checked:text-white text-zinc-600 flex absolute size-[80%] mt-1"/>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input
                name="productDisplay"
                type="radio"
                className="peer opacity-0"
                onChange={() => setProductDisplay("list")}
              />
              <FaListUl  className="peer-checked:text-white text-zinc-600 flex absolute size-[80%] mt-1"/>
            </label>
          </form>
        </header>
        {filteredProducts.length > 0 ? (
          <div className={productDisplay === "grid" ? "products-grid" : "flex flex-col gap-4"}>
            {sortResults(filteredProducts, sortType).map((product, i) => (
              <ProductGrid
                key={i}
                id={product.id}
                name={product.name}
                price={product.price}
                thumbnail={product.thumbnail}
                category={product.category}
                brand={product.brand}
                size={product.size}
                stock={product.stock}
                quantity={product.quantity}
                display={productDisplay}
              />
            ))}
          </div>
        ) : (
          <p className="text-2xl">There's no coincidences for those filters</p>
        )}
      </main>
    </div>
  )
}

export default ResultsPage