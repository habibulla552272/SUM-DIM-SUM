'use server'
import { contactMessageCreate } from '@/Api/ApiPost'
export type FormState = {
  success: boolean
  error?: string
}
export async function addContactMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const userData = {
    name: formData.get("name")?.toString() || '',
    email: formData.get("email")?.toString() || '',
    phoneNumber: formData.get("phone")?.toString() || '',
    message: formData.get("message")?.toString() || '',
  }

  try {
    await contactMessageCreate(userData)
    return { success: true }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again."
    }
  }
}
