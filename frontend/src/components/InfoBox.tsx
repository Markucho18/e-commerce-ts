interface InfoBox {
  children: React.ReactNode
  title: string
  desc: string
}

const InfoBox: React.FC<InfoBox> = ({children, title, desc}) => {
  return (
    <div className="group flex px-4 py-4 gap-4 lg:px-10  border-2 border-red-300/80 hover:border-red-400/80 rounded-md info-box cursor-pointer">
     {children}
     <div className="hidden sm:flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="text-zinc-700/80">{desc}</p>
     </div>
    </div>
  )

}

export default InfoBox