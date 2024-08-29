//Components
import InfoBox from "../components/InfoBox"
import CategoryGrid from "../components/CategoryGrid"
import ProductGrid from "../components/ProductGrid"
//Icons
import { FaTruck } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
//Images
import bedroom from "../assets/bedroom.jpg"
import homeImage from "../assets/homeImage.jpg"
import sofa from "../assets/livingRoom.png"
import office from "../assets/officeRoom.jpg"
import outdoors from "../assets/outDoorsPorche.jpg"
import mattress from "../assets/mattress.jpg"
import dining from "../assets/diningRoom.jpg"
import { getRandomProducts } from "../utils/getRandomProducts";
import { useProductsContext } from "../contexts/ProductsContext";

const HomePage = () => {

  const { products } = useProductsContext()

  

  return (
    <div className="flex flex-col w-full">
      <section className="flex w-full overflow-hidden py-32 home-page-background">
        <div className="flex flex-col items-start gap-8 w-full responsive-padding">
          <div className="flex flex-col w-full md:w-2/3 gap-8">
            <p className="font-bold text-6xl select-none">Best Collection for Home Decoration</p>
            <p className="text-zinc-800 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus eum aspernatur vitae doloribus inventore ab reprehenderit sequi nam asperiores.</p>
          </div>
          <button className="text-white bg-orange-500 hover:bg-orange-600 rounded-md px-6 py-2 text-lg font-bold transition-all duration-300">
            SHOP NOW
          </button>
        </div>
      </section>
      <section className="flex w-full responsive-padding py-14 justify-center gap-6">
        <InfoBox
          title="Free Shipping"
          desc="Order over $200"
        >
          <FaTruck className="group-hover:text-red-400/70 text-red-300/80 size-12" />
        </InfoBox>
        <InfoBox
          title="Money Return"
          desc="30 days money return"
        >
          <RiMoneyDollarCircleFill className="group-hover:text-red-400/70 text-red-300/80 size-12" />
        </InfoBox>
        <InfoBox
          title="24/7 Support"
          desc="Customer support"
        >
          <MdTimer className="group-hover:text-red-400/70 text-red-300/80 size-12" />
        </InfoBox>
      </section>
      <section className="flex flex-col w-full responsive-padding mb-12 gap-6">
        <h2 className="font-bold text-2xl text-black/80">SHOP BY CATEGORY</h2>
        <div className="responsive-grid">
          <CategoryGrid img={bedroom} title="Bedroom" />
          <CategoryGrid img={sofa} title="Sofa" />
          <CategoryGrid img={office} title="Office" />
          <CategoryGrid img={outdoors} title="Outdoors" />
          <CategoryGrid img={mattress} title="Mattress" />
          <CategoryGrid img={dining} title="Dining" />
        </div>
      </section>
      <section className="flex flex-col w-full gap-6 responsive-padding mb-12">
        <h2 className="font-bold text-2xl text-black/80">TOP NEW ARRIVAL</h2>
        <div className="products-grid">
          {getRandomProducts(products, 4).map((product, i)=>(
            <ProductGrid
              key={i}
              id={product.id}
              name={product.name}
              price={product.price}
              thumbnail={homeImage}
              category={product.category}
              brand={product.brand}
              size={product.size}
              stock={product.stock}
              quantity={product.quantity}
              display="grid"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage