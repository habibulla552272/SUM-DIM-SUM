import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DiveSumptuous = () => {
    return (
        <section  className='my-14'>
            <div className='container mx-auto '>
                <div className='relative'>
                    <Image className=' object-cover w-full h-[600px] aspect-auto opacity-90' objectFit='cover' src={'/DiveSumptuous.png'} alt='banner' width={1440} height={450} />

                    <div className=' absolute flex flex-col gap-5 text-[#F8F8FF] items-center justify-center opacity-80 bg-gradient-to-r from-[#031720] to-[#031720]  inset-0'>

                        <h2 className="cinzel text-5xl font-bold w-[80%] text-center">Dive Into the World of Sumptuous
                            Sum Dim Sum</h2>


                        <p className="text-sm text-[#E6F6FC] md:text-[15px] w-[80%] text-center px-5 leading-[150%]">
                            Embark on a culinary journey where every bite tells a story of tradition and passion. At Sum Dim Sum, we bring you an authentic Asian dining experience with handcrafted dishes, vibrant flavors, and the warmth of our culture. From delicate dumplings to savory
                            bites, our menu is a celebration of taste and artistry. Come, savor the joy of good food, and let
                            every dish transport you to the heart of dim sum perfection.
                        </p>
                        <Button className='bg-[#B31217]' >Learn More →</Button>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default DiveSumptuous
