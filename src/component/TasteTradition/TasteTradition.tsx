import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const TasteTradition = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className=' text-center pb-8 '>
                    <h3 className='font-bold text-5xl cinzel leading-[136%]'>Taste the Tradition</h3>
                    <Image className=' mx-auto object-cover '  src={'/objects.png'} alt='Taste Tradition' width={117} height={48} />
                </div>
                <div className='flex flex-col-reverse md:flex-col gap-5'>
                    <div className='flex gap-3 flex-wrap justify-center md:flex-nowrap items-center'>
                        <div className='relative'>
                            <Image className=' w-[800px] h-[410px]  object-cover' src={'/TasteTradition1.png'} alt='traditionl-Img' width={800} height={410} />
                            <div className=' absolute px-6 py-3  h-[168px] top-[60%] max-w-[800px]  text-[#F8F8FF]  inset-0 opacity-70 bg-gradient-to-r from-[#031720] to-[#031720] '>
                                <h3 className='font-semibold text-[18px] leading-[150%] '>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                                <div className='flex justify-between pt-3'>
                                    <p className='text-[16px] font-normal align-middle w-[65%] md:w-1/2'>
                                        A traditional dim sum favorite featuring steamed dumplings
                                        filled with succulent pork, mushrooms, and topped with
                                        wolfberries for a hint of sweetness.
                                    </p>
                                    <Button className='border-1 '>View Details  →</Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={'/TasteTradition2.png'} alt='tradition' width={448} height={410} />
                        </div>
                    </div>




                    <div className='flex gap-3 flex-wrap justify-center md:flex-nowrap items-center'>
                        <div>
                            <Image src={'/TasteTradition3.png'} alt='tradition' width={448} height={410} />
                        </div>
                        <div className='relative'>
                            <Image className=' w-[800px] h-[410px]  object-cover' src={'/TasteTradition4.png'} alt='traditionl-Img' width={800} height={410} />
                            
                        </div>

                    </div>








                </div>
            </div>
        </section>
    )
}

export default TasteTradition
