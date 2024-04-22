"use client"

import React, {useEffect, useState} from "react"
import Link from "next/link"

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)
  const toggleNavbar = () => {
    setNavbarIsOpen(!navbarIsOpen)
  }

  return (
    <nav>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 no-underline hover:underline">
          <span className="self-center text-3xl text-gray-900 font-bold whitespace-nowrap">Simon Ludwig</span>
        </Link>
        <button onClick={toggleNavbar} type="button" className="inline-flex group items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className={`w-5 h-5 transform group-hover:scale-125 group-hover:text-red-500 transition-all duration-300 ease-out ${navbarIsOpen ? 'text-red-500 scale-125' : 'text-gray-900 scale-100'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:w-auto ${navbarIsOpen ? 'block' : 'hidden'} md:block border-b-gray-900 border-b-2 md:border-0`} id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 font-mono">
            <li>
              <Link href="/#projects" className="block py-2 px-3 md:p-0 text-gray-900 no-underline hover:underline" aria-current="page">Projects</Link>
            </li>
            <li>
              <Link href="/#about-me" className="block py-2 px-3 md:p-0 text-gray-900 no-underline hover:underline">About Me</Link>
            </li>
            <li>
              <Link href="/#contact" className="block py-2 px-3 md:p-0 text-gray-900 no-underline hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
