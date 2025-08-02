import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const ContactPage = () => {
    return (
        <section className='my-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row md:gap-0 gap-5'>
                    <div className='w-full md:w-[60%]'>
                        <ContactForm />
                    </div>
                    <div className='relative bg-[#F7E7E8] w-full md:w-[40%] my-62  md:my-0'>
                        <Image className='my-auto mx-auto object-center opacity-30  absolute flex flex-col items-center justify-center inset-0' src={'/formImg2.png'} alt='formIma2' width={464} height={485} />
                        <div className=' absolute flex flex-col items-start justify-center  inset-0 pl-8'>
                            <h3 className='font-semibold text-2xl leading-[150%] text-[#0C0C0C] mb-5'>Contact Information</h3>
                            <p className='flex flex-col gap-3 text-[16px] leading-[150%] text-[#0C0C0C] pb-5'>
                                <span>Maui, Hawaii, USA</span>
                                <span className='poppins'>Call us: +1234567890</span>
                                <span className='poppins'>Whatsapp: +1234567890</span>
                            </p>
                            <h3 className='font-semibold text-2xl leading-[150%] text-[#0C0C0C] mt-[60px] mb-[20px]'>Follow Us</h3>
                            <div className='flex gap-4 text-lg'>
                                <a className='hover:text-green-300' href="#"><FaFacebookF /></a>
                                <a className='hover:text-green-300' href="3"><FaInstagram /></a>
                                <a className='hover:text-green-300' href="#"><FaLinkedinIn /></a>

                            </div>
                        </div>
                        <p className='cinzel text-2xl absolute -bottom-20 md:bottom-5 right-5'>Contact Us</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactPage
