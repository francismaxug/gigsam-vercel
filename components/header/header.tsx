import React from "react"

import Link from "next/link"
import { Button } from "../ui/button"
import { ShiftingDropDown } from "@/components/header/header-dropdowns"

const Header = () => {
  return (
    <header className="fixed top-0 mb-20 px-3 w-full bord  bg-black/50 backdrop-blur-md z-50 border-b border-neutral-900">
      <div className="container mx-auto px-0 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link
            href="/"
            className="flex items-center gap-x-1 font-semibold  font-sans"
          >
            <svg height="26" viewBox="0 0 74 64" className="text-white">
              <path
                d="M37.5896 0L75.1792 65H0L37.5896 0Z"
                fill="currentColor"
              />
            </svg>
            <p>Vercel</p>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <ShiftingDropDown />
          </div>
        </div>
        <div className="lg:flex items-center space-x-4 hidden ">
          <Link
            href="/login"
            className="text-[0.72rem] border px-2 rounded-sm border-neutral-800 py-1  text-white/70 hover:text-white hidden sm:block"
          >
            Log In
          </Link>
          <Link
            href="/contact"
            className="text-[0.72rem] border px-2 rounded-sm border-neutral-800 py-1  text-white/70 hover:text-white hidden sm:block"
          >
            Contact
          </Link>
          <Link
            href="/sign-up"
            className="text-[0.72rem]  rounded-md px-3 py-1 bg-white text-black hidden sm:block"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
