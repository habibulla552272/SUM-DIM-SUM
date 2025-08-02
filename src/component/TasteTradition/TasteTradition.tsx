'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { TbSquareDot } from "react-icons/tb";

const TasteTradition = () => {
    const tastTraditionData = [
        {
            id: 1,
            text: `A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.`,
            img: '/TasteTradition1.png',
            img2: '/TasteTradition8.jpeg',
            img3: '/TasteTradition3.png',
            img4: '/TasteTradition4.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖'
        },
        {
            id: 2,
            text: `A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.`,
            img: '/TasteTradition1.png',
            img2: '/TasteTradition2.png',
            img3: '/TasteTradition7.png',
            img4: '/TasteTradition4.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖'
        },
        {
            id: 3,
            text: `A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.`,
            img: '/TasteTradition1.png',
            img2: '/TasteTradition2.png',
            img3: '/TasteTradition3.png',
            img4: '/TasteTradition6.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖'
        },
        {
            id: 4,
            text: `A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.`,
            img: '/TasteTradition1.png',
            img2: '/TasteTradition5.png',
            img3: '/TasteTradition3.png',
            img4: '/TasteTradition4.png',
            title: 'Wolfberry with Mushroom Siew Mai 枸杞子烧卖'
        }
    ]
    const [currentItem, setCurrentItem] = React.useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentItem((prev) => (prev + 1) % tastTraditionData.length)
        }, 5000);
        return () => clearInterval(timer)
    }, [tastTraditionData.length])

    const data = tastTraditionData[currentItem]
    return (
        <section>
            <div className='container mx-auto'>
                <div className=' text-center pb-8 '>
                    <h3 className='font-bold text-5xl cinzel leading-[136%]'>Taste the Tradition</h3>
                    <Image className=' mx-auto object-cover ' src={'/objects.png'} alt='Taste Tradition' width={117} height={48} />
                </div>
                <div className='flex flex-col-reverse md:flex-col gap-5'>
                    <div className='flex gap-3 flex-wrap justify-center md:flex-nowrap items-center'>
                        <div className='relative group overflow-hidden'>
                            <Image className=' w-[800px] h-[410px]  object-cover' src={data.img} alt='traditionl-Img' width={800} height={410} />
                            <div className=' absolute  px-6 py-3 -bottom-64 h-[168px] group-hover:bottom-0 w-full  text-[#F8F8FF] ease-in-out duration-500   opacity-70 bg-gradient-to-r from-[#031720] to-[#031720] '>
                                <h3 className='font-semibold text-sm md:text-[18px] leading-[150%] '>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                <div className='flex justify-between pt-3'>
                                    <p className='text-xs md:text-[16px] font-normal align-middle w-[70%] md:max-w-10/12'>
                                        A traditional dim sum favorite featuring steamed dumplings
                                        filled with succulent pork, mushrooms, and topped with
                                        wolfberries for a hint of sweetness.
                                    </p>
                                    <Button className='border-1 '>View Details  →</Button>
                                </div>
                            </div>
                        </div>
                        <div className='relative group overflow-hidden'>
                            <Image src={data.img2} alt='tradition' objectFit='cover' width={448} height={410} />
                            <div className=' absolute  px-6 py-3 -bottom-64 h-[168px] group-hover:bottom-0 w-full  text-[#F8F8FF] ease-in-out duration-500   opacity-70 bg-gradient-to-r from-[#031720] to-[#031720] '>
                                <h3 className='font-semibold text-sm md:text-[18px] leading-[150%] '>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                <div className='flex justify-between pt-3'>
                                    <p className='text-xs md:text-[16px] font-normal align-middle w-[80%] md:max-w-10/12'>
                                        A traditional dim sum favorite featuring steamed dumplings
                                        filled with succulent pork, mushrooms, and topped with
                                        wolfberries for a hint of sweetness.
                                    </p>
                                    <Button className='border-1 flex items-end'>View Details  →</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-3 flex-wrap justify-center md:flex-nowrap items-center'>
                        <div className='relative group overflow-hidden'>
                            <Image src={data.img3} alt='tradition' width={448} height={410} />
                            <div className=' absolute  px-6 py-3 -bottom-64 h-[168px] group-hover:bottom-0 w-full  text-[#F8F8FF] ease-in-out duration-500   opacity-70 bg-gradient-to-r from-[#031720] to-[#031720] '>
                                <h3 className='font-semibold text-sm md:text-[18px] leading-[150%] '>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                <div className='flex justify-between pt-3'>
                                    <p className='text-xs md:text-[16px] font-normal align-middle w-[70%] md:w-10/12'>
                                        A traditional dim sum favorite featuring steamed dumplings
                                        filled with succulent pork, mushrooms, and topped with
                                        wolfberries for a hint of sweetness.
                                    </p>
                                    <Button className='border-1 flex items-end'>View Details  →</Button>
                                </div>
                            </div>
                        </div>
                        <div className='relative group overflow-hidden'>
                            <Image className=' w-[800px] h-[410px]  object-cover' src={data.img4} alt='traditionl-Img' width={800} height={410} />
                            <div className=' absolute  px-6 py-3 -bottom-64 h-[168px] group-hover:bottom-0 w-full  text-[#F8F8FF] ease-in-out duration-500   opacity-70 bg-gradient-to-r from-[#031720] to-[#031720] '>
                                <h3 className='font-semibold text-sm md:text-[18px] leading-[150%] '>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                <div className='flex justify-between pt-3'>
                                    <p className='text-xs md:text-[16px] font-normal align-middle w-[70%] md:max-w-10/12'>
                                        A traditional dim sum favorite featuring steamed dumplings
                                        filled with succulent pork, mushrooms, and topped with
                                        wolfberries for a hint of sweetness.
                                    </p>
                                    <Button className='border-1 flex items-end'>View Details  →</Button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex justify-center gap-3 py-5'>
                    {
                        tastTraditionData.map((item, id) => (
                            <div key={id} className={`w-6 h-6 rounded-full ${id == currentItem ? 'text-[#B31217] border-1 p-1' : 'text-[#E7B6B7]'}`}>
                                <TbSquareDot />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TasteTradition
