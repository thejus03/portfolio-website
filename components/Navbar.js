import Link from 'next/link'
import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
    <div className="w-full h-[6dvh]  top-0 z-50 flex justify-center pt-6 font-mono text-white">
      <div className="hidden sm:flex flex-row w-[70vw] justify-around font-semibold text-lg">
        <Link href="/">
          <div className="px-1 hover:bg-white hover:text-black hover:font-bold cursor-pointer">HOME</div>
        </Link>
        <Link href="/education">
          <div className="hover:bg-white hover:text-black px-1 hover:font-bold cursor-pointer">EDUCATION</div>
        </Link>
        <Link href="/work">
          <div className="hover:bg-white hover:text-black px-1 hover:font-bold cursor-pointer">WORK</div>
        </Link>
        <Link href="/projects">
          <div className="hover:bg-white hover:text-black px-1 hover:font-bold cursor-pointer">PROJECTS</div>
        </Link>
      </div>

      {/* Small Screen Hamburger */}
      <div className="sm:hidden flex justify-items-start w-full ml-5">
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bg-customBlack top-[8.5vh] left-5 w-[150px]  flex flex-col  sm:hidden ">
          <Link href="/">
            <div className="py-2 hover:bg-white hover:text-black hover:font-bold cursor-pointer w-full pl-6 font-extrabold">HOME</div>
          </Link>
          <Link href="/education">
            <div className="py-2 hover:bg-white hover:text-black hover:font-bold cursor-pointer w-full pl-6 font-extrabold">EDUCATION</div>
          </Link>
          <Link href="/work">
            <div className="py-2 hover:bg-white hover:text-black hover:font-bold cursor-pointer w-full pl-6 font-extrabold">WORK</div>
          </Link>
          <Link href="/projects">
            <div className="py-2 hover:bg-white hover:text-black hover:font-bold cursor-pointer w-full pl-6 font-extrabold">PROJECTS</div>
          </Link>
        </div>
      )}
    </div>
    )
    }

export default Navbar