import ProductGrid from "../components/ProductGrid"
import { Product } from "../types"
import { useState, useEffect } from "react"
import productsData from "../products.json"

interface ProductPageProps{
  id: number
}

const ProductPage: React.FC<ProductPageProps> = ({id}) => {

  const products: Product[] = productsData as Product[]

  const product = products.find(product => product.id === id)

  const getRandomProducts = () => {
    const randomProductsArray = []
    const usedIndices = new Set()
    while (randomProductsArray.length < 5) {
      const randomNumber = Math.floor(Math.random() * products.length);
      if (!usedIndices.has(randomNumber)) {
        randomProductsArray.push(products[randomNumber]);
        usedIndices.add(randomNumber);
      }
    }
    console.log(randomProductsArray)
    return randomProductsArray
  };

  return (
    <>
      {product ? (
        <div className="flex w-full responsive-padding py-6 flex-1">
          <section className="flex flex-col flex-1 gap-4">
            <img
              src={product.thumbnail}
              alt="image loading"
              className="w-full rounded-md"
            />
            <h1 className="text-4xl">{product.name}</h1>
            <p className="text-red-500 text-2xl">${product.price}</p>
          </section>
          <section className="flex flex-col flex-1 px-4 divide-y-2 ">
            <div className="flex flex-col flex-1 text-zinc-500 gap-2 pb-4">
              <h3 className="text-3xl font-bold">Features:</h3>
              <ul>
                <li className="text-xl">Category: {product.category}</li>
                <li className="text-xl">Brand: {product.brand}</li>
                <li className="text-xl">Size: {product.size}</li>
                <li className="text-5xl text-black">DESPUES HACER EL RESPONSIVE DE ESTO</li>
              </ul>
            </div>
            <div className="flex flex-col justify-end flex-1 gap-2 pt-4">
              <p className="text-xl text-zinc-500">Stock:</p>
              <label className="flex gap-2 text-xl text-zinc-500 items-center">
                Quantity: 
                <input type="number" defaultValue={product.stock} className="rounded-md border-2 border-gray-400 focus:outline-none p-1"/>
              </label>
              <button className="w-full rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition duration-300 text-center font-bold text-lg py-2">Buy now</button>
              <button className="w-full rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition duration-300 text-center font-bold text-lg py-2">Add to cart</button>
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-zinc-500">Similar:</h2>
            <div className="flex flex-col w-full gap-3 overflow-hidden">
              {getRandomProducts().map((product, i)=>(
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
                  display="list"
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="flex place-content-center size-full">
          <h1 className="text-red-500 text-6xl">PRODUCT NOT FOUND</h1>
        </div>
      )}
    </>
  )
}

/*
Necesito que crees un JSON muy basico las categorias y posibles valores son
id,
name,
price,
thumbnail(ya me encargo yo luego de esto),
cathegory(Bedroom, Sofa, Office o Outdoor),
Brand(Dominik, Karl, Maxing, Ernest),
Size(XS, S, MS, L, XL)
Hazme una lista de 30 y trata de incluir almenos uno con cada valor
 */

export default ProductPage