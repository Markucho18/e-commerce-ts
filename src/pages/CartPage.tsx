import { useState, useEffect } from "react"
import ProductGrid from "../components/ProductGrid";
import { Sort } from "../types"
import { Product } from "../types";
import { sortResults } from "../utils/sortResults";
import { useProductsContext } from "../contexts/ProductsContext";

const CartPage: React.FC = () => {

  const { products, clearCart } = useProductsContext()

  const [sortType, setSortType] = useState<Sort>('priceMin')

  const [cartProducts, setCartProducts] = useState<Product[]>([])

  const calculateQuantity = () => {
    let total = 0
    cartProducts.map(product => {
      total = total + product.quantity
    })
    return total
  }

  const calculateTotalPrice = () => {
    let total = 0
    cartProducts.map(product => {
      total = total + product.price * product.quantity
    })
    return total
  }

  useEffect(() => { 
    const newProducts = products.filter(product => product.quantity > 0)
    console.log(newProducts)
    setCartProducts(newProducts)
  },[products])
  

  return (
    <div className="flex flex-col w-full responsive-padding">
      <div className="flex flex-col flex-1">
        <header className="flex justify-between w-full py-4">
          <div className="flex items-center gap-2">
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
            <p className="text-zinc-400 font-bold">Results: {cartProducts.length}</p>
          </div>
        </header>
        <div className="flex w-full gap-2">
          {cartProducts.length > 0 ? (
            <main className="flex flex-col gap-4 flex-1">
              {sortResults(cartProducts, sortType).map((product, i) => (
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
                  display="list"
                />
              ))}
            </main>
          ) : (
            <main className="flex flex-col flex-1">
              <p className="text-2xl text-zinc-700">There's no products in cart</p>
            </main>
          )}
          <aside className="hidden sm:flex flex-col h-max basicShadow w-[250px] py-6 px-4 gap-2">
            <h2 className="text-xl w-full text-center font-bold text-zinc-800/80">Information: </h2>
            <p className=" text-zinc-700 text-lg">Quantity: <span className="text-red-700 font-bold">{calculateQuantity()}</span></p>
            <p className=" text-zinc-700 text-lg">Discount: <span className="text-red-700 font-bold">50%</span></p>
            <p className=" text-zinc-700 text-lg">Price: <span className="text-red-700 font-bold">${calculateTotalPrice()}</span></p>
            <p className=" text-zinc-700 text-lg">Total Price: <span className="text-red-700 font-bold">${calculateTotalPrice() / 2}</span></p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md py-2">BUY NOW</button>
            <button
              className="w-full bg-zinc-100 hover:bg-zinc-200/80 text-gray-500 hover:text-red-500 font-bold rounded-md py-2 border-2 transition-all duration-100"
              onClick={clearCart}
            >
              CLEAR CART
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default CartPage