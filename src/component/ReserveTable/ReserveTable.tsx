import Image from 'next/image'
import React from 'react'
import ReservetableFrom from './ReservetableForm'

const ReserveTable = () => {
    return (
        <section className='my-[120px]'>
            <div className='container'>
                <div className='flex flex-col md:flex-row gap-10 items-center'>
                    <div className='relative w-full md:w-1/2 '>
                        <p className='z-[-1] hidden xl:block absolute md:bottom-10   lg:left-2 rounded-2xl  lg:w-[500px] lg:h-[500px] border-2 border-orange-500'>
                        </p>
                        <div className='z-30 md:pl-10 w-[95%] mx-auto'>
                            <Image className='mx-auto' src={'/Reservetable.png'} alt='reserve' width={535} height={514} />
                        </div>

                    </div>
                    <div className='w-[90%] mx-auto md:w-1/2'>
                        <h2 className='text-2xl md:text-3xl font-bold  cinzel mb-[20px] leading-[136%]'>Reserve Your Table for an Authentic
                            Sum Dim Sum Experience
                        </h2>
                        <p className='text-sm md:text-[16px] font-normal mb-[35px] md:mb-[60px]'>
                            Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere. Whether it’s a special occasion,
                            a family gathering, or a cozy dinner for two, our handcrafted dishes and impeccable service make every moment memorable. Reserve your table
                            now and let us take you on a culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable dining experience awaits!
                        </p>
                        <ReservetableFrom />
                    </div>




                </div>
            </div>
        </section>
    )
}

export default ReserveTable
