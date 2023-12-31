import React from 'react'
import { Socials } from "@/constants";
import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Afif Zahid
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">

          <Link href="https://github.com/afif-zahid" className='flex flex-row'>
            <Image
              src="/gitwhite.png"
              alt="instagram"
              width={24}
              height={24}

            />

          </Link>
          <Link href="https://www.linkedin.com/in/afif-zahid-aa317b22a/" className='flex flex-row'>
            <Image
              src="/LinkedIn.jpg"
              alt="linkedin"
              width={24}
              height={24}
            />

          </Link>
          <Link href="https://www.instagram.com/_afif_zahid_1696_" className='flex flex-row'>
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar