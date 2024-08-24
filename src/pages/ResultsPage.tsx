import ProductGrid from "../components/ProductGrid";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Display, Product, category, brand, size} from "../types";
import { useState, useEffect } from "react"
import productsData from "../products.json"
import { useFiltersContext } from "../contexts/FiltersContext";

const ResultsPage = () => {

  const products: Product[] = productsData as Product[]
  
  const { filters, addFilter, removeFilter, clearFilter } = useFiltersContext()

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const [minPrice, setMinPrice] = useState(0)

  const getFilteredProducts = () => {
    const filteredProducts = products.filter((product) => {
      const matchesCategory = filters.category.length === 0 || (filters.category as category[]).includes(product.category);
      const matchesBrand = filters.brand.length === 0 || (filters.brand as brand[]).includes(product.brand);
      const matchesSize = filters.size.length === 0 || (filters.size as size[]).includes(product.size);
      const matchesPrice = product.price >= filters.minPrice
      return matchesCategory && matchesBrand && matchesSize && matchesPrice;
    });
  
    return filteredProducts;
  };

  const handleCategoryChange = (category: category) => {
    if((filters.category as category[]).includes(category)) removeFilter('category', category)
    else addFilter('category', category)
  }

  const handleBrandChange = (brand: brand) => {
    if((filters.brand as brand[]).includes(brand)) removeFilter('brand', brand)
    else addFilter('brand', brand)
  }

  const handleMinPrice = (min: number) => {
    addFilter('minPrice', min)
  }

  const handleSizeChange = (size: size) => {
    if((filters.size as size[]).includes(size)) removeFilter('size', size)
    else addFilter('size', size)
  }

  const [productDisplay, setProductDisplay] = useState<Display>('grid')

  useEffect(()=>{
    return () => {
      console.log("Se han limpiado los filtros")
      clearFilter()
    }
  },[])

  useEffect(()=>{
    const filtered = getFilteredProducts()
    setFilteredProducts(filtered)
  },[filters])

  return (
    <div className="flex flex-1 w-full responsive-padding py-4 gap-8">
      <aside
        className="flex flex-col w-60 rounded-sm py-2 divide-y divide-zinc-300"
        style={{boxShadow: "0px 0px 5px lightgray"}}
      >
        <section className="flex flex-col mb-2">
          <h2 className="px-2 text-lg font-semibold">CATEGORIES</h2>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={(filters.category as category[]).includes("Bedroom")}
              onChange={() => handleCategoryChange("Bedroom")}
            />
            <p className="flex flex-1">Bedroom</p>
            <p className="text-zinc-600">({products.filter(product => product.category.includes("Bedroom")).length})</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={(filters.category as category[]).includes("Sofa")}
              onChange={() => handleCategoryChange("Sofa")}
            />
            <p className="flex flex-1">Sofa</p>
            <p className="text-zinc-600">({products.filter(product => product.category.includes("Sofa")).length})</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={(filters.category as category[]).includes("Office")}
              onChange={() => handleCategoryChange("Office")}
            />
            <p className="flex flex-1">Office</p>
            <p className="text-zinc-600">({products.filter(product => product.category.includes("Office")).length})</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={(filters.category as category[]).includes("Outdoor")}
              onChange={() => handleCategoryChange("Outdoor")}
            />
            <p className="flex flex-1">Outdoor</p>
            <p className="text-zinc-600">({products.filter(product => product.category.includes("Outdoor")).length})</p>
          </label>
        </section>
        <section className="flex flex-col py-4">
          <h2 className="px-2 text-lg font-semibold">BRANDS</h2>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={(filters.brand as brand[]).includes("Dominik")}
              onChange={() => handleBrandChange("Dominik")}
            />
            <p className="flex flex-1">Dominik</p>
            <p className="text-zinc-600">({products.filter(product => product.brand.includes("Dominik")).length})</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox"
              checked={(filters.brand as brand[]).includes("Karl")}
              onChange={() => handleBrandChange("Karl")}
            />
            <p className="flex flex-1">Karl</p>
            <p className="text-zinc-600">({products.filter(product => product.brand.includes("Karl")).length})</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox"
              checked={(filters.brand as brand[]).includes("Maxing")}
              onChange={() => handleBrandChange("Maxing")}
            />
            <p className="flex flex-1">Maxing</p>
            <p className="text-zinc-600">({products.filter(product => product.brand.includes("Maxing")).length})</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox"
              checked={(filters.brand as brand[]).includes("Ernest")}
              onChange={() => handleBrandChange("Ernest")}
            />
            <p className="flex flex-1">Ernest</p>
            <p className="text-zinc-600">({products.filter(product => product.brand.includes("Ernest")).length})</p>
          </label>
        </section>
        <section className="flex flex-col py-4 gap-2">
          <h2 className="px-2 text-lg font-semibold">PRICE: {minPrice}</h2>
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
        <section className="flex flex-col gap-4">
          <h2 className="px-2 text-lg font-semibold pt-2">SIZE</h2>
          <form className="flex justify-center gap-2">
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input
                type="checkbox"
                className="peer opacity-0"
                checked={(filters.size as size[]).includes("XS")}
                onChange={() => handleSizeChange("XS")}
              />
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">XS</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input
                type="checkbox"
                className="peer opacity-0"
                checked={(filters.size as size[]).includes("S")}
                onChange={() => handleSizeChange("S")}
              />
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">S</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input
                type="checkbox"
                className="peer opacity-0"
                checked={(filters.size as size[]).includes("M")}
                onChange={() => handleSizeChange("M")}
              />
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">M</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input
                type="checkbox"
                className="peer opacity-0"
                checked={(filters.size as size[]).includes("L")}
                onChange={() => handleSizeChange("L")}
              />
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">L</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
            <input
                type="checkbox"
                className="peer opacity-0"
                checked={(filters.size as size[]).includes("XL")}
                onChange={() => handleSizeChange("XL")}
              />
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">XL</p>
            </label>
            
          </form>
        </section>
      </aside>
      <main className="flex flex-col flex-1">
        <header className="flex justify-between w-full pb-2">
          <div className="flex">
            <select
              name="sorting"
              className="rounded-md bg-white hover:bg-zinc-100 p-2 pr-4 text-md text-zinc-500 basicShadow"
            >
              <option value="Default Sorting">Default Sorting</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <p>Results: {filteredProducts.length}</p>
            <p>Total: {products.length}</p>
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
        <div className={productDisplay === "grid" ? "products-grid" : "flex flex-col gap-4"}>
          {filteredProducts.map((product, i) => (
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
              display={productDisplay}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default ResultsPage