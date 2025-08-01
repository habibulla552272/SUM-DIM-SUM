import Image from 'next/image'
import React from 'react'
import ReservetableFrom from './ReservetableFrom'

const ReserveTable = () => {
    return (
        <section className='my-14'>
            <div className='container'>
                <div className='flex flex-col md:flex-row gap-10 items-center'>
                    <div className='relative w-full md:w-1/2 '>
                        <p className='z-[-1] absolute md:bottom-10 bottom-20  md:left-2 left-4 rounded-2xl  w-[350px] h-[360px] md:w-[500px] md:h-[500px] border-2 border-orange-500'>

                        </p>
                        <div className='z-30 pl-10'>

                            <Image className='' src={'/Reservetable.png'} alt='reserve' width={535} height={514} />
                        </div>

                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-3xl font-bold  cinzel'>Reserve Your Table for an Authentic
                            Sum Dim Sum Experience
                        </h2>
                        <p className='text-sm font-normal py-5'>
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
