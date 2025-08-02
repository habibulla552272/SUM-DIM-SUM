import Image from 'next/image'
import React from 'react'

const DiveSumptuous = () => {
    return (
        <section className='my-[120px]'>
            <div className=''>
                <div className='relative'>
                    <Image className=' object-cover w-full h-[400px] md:h-[600px] aspect-auto' objectFit='cover' src={'/DiveSumptuous.png'} alt='banner' width={1440} height={450} />
                    <div className="absolute  inset-0 w-full h-full  text-[#F8F8FF] bg-black/40 flex items-center backdrop-blur-[10px] shadow-lg">
                        <div className='container flex flex-col items-center my-auto'>
                            <h2 className="cinzel text-2xl md:text-[48px]  font-bold leading-[138%] w-[80%] text-center mb-[20px]">Dive Into the World of Sumptuous
                                Sum Dim Sum</h2>
                            <p className="text-sm text-[#E6F6FC] md:text-[16px] w-[98%] md:w-[80%] mx-auto font-normal md:px-0 px-5 leading-[150%] text-center mb-[40px]">
                                Embark on a culinary journey where every bite tells a story of tradition and passion. At Sum Dim Sum, we bring you an authentic Asian dining experience with handcrafted dishes, vibrant flavors, and the warmth of our culture. From delicate dumplings to savory
                                bites, our menu is a celebration of taste and artistry. Come, savor the joy of good food, and let
                                every dish transport you to the heart of dim sum perfection.
                            </p>
                            <button className='bg-[#B31217] rounded-[8px] py-[10px] px-[20px] '>Explore More →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiveSumptuous
