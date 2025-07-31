import Image from 'next/image'
import React from 'react'
import BannerImage from '../../../public/Banner.png'
import Navbar from '../Navbar/Navbar'
import { Button } from '@/components/ui/button'



const Banner = () => {
    return (
        <section className='bg-black text-white relative'>
            <Image className=' object-cover w-full h-[900px] aspect-auto' objectFit='cover'  src={BannerImage} alt='Banner Image' width={1420} height={900} />
            <div className=''>
                <div className=' absolute z-50 inset-0'>

                <Navbar />
                </div>
                <div className=' absolute flex flex-col gap-[60px] container mx-auto items-center justify-center inset-0 text-center'>
                    <h2 className={`text-4xl md:text-6xl font-bold leading-tight cinzel `}>Welcome to Sum Dim Sum – Where Every Bite Tells a Story</h2>
                    <p>At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!</p>
                    <Button className='bg-[#B31217]'>Explore Our Menu →</Button>
                </div>
                <div className=' absolute bottom-14 right-10 '>
                    <Image src={'/checkProfile.png'} alt='check our Profile' width={174} height={174} />
                </div>
            </div>
        </section>
    )
}

export default Banner
