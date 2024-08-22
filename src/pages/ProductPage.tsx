import { Product } from "../types"
import productsData from "../products.json"

interface ProductPageProps{
  id: number
}

const ProductPage: React.FC<ProductPageProps> = ({id}) => {

  const products: Product[] = productsData as Product[]

  const product = products.find(product => product.id === id)

  return (
    <>
      {product ? (
        <div className="flex responsive-padding">
          <section className="flex flex-col flex-1 gap-4">
            <img
              src={product.thumbnail}
              alt="image loading"
              className="w-full"
            />
            <h1 className="text-4xl">{product.name}</h1>
            <p className="text-red-500 text-2xl">${product.price}</p>
          </section>
          <section className="flex flex-col flex-1">
            <div className="flex flex-col">
              <h3>Features:</h3>
              <ul>
                <li>Category: {product.category}</li>
                <li>Brand: {product.brand}</li>
                <li>Size: {product.size}</li>
              </ul>
            </div>
            <div className="flex flex-col px-2">
              <p>Stock</p>
              <label>
                Quantity: 
                <input type="number" defaultValue={product.stock}/>
              </label>
              <button className="w-full rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition duration-300 text-center font-bold text-lg py-2">Buy now</button>
              <button className="w-full rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition duration-300 text-center font-bold text-lg py-2">Add to cart</button>
            </div>
          </section>
          <section className="flex flex-col flex-1 bg-red-500">
            <h2>Similar:</h2>
            
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