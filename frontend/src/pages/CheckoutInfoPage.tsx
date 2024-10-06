import { useState, useEffect } from "react"

interface userInfoForm {
  firstName: string
  lastName: string
  country: string
  city: string
  adress: string
  phone: number
  mail: string
}

const CheckoutInfoPage: React.FC = () => {

  const [isLogged, setIsLogged] = useState(false)

  const [userInfo, setUserInfo] = useState<userInfoForm>({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    adress: "",
    phone: 0,
    mail: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Te registraste (en teoria xd)")
    console.log(userInfo)
  }

/*   useEffect(()=>{
    console.log("El userInfo se actualizo")
    console.log(userInfo)
  },[userInfo]) */

  return (
    <div className="responsive-padding py-4">
      <form
        className="flex flex-col p-6 gap-4 basicShadow max-w-[600px] mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-2xl text-black/80">
          {isLogged ? "Log In" : "Create an account"}
        </h2>
        <label className="flex flex-col gap-1">
          First Name 
          <input
            className="focus:outline-none rounded-sm border-2 p-2"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
            type="text"
          />
        </label>
        <label className="flex flex-col gap-1">
          Last Name 
          <input
            className="focus:outline-none rounded-sm border-2 p-2"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
            type="text"
          />
        </label>
        <label className="flex flex-col gap-1">
          Country 
          <input
            className="focus:outline-none rounded-sm border-2 p-2"
            name="country"
            value={userInfo.country}
            onChange={handleChange}
            type="text" />
        </label>
        <label className="flex flex-col gap-1">
          City
          <input
            className="focus:outline-none rounded-sm border-2 p-2"
            name="city"
            value={userInfo.city}
            onChange={handleChange}
            type="text" />
        </label>
        <label className="flex flex-col gap-1">
          Adress 
          <input
            className="focus:outline-none rounded-sm border-2 p-2"
            name="adress"
            value={userInfo.adress}
            onChange={handleChange}
            type="text" />
        </label>
        <label className="flex flex-col gap-1">
          E-Mail 
          <input
            className="focus:outline-none rounded-sm border-2 p-2"
            name="mail"
            value={userInfo.mail}
            onChange={handleChange}
            type="text"
          />
        </label>
        <label className="flex flex-col gap-1">
          Phone 
          <input
            className="focus:outline-none rounded-sm border-2 p-2"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            type="number" />
        </label>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md py-2 px-12"
          type="submit"
        >
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  )
}

export default CheckoutInfoPage