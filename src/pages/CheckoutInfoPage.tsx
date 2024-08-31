import { useState } from "react"

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

  return (
    <div>
      <form
        className="flex flex-col "
      >
        <h2>Checkout Info</h2>
        <div className="flex">
          <label className="flex flex-col">
            First Name 
            <input
              className="focus:outline-none rounded-sm border-2"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
              type="text"
            />
          </label>
          <label className="flex flex-col">
            Last Name 
            <input
              className="focus:outline-none rounded-sm border-2"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
              type="text"
            />
          </label>
        </div>
        <label className="flex flex-col">
          Country 
          <input
            className="focus:outline-none rounded-sm border-2"
            name="country"
            value={userInfo.country}
            onChange={handleChange}
            type="text" />
        </label>
        <label className="flex flex-col">
          Adress 
          <input
            className="focus:outline-none rounded-sm border-2"
            name="adress"
            value={userInfo.adress}
            onChange={handleChange}
            type="text" />
        </label>
        <label className="flex flex-col">
          Phone 
          <input
            className="focus:outline-none rounded-sm border-2"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            type="text" />
        </label>
        <label className="flex flex-col">
          E-Mail 
          <input
            className="focus:outline-none rounded-sm border-2"
            name="mail"
            value={userInfo.mail}
            onChange={handleChange}
            type="text"
          />
        </label>
      </form>
    </div>
  )
}

export default CheckoutInfoPage