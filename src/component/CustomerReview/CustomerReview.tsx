'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa6'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const CustomerReview = () => {
    const CustomerReviewData = [
        {
            id: 1,
            name: 'Rosario Rosa',
            text: `Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.`,
            avatar: '/Ellipse 83.png',
            rating: 5,
        },
        {
            id: 2,
            name: 'Rosario Rosa',
            text: `Sum Dim Sum is more than just a restaurant—it's an experience...`,
            avatar: '/Ellipse 83.png',
            rating: 5,
        },
        {
            id: 3,
            name: 'Rosario Rosa',
            text: `Sum Dim Sum is more than just a restaurant—it's an experience...`,
            avatar: '/Ellipse 83.png',
            rating: 5,
        },
        {
            id: 4,
            name: 'Rosario Rosa',
            text: `Sum Dim Sum is more than just a restaurant—it's an experience...`,
            avatar: '/Ellipse 83.png',
            rating: 5,
        }

    ]

    const [currentdata, setCurrentData] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentData(prev => (prev + 1) % CustomerReviewData.length)
        }, 6000)

        return () => clearInterval(timer)
    }, [])

    const rightArrowHandel = () => {
        console.log('hello');

        setCurrentData(prev => (prev + 1) % CustomerReviewData.length)
    }
    const leftArrowHandel = () => {

        setCurrentData(prev => (prev - 1 + CustomerReviewData.length) % CustomerReviewData.length)

    }

    if (CustomerReviewData.length === 0) return null;

    const data = CustomerReviewData[currentdata];

    return (
        <section>
            <div className='container mx-auto'>
                <div className=' text-center pb-8 '>
                    <h3 className='font-bold text-5xl cinzel leading-[136%]'>The Talk of the Town</h3>
                    <Image className=' mx-auto object-cover ' src={'/objects.png'} alt='Taste Tradition' width={117} height={48} />
                </div>
                <div className='relative'>
                    <Image className=' object-cover w-full h-[520px] aspect-auto opacity-90' objectFit='cover' src={'/DiveSumptuous.png'} alt='banner' width={1440} height={520} />

                    <div className=' absolute flex flex-col gap-5 text-[#F8F8FF] items-center justify-center opacity-80 bg-gradient-to-r from-[#031720] to-[#031720]  inset-0'>

                        <Image src={data.avatar} alt='client' width={100} height={100} />
                        <div className=' absolute inset-0 text-[#F8F8FF66]opacity-80  text-4xl  top-20 left-10 md:left-20'>
                            <FaQuoteLeft />

                        </div>
                        <p className="font-normal text-sm text-[#E6F6FC] md:text-[16px] w-[80%] text-center px-5 leading-[150%]">
                            {data.text}
                        </p>
                        <div className='flex gap-2'>
                            {
                                Array.from({ length: data.rating }).map((item, id) => {
                                    return (
                                        <div key={id}>
                                            <FaStar className='text-orange-400 text-2xl' />

                                        </div>
                                    )
                                })
                            }
                        </div>

                        

                    </div>
                    <div className=' absolute passions bottom-12 md:bottom-24  right-5 text-[40px] md:text-[80px] font-normal text-[#F8F8FF66] leading-1.5 '>
                        -{data.name}
                    </div>

                    {/* button  */}
                    <div>
                        <button onClick={leftArrowHandel} className={` absolute left-5 top-1/2 -translate-y-1/2 text-5xl text-white hover:rounded-3xl hover:bg-green-500 `}>
                            <IoIosArrowBack />
                        </button>
                        <button onClick={rightArrowHandel} className={`absolute right-5 top-1/2  -translate-y-1/2 text-5xl text-white hover:rounded-3xl hover:bg-green-500`}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div className=' absolute bottom-5  flex left-1/2 gap-2 pt-10 md:pt-14'>
                            {
                                CustomerReviewData.map((item, id) => (
                                    <div className={`w-2 h-2 rounded-full ${id == currentdata ? 'bg-white' : 'bg-gray-400'}`} key={id} >

                                    </div>
                                ))
                            }
                    </div>


                </div>
            </div>
        </section>
    )
}

export default CustomerReview
