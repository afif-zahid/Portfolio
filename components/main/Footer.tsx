import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
const Footer = () => {
    return (
        <div className="w-full h-full shadow-lg background-transparent z-50 px-10 mb-10" id='about-me'>
            <div className="w-full h-full flex flex-col items-center justify-between m-auto ">
                <div className='w-full h-full flex flex-col items-center justify-between mb-8 '>
                    <p className='text-gray-100 text-[28px] '>CONTACT ME</p>
                    </div>
                <div className="md-500px w-[580px] flex flex-row justify-between mb-8">

                    <Link href="https://github.com/afif-zahid" className='flex flex-row'>
                        <Image
                            src="/gitwhite.png"
                            alt="instagram"
                            width={24}
                            height={24}
                           
                        />
                        <p className='text-gray-200 px-2'> Github</p>
                    </Link>
                    <Link href="https://www.linkedin.com/in/afif-zahid-aa317b22a/" className='flex flex-row'>
                        <Image
                            src="/LinkedIn.jpg"
                            alt="linkedin"
                            width={24}
                            height={24}
                        />
                        <p className='text-gray-200 px-2'> LinkedIn</p>
                    </Link>
                    <Link href="https://www.instagram.com/_afif_zahid_1696_" className='flex flex-row'>
                        <Image
                            src="/instagram.svg"
                            alt="instagram"
                            width={24}
                            height={24}
                        />
                        <p className='text-gray-200 px-2'> Instagram</p>
                    </Link>
                </div>
                    <div className='w-full h-full flex flex-col items-center justify-between mb-8 '>
                    <a href="mailto:zahidafif2002@gmail.com" className='text-gray-200 px-2 text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                        Let's Chat
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Footer