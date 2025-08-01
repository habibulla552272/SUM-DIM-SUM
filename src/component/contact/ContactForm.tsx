import { contactMessageCreate } from '@/Api/ApiPost'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


const ContactForm = () => {

    async function addContactMessage(formData: FormData) {
        'use server'
        const userData = {
            name: formData.get("name")?.toString() || '',
            email: formData.get("email")?.toString() || '',
            phoneNumber: formData.get("phone")?.toString() || '',
            message: formData.get("message")?.toString() || '',
        };

        try {
            await contactMessageCreate(userData)

        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className='relative text-[#F8F8FF]'>
            <Image className=' object-cover' objectFit='cover' src={'/FormImg.png'} alt='formImg' width={826} height={746} />
            <div className=' absolute flex flex-col justify-center items-center inset-0 text-[white]'>
                <h3 className='font-semibold text-2xl'>Just Say Hi !</h3>
                <p className='font-normal text-[16px] text-[#F8F8FF] py-5'>Tell us more about you and we’ll contact you soon.</p>
                <form action={addContactMessage} className='flex flex-col gap-8 pt-6'>
                    <input className='outline-none border-b-2 pb-1 w-full' type="text" name="name" required id="name" placeholder='Name' />
                    <div className='flex flex-col md:flex-row gap-5'>
                        <input className='outline-none border-b-2 pb-1 w-full' type="mail" name="email" required id="" placeholder='Email' />
                        <input className='outline-none border-b-2 pb-1 w-full' type="tel" name="phone" required id="" placeholder='Phone Number' />
                    </div>
                    <div className=''>
                        <textarea className='w-full outline-none border-b-2' name="message" required id="" rows={1} placeholder='Type your message here'></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <Button type='submit' className='bg-[#B31217] w-[220px]'>
                            Submit →
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
