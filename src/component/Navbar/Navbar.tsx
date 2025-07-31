'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
    const [showmenu, setShowMenu] = useState(false)

    const handelMenu =()=>{
        setShowMenu(!showmenu);
    }

    return (
        <div className='container mx-auto py-8 '>
            <nav className='flex justify-between'>
                <div className='text-2xl font-bold'>
                    <Image src={'/logo.png'} alt='logo' width={100} height={48} />
                </div>
                <div onClick={handelMenu} className='md:hidden text-3xl hover:text-green-300 bg-transparent'>
                    <TiThMenuOutline />

                </div>
                <div className={`absolute md:static bg-black md:bg-transparent w-full h-[100%] top-0 md:w-fit ${showmenu ? 'left-0  ease-in-out duration-500': '-left-[100%] ease-in-out duration-500'}`}>
                    <div onClick={()=>setShowMenu(false)} className='md:hidden flex justify-end text-4xl pr-5 pt-5'>
                        <IoMdClose />
                    </div>
                    <ul className='flex flex-col items-center md:flex-row gap-8 md:gap-5 '>
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
                    <Button className='hover:bg-green-400'>
                        Book a Table
                    </Button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
