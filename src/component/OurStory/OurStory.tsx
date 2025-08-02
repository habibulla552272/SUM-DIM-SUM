import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { CiFaceSmile } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";




const OurStory = () => {
    const ourStory = [
        {
            id: 1,
            dig: '6,000+',
            name: 'Happy Guests',
            link: CiFaceSmile
        },
        {
            id: 2,
            dig: '50+',
            name: 'Unique Dishes',
            link: BiSolidDish

        },
        {
            id: 3,
            dig: '20+',
            name: 'Years Of Quality',
            link: FaAward
        },
        {
            id: 4,
            dig: '12',
            name: 'Monthly Events',
            link: FaCalendarCheck

        },

    ]
    return (
        <section className='my-20'>
            <div className='container mx-auto'>
                <div className='relative'>
                    <div className='bg-[#F7E7E8] h-[390px] flex items-center flex-col gap-5 lg:gap-0 py-5 lg:py-0 lg:flex-row lg:w-[70%] px-6'>
                        <div className='flex flex-col gap-5 lg:w-[80%]'>
                            <h2 className='cinzel md:text-5xl text-2xl leading-[136%] '>Our Story</h2>
                            <p className='text-xs md:text-sm font-normal leading-[150%]'>
                                At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes
                                with wholehearted dedication and passion. Our chefs use traditional techniques
                                to craft our dishes, ensuring that they are of the highest quality. Come and experience
                                our fresh and flavorful cuisine.
                            </p>
                            <Button className='bg-red-700 w-[160px]'>Learn More →</Button>
                        </div>
                        <div className=' absolute inset-0 flex flex-col items-center top-[82px]'>

                            <Image className='w-[200px] h-[150px]' src={'/OurStoryTree.png'} alt='Tree' width={478} height={286} />
                        </div>
                        <div className='relative w-full h-[200px] lg:w-[512px] lg:h-[360px] lg:absolute  lg:right-[40px] lg:top-[84px]  '>
                            <p className=' hidden lg:block absolute md:bottom-30 bottom-10  lg:left-20 rounded-2xl  lg:w-[452px] lg:h-[280px] border-2 border-orange-500'>
                            </p>
                            <Image className='w-[200px] h-[200px] lg:w-[512px] lg:h-[360px]' src={'/OurStoryRight.png'} alt='Tree' layout='fill' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center pt-10 md:mt-10'>
                    {

                        ourStory.map((item) => (
                            <div className='flex flex-col gap-2 py-5 md:py-0 w-1/2 md:w-1/5 items-center' key={item.id}>

                                <item.link className='w-10 h-10 md:w-14 md:h-14 text-[#B31217]' />
                                <h3 className='cinzel font-bold text-xl md:text-4xl leading-[150%]'>{item.dig}</h3>
                                <p className='text-xs md:text-sm   font-medium text-[#0C0C0C]'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurStory
