"use server"

import { z } from "zod"
import { Resend } from "resend"
import { ContactFormEmail } from "@/components/emails/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.TO_EMAIL

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  address: z.string().min(5, "Please enter a valid address."),
})

export interface FormState {
  success: boolean
  message: string
}

export async function sendContactEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!process.env.RESEND_API_KEY || !toEmail) {
    console.error("Missing RESEND_API_KEY or TO_EMAIL environment variables.")
    return {
      success: false,
      message: "Server configuration error. Please contact support.",
    }
  }

  const validatedFields = contactSchema.safeParse({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
  })

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map((e) => e.message).join(", ")
    return {
      success: false,
      message: `Invalid form data: ${errorMessages}`,
    }
  }

  const { fullName, phone, address } = validatedFields.data

  try {
    const { data, error } = await resend.emails.send({
      from: "Summit Roofing Lead <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Website Lead: ${fullName}`,
      reply_to: "no-reply@resend.dev",
      react: <ContactFormEmail fullName={fullName} phone={phone} address={address} />,
    })

    if (error) {
      console.error("Resend API Error:", error)
      return { success: false, message: "Failed to send email. Please try again." }
    }

    return {
      success: true,
      message: "Your quote request has been sent successfully!",
    }
  } catch (error) {
    console.error("Caught an exception while sending email:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
