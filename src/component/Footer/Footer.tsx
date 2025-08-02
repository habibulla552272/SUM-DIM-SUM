import Image from 'next/image'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import { MdLocalPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <section className='mt-[120px]'>
      <div className='container'>

        <div className='flex flex-col md:flex-row md:justify-between gap-10 border-y-2 py-10 border-red-400 pb-[60px] '>
          <div className='mx-auto md:mx-0'>
            <h3 className='font-bold text-2xl cinzel'>Contact</h3>
            <div className='flex flex-col gap-5 text-[16px] mt-5'>
              <div className='flex gap-2 items-center '>
                <MdLocalPhone className='text-lg ' />
                <span className='font-normal'>1234567890</span>
              </div>
              <div className='flex gap-2 items-center  '>
                <FaLocationDot className='text-lg ' />
                <span className='font-normal '>Your Address Here</span>
              </div>

              <div className='flex gap-2 items-center '>
                <CiMail className='text-lg ' />
                <span className='font-normal  '>example@example.com</span>
              </div>

            </div>
          </div>
          <div className='mx-auto md:mx-0'>
            <Image src={'/Vector.png'} alt='fotter logo' width={296} height={100} />
            <div className='flex justify-center mt-[40px] gap-4 '>
              <a className='hover:text-green-300 w-6 h-6' href="#"><FaFacebookF /></a>
              <a className='hover:text-green-300 w-6 h-6' href="3"><FaInstagram /></a>
              <a className='hover:text-green-300 w-6 h-6' href="#"><FaLinkedinIn /></a>
              <a className='hover:text-green-300 w-6 h-6' href="#"><FaXTwitter /></a>
            </div>
          </div>
          <div className='mx-auto md:mx-0 '>
            <ul className='flex flex-col gap-[19px] md:items-end justify-end text-sm md:text-[18px]'>
              <li className=' hover:text-green-400'>
                <a href="#">Home</a>
              </li>
              <li className=' hover:text-green-400'>
                <a href="#">About Us</a>
              </li>
              <li className=' hover:text-green-400'>
                <a href="#">
                Privacy Policy
                </a>
              </li>
              <li className=' hover:text-green-400'>
                <a href="#">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>



        <div className='text-center py-5 '>
          <p className='text-xs font-normal leading-[150%]'>Copyright 2024 &copy;SIM SUM SIM</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
