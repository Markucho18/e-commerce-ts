const Footer = () => {
  return (
    <footer className="flex w-full mb-6">
      <section className="flex flex-col gap-4">
        <p>RAFCART</p>
        <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, rem!</p>
        <div className="flex gap-4">
          <span>FB</span>
          <span>TW</span>
          <span>IN</span>
          <span>LD</span>
        </div>
      </section>
      <section className="flex flex-1">
        <div className="flex flex-1 bg-red-500 flex-col px-6 gap-4">
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
        </div>
        <div className="flex flex-1 bg-blue-200 flex-col px-6 gap-4"></div>
        <div className="flex flex-1 bg-blue-700 flex-col px-6 gap-4"></div>
        <div className="flex flex-1 bg-green-500 flex-col px-6 gap-4"></div>
      </section>
    </footer>
  )
}

export default Footer