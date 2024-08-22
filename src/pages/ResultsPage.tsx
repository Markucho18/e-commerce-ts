import ProductGrid from "../components/ProductGrid";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Display } from "../types";
import { useState } from "react"
import { Product } from "../types";
import productsData from "../products.json"

const ResultsPage = () => {

  const products: Product[] = productsData as Product[]

  const [productDisplay, setProductDisplay] = useState<Display>('grid')

  return (
    <div className="flex flex-1 w-full responsive-padding py-4 gap-8">
      <aside
        className="flex flex-col w-60 rounded-sm py-2 divide-y divide-zinc-300"
        style={{boxShadow: "0px 0px 5px lightgray"}}
      >
        <section className="flex flex-col mb-2">
          <h2 className="px-2 text-lg font-semibold">CATEGORIES</h2>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Bedroom</p>
            <p className="text-zinc-600">(15)</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Sofa</p>
            <p className="text-zinc-600">(15)</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Office</p>
            <p className="text-zinc-600">(15)</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Outdoor</p>
            <p className="text-zinc-600">(15)</p>
          </label>
        </section>
        <section className="flex flex-col py-4">
          <h2 className="px-2 text-lg font-semibold">BRANDS</h2>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Dominik</p>
            <p className="text-zinc-600">(15)</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Karl</p>
            <p className="text-zinc-600">(15)</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Maxing</p>
            <p className="text-zinc-600">(15)</p>
          </label>
          <label className="flex px-2 py-2 items-center gap-2 hover:bg-zinc-100 cursor-pointer select-none">
            <input type="checkbox" />
            <p className="flex flex-1">Ernest</p>
            <p className="text-zinc-600">(15)</p>
          </label>
        </section>
        <section className="flex flex-col py-4 gap-2">
          <h2 className="px-2 text-lg font-semibold">PRICE</h2>
          <div className="flex w-full px-2">
            <input
              type="number"
              placeholder="min"
              className="w-1/2 p-1 shadow-sm rounded-md focus:outline-none basicShadow"
            />
            <p className="px-1"> - </p> 
            <input
              type="number"
              placeholder="max"
              className="w-1/2 p-1 shadow-sm rounded-md focus:outline-none basicShadow"
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="px-2 text-lg font-semibold pt-2">SIZE</h2>
          <form className="flex justify-center gap-2">
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input name="size" type="radio" className="peer opacity-0"/>
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">XS</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input name="size" type="radio" className="peer opacity-0"/>
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">S</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input name="size" type="radio" className="peer opacity-0"/>
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">M</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input name="size" type="radio" className="peer opacity-0"/>
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">L</p>
            </label>
            <label className="has-[:checked]:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow select-none cursor-pointer">
              <input name="size" type="radio" className="peer opacity-0"/>
              <p className="flex place-content-center peer-checked:text-white font-bold text-zinc-600 absolute inset-0 p-1">XL</p>
            </label>
            
          </form>
        </section>
      </aside>
      <main className="flex flex-col flex-1">
        <header className="flex justify-between w-full pb-2">
          <select
            name="sorting"
            className="rounded-md bg-white hover:bg-zinc-100 p-2 pr-4 text-md text-zinc-500 basicShadow"
          >
            <option value="Default Sorting">Default Sorting</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
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
          {products.map((product, i) => (
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