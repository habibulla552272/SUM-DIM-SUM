import Image from 'next/image'
import React from 'react'
import BannerImage from '../../../public/Banner.png'
import Navbar from '../Navbar/Navbar'




const Banner = () => {
    return (
        <section className='bg-black text-white relative'>
            <Image className=' object-cover w-full h-[900px] aspect-auto' objectFit='cover' src={BannerImage} alt='Banner Image' width={1420} height={900} />
            <div className=''>
                <div className=' absolute z-50 inset-0'>

                    <Navbar />
                </div>
                <div className='absolute w-full h-full z-10 inset-0 flex justify-center items-center'>
                    <div className="container text-center">
                        <h2 className={`text-2xl md:text-5xl px-2 lg:text-[64px] font-bold leading-[138%] cinzel mb-1`}>Welcome to Sum Dim Sum – Where  Every Bite Tells a Story</h2>
                        <p className='w-[90%] md:w-[65%] mx-auto mb-[69px] text-base leading-[150%]'>At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!</p>
                        <button className='bg-[#B31217] rounded-[8px] py-[10px] px-[20px] '>Explore Our Menu →</button>
                    </div>
                </div>
                <div className='  absolute md:bottom-14 bottom-8 right-10  '>
                    <Image src={'/checkProfile.png'} alt='check our Profile' width={174} height={174} />
                </div>
            </div>
        </section>
    )
}

export default Banner
