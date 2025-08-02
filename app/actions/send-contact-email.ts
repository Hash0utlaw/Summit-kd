"use server"

import { Resend } from "resend"
import { ContactFormEmail } from "@/components/emails/contact-form-email"
import type * as React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.TO_EMAIL

export interface FormState {
  success: boolean
  message: string
}

export async function sendContactEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!toEmail) {
    console.error("TO_EMAIL environment variable is not set.")
    return {
      success: false,
      message: "The server is not configured to send emails. Please contact support.",
    }
  }

  const fromEmail = "contact@summitroofing.pro" // Must be a verified domain in Resend

  const fullName = formData.get("fullName") as string
  const phone = formData.get("phone") as string
  const address = formData.get("address") as string

  if (!fullName || !phone || !address) {
    return {
      success: false,
      message: "Please fill out all required fields.",
    }
  }

  try {
    const data = await resend.emails.send({
      from: `Summit Roofing <${fromEmail}>`,
      to: [toEmail],
      subject: `New Quote Request from ${fullName}`,
      react: ContactFormEmail({
        fullName,
        phone,
        address,
      }) as React.ReactElement,
    })

    if (data.error) {
      console.error("Resend API Error:", data.error)
      return { success: false, message: "Failed to send email. Please try again later." }
    }

    return { success: true, message: "Thank you! Your request has been sent." }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
