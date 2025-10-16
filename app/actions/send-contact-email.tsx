"use server"

import { Resend } from "resend"
import { z } from "zod"
import ContactFormEmail from "@/components/emails/contact-form-email"

const resendApiKey = process.env.RESEND_API_KEY
const toEmail = process.env.TO_EMAIL

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  address: z.string().min(5, "Please enter a valid address."),
  street: z.string().min(1, "Street address is required."),
  city: z.string().min(1, "City is required."),
  state: z.string().min(2, "State is required."),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, "Valid zip code is required."),
})

export async function sendContactEmail(prevState: any, formData: FormData) {
  if (!resendApiKey) {
    console.error("RESEND_API_KEY environment variable is not set.")
    return { success: false, message: "Server configuration error. Please try again later." }
  }
  if (!toEmail) {
    console.error("TO_EMAIL environment variable is not set.")
    return { success: false, message: "Server configuration error. Please try again later." }
  }

  const resend = new Resend(resendApiKey)

  const validatedFields = contactFormSchema.safeParse({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    street: formData.get("street"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
  })

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors
    if (errors.street || errors.city || errors.state || errors.zip) {
      return {
        success: false,
        message: "Please select a complete address from the dropdown suggestions, including zip code.",
        errors,
      }
    }
    return {
      success: false,
      message: "Invalid form data. Please check your entries.",
      errors,
    }
  }

  const { fullName, phone, address } = validatedFields.data

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      subject: `New Website Lead: ${fullName}`,
      reply_to: "no-reply@resend.dev",
      react: <ContactFormEmail fullName={fullName} phone={phone} address={address} />,
    })

    if (error) {
      console.error("Resend API Error:", error)
      return { success: false, message: "Failed to send email. Please try again." }
    }

    return { success: true, message: "Thank you! Your quote request has been sent." }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
