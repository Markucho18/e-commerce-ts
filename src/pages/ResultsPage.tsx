import { BsFillGrid3X3GapFill } from "react-icons/bs";

const ResultsPage = () => {
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
              type="text"
              placeholder="min"
              className="w-1/2 p-1 shadow-sm rounded-md focus:outline-none basicShadow"
            />
            <p className="px-1"> - </p> 
            <input
              type="text"
              placeholder="max"
              className="w-1/2 p-1 shadow-sm rounded-md focus:outline-none basicShadow"
            />
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="px-2 text-lg font-semibold pt-2">SIZE</h2>
          <form className="flex justify-center gap-2">
            <button type="submit" className="size-8 border-[2px] hover:bg-zinc-100">XS</button>
            <button type="submit" className="size-8 border-[2px] hover:bg-zinc-100">S</button>
            <button type="submit" className="size-8 border-[2px] hover:bg-zinc-100">M</button>
            <button type="submit" className="size-8 border-[2px] hover:bg-zinc-100">L</button>
            <button type="submit" className="size-8 border-[2px] hover:bg-zinc-100">XL</button>
          </form>
        </section>
      </aside>
      <main className="flex flex-col flex-1 bg-red-100">
        <header className="flex justify-between w-full bg-orange-100 pb-2">
          <select
            name="sorting"
            className="rounded-md bg-white hover:bg-zinc-100 p-2 pr-4 text-md text-zinc-500 basicShadow"
          >
            <option value="Default Sorting">Default Sorting</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <form className="flex">
            <label className="first:checked:bg-orange-500 bg-white flex size-8 place-content-center  relative rounded-sm basicShadow cursor-pointer">
              <input type="checkbox" className="peer opacity-0"/>
              <BsFillGrid3X3GapFill className="peer-checked:text-white flex absolute size-[80%] mt-1"/>
            </label>
          </form>
        </header>
      </main>
    </div>
  )
}

export default ResultsPage