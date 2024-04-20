"use client"

import {useState} from "react"

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)
  const toggleNavbar = () => {
    setNavbarIsOpen(!navbarIsOpen)
  }

  return (
    <nav>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://simonludwig.com" className="flex items-center space-x-3 no-underline hover:underline">
          <span className="self-center text-3xl font-bold whitespace-nowrap">Simon Ludwig</span>
        </a>
        <button onClick={toggleNavbar} type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden ${navbarIsOpen ? 'text-primary' : 'text-title'} hover:text-primary focus:outline-none`} aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:w-auto ${navbarIsOpen ? 'block' : 'hidden'} md:block border-b-title border-b-2 md:border-0`} id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 font-mono">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 no-underline hover:underline" aria-current="page">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 no-underline hover:underline">About Me</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 no-underline hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
