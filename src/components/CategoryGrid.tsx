interface Props {
  img: string
  title: string
}

const CategoryGrid: React.FC<Props> = ({img, title}) => {
  return (
    <div className="group flex relative overflow-hidden select-none cursor-pointer">
      <img src={img} className="size-full object-cover object-center inset-0 absolute top-0 left-0 " />
      <div className="flex justify-center items-center size-full z-10 bg-black/20 group-hover:bg-transparent transition-all duration-200">
        <p className="text-white text-2xl font-bold">{title}</p>
      </div>
    </div>
  )
}

export default CategoryGrid