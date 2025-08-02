'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
    const [showmenu, setShowMenu] = useState(false)

    const handelMenu = () => {
        setShowMenu(!showmenu);
    }

    return (
        <nav className='py-6'>
            <div className="container">
                <div className="flex justify-between lg: items-center">
                    <div className='text-2xl font-bold'>
                        <Image src={'/Logo.png'} alt='logo' width={100} height={48} />
                    </div>
                    <div onClick={handelMenu} className='lg:hidden text-3xl hover:text-green-300 bg-transparent'>
                        <TiThMenuOutline />

                    </div>
                    <div className={`absolute lg:static bg-black lg:bg-transparent w-full h-full top-0 lg:w-fit ${showmenu ? 'left-0 fixed top-0 ease-in-out duration-500' : '-left-[100%] ease-in-out duration-500'}`}>
                        <div onClick={() => setShowMenu(false)} className='lg:hidden flex justify-end text-4xl pr-5 pt-5'>
                            <IoMdClose />
                        </div>
                        <ul className='flex flex-col items-center lg:flex-row gap-8 lg:gap-[40px] text-xs md:text-[16px]'>
                            <li className='font-bold'>

                                <a href="#" className="hover:text-red-500">Home</a>
                            </li>
                            <li className=' opacity-80'>

                                <a href="#" className="hover:text-red-500">About</a>
                            </li>
                            <li className=' opacity-80'>
                                <a href="#" className="hover:text-red-500">Menu & Locations</a>

                            </li>
                            <li className=' opacity-80'>
                                <a href="#" className="hover:text-red-500">Reservation</a>

                            </li>
                            <li className=' opacity-80'>
                                <a href="#" className="hover:text-red-500">Merchandise</a>

                            </li>
                            <li className=' opacity-80'>
                                <a href="#" className="hover:text-red-500">Career</a>

                            </li>
                            <li className=' opacity-80'>

                                <a href="#" className="hover:text-red-500">Contact</a>
                            </li>
                        </ul>

                    </div>
                    <div>
                        <Button className='hover:bg-[#F7E7E8] hover:text-black'>
                            Book a Table
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
