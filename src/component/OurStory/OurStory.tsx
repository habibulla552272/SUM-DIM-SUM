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
            id:1,
            dig: '6,000+',
            name: 'Happy Guests',
            link: CiFaceSmile
        },
        {
            id:2,
            dig: '50+',
            name: 'Unique Dishes',
            link: BiSolidDish

        },
        {
            id:3,
            dig: '20+',
            name: 'Years Of Quality',
            link: FaAward             
        },
        {
            id:4,
            dig: '12',
            name: 'Monthly Events',
            link: FaCalendarCheck

        },

    ]
  return (
    <section className='my-20'>
        <div className='container mx-auto'>
            <div className='relative'>
                <div className='bg-[#F7E7E8] h-[390px] flex items-center md:w-10/12 '>
                    <div className='flex flex-col gap-5 w-[60%]'>
                        <h2 className='cinzel text-5xl leading-[136%] '>Our Story</h2>
                        <p className='text-sm font-normal leading-[150%]'>At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.</p>
                        <Button className='bg-red-700 w-[160px]'>Learn More →</Button>
                    </div>
                    <div className=' absolute inset-0 flex flex-col items-center top-[82px]'>

                            <Image className='w-[200px] h-[150px]' src={'/OurStoryTree.png'}  alt='Tree' width={478} height={286} />
                    </div>
                    <div className='relative w-[200px] h-[200px] md:w-[512px] md:h-[360px] md:absolute  md:right-[15px] md:top-[84px] top-[40px]'>
                        <Image className='w-[200px] h-[200px] md:w-[512px] md:h-[360px]' src={'/OurStoryRight.png'}  alt='Tree' layout='fill' />
                    </div>
                </div>
                <div>

                </div>

            </div>
            <div className='flex flex-wrap justify-center pt-10 md:mt-10'>
                {
                    
                    ourStory.map((item)=>(
                        <div className='flex flex-col gap-4 w-1/2 md:w-1/5 items-center' key={item.id}>
                            
                                <item.link  className='w-14 h-14 text-[#B31217]'/>
                                <h3 className='cinzel font-bold text-4xl leading-[150%]'>{item.dig}</h3>
                                <p className='text-[18px] font-medium text-[#0C0C0C]'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurStory
