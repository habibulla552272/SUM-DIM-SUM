'use client'

import Image from 'next/image'
import { useActionState } from 'react'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { addContactMessage, FormState } from '@/Actions/ContactAction'

const initialState: FormState = { success: false }
const ContactForm = () => {
  const [state, formAction] = useActionState(addContactMessage, initialState)
  const [showSuccess, setShowSuccess] = useState(false)
  useEffect(() => {
    if (state.success) {
      setShowSuccess(true)
      const timeout = setTimeout(() => setShowSuccess(false), 3000)
      return () => clearTimeout(timeout)
    }
  }, [state.success])

  return (
    <div className='relative text-[#F8F8FF]'>
      <Image
        className='h-[546px] md:h-[746px] w-[826px] object-cover'
        src='/FormImg.png'
        alt='formImg'
        width={826}
        height={746}
      />
      <div className='absolute flex flex-col justify-center items-start inset-0 text-white'>
        <h3 className='font-semibold text-2xl mb-2 leading-[150%] w-[85%] mx-auto'>Just Say Hi !</h3>
        <p className='font-normal text-xs md:text-[16px] text-[#F8F8FF] mb-[60px] leading-[150%] w-[85%] mx-auto'>
          Tell us more about you and we’ll contact you soon.
        </p>

        <form action={formAction} className='flex flex-col gap-8 w-[85%] mx-auto'>
          <input
            className='outline-none border-b-2 pb-1 w-full'
            type='text'
            name='name'
            required
            placeholder='Name'
          />
          <div className='flex flex-col md:flex-row gap-5'>
            <input
              className='outline-none border-b-2 pb-1 w-full'
              type='email'
              name='email'
              required
              placeholder='Email'
            />
            <input
              className='outline-none border-b-2 pb-1 w-full'
              type='tel'
              name='phone'
              required
              placeholder='Phone Number'
            />
          </div>
          <div>
            <textarea
              className='w-full outline-none border-b-2'
              name='message'
              required
              rows={1}
              placeholder='Type your message here'
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <Button type='submit' className='bg-[#B31217] w-[220px]'>
              Submit →
            </Button>
          </div>

          
          {showSuccess && (
            <p className='text-green-500 text-sm text-center'>Message sent successfully!</p>
          )}
          {state.error && (
            <p className='text-red-500 text-sm text-center'>{state.error}</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
