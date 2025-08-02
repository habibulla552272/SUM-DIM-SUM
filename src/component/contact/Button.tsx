'use client'

import { useFormStatus } from 'react-dom'

const Buttons = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='bg-[#B31217] w-[220px] text-white py-2 rounded disabled:opacity-50'
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit →'}
    </button>
  )
}

export default Buttons
