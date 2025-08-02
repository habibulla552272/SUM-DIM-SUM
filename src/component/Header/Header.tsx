import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



const Header = () => {
  return (
    <section className='bg-black py-3 px-6 text-[#F8F8FF] '>
      <div className='container mx-auto   text-sx flex justify-center flex-wrap gap-6 md:gap-0 md:justify-between items-center'>
        <div className='flex gap-6 items-center flex-wrap justify-center'>

          <div className='flex gap-2 items-center '>
            <FaLocationDot className='text-lg '/>
            <span className='font-normal text-xs'>Your Address Here</span>
          </div>
          <div className='flex gap-2 items-center '>
            <MdLocalPhone className='text-lg ' />
            <span className='font-light poppins text-xs'>1234567890</span>
          </div>
          <div className='flex gap-2 items-center '>
            <CiMail className='text-lg ' />
            <span className='font-normal  text-xs '>example@example.com</span>
          </div>

        </div>
        <div className='flex gap-4 text-lg'>
          <a className='hover:text-green-300' href="#"><FaFacebookF /></a>
          <a className='hover:text-green-300' href="3"><FaInstagram /></a>
          <a className='hover:text-green-300' href="#"><FaLinkedinIn /></a>
          <a className='hover:text-green-300' href="#"><FaXTwitter /></a>
        </div>
      </div>
    </section>
  )
}

export default Header
