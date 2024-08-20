import React, { SetStateAction } from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { Page } from "../types";

interface NavBarProps {
  setPage : React.Dispatch<SetStateAction<Page>>
}
const NavBar: React.FC<NavBarProps> = ({ setPage }) => {
  return (
    <nav className="flex w-full bg-black text-white responsive-padding">
      <ul className="flex flex-1">
        <li
          className="flex gap-2 px-4 py-2 items-center bg-orange-500 hover:bg-orange-600 select-none cursor-pointer"
          onClick={() => setPage('resultsPage')}
        >
          <RxDragHandleHorizontal className="size-6 "/>
          <p className="hidden sm:flex">Categories</p>
        </li>
        <li
          className="select-none cursor-pointer px-4 py-2 hover:bg-zinc-700/80"
          onClick={() => setPage('homePage')}
        >Home</li>
        <li className="select-none cursor-pointer px-4 py-2 hover:bg-zinc-700/80">Shop</li>
        <li className="select-none cursor-pointer px-4 py-2 hover:bg-zinc-700/80">About us</li>
        <li className="select-none cursor-pointer px-4 py-2 hover:bg-zinc-700/80">Contact us</li>
      </ul>
      <p className="select-none cursor-pointer px-4 py-2 hover:bg-zinc-700/80">Login/Register</p>
    </nav>
  )
}

export default NavBar