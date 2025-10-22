"use server"

import { Resend } from "resend"
import { z } from "zod"

const resendApiKey = process.env.RESEND_API_KEY
const toEmail = process.env.TO_EMAIL

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  address: z.string().min(5, "Please enter a valid address."),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true
      const normalized = val.toUpperCase().trim()
      return ["GA", "AL", "GEORGIA", "ALABAMA"].includes(normalized)
    }, "We currently only service properties in Georgia and Alabama."),
  zip: z.string().optional(),
})

const validateZipCode = (address: string, zip?: string): boolean => {
  if (zip && /^\d{5}(-\d{4})?$/.test(zip)) {
    return true
  }

  const zipMatch = address.match(/\b\d{5}(?:-\d{4})?\b/)
  return zipMatch !== null
}

export async function sendContactEmail(prevState: any, formData: FormData) {
  console.log("[v0] sendContactEmail server action called")
  console.log("[v0] Form data received:", {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    state: formData.get("state"),
    zip: formData.get("zip"),
  })

  if (!resendApiKey) {
    console.error("[v0] RESEND_API_KEY environment variable is not set.")
    return { success: false, message: "Server configuration error. Please try again later." }
  }
  if (!toEmail) {
    console.error("[v0] TO_EMAIL environment variable is not set.")
    return { success: false, message: "Server configuration error. Please try again later." }
  }

  console.log("[v0] Environment variables verified - RESEND_API_KEY and TO_EMAIL are set")

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
    console.error("[v0] Form validation failed:", validatedFields.error.flatten().fieldErrors)
    return {
      success: false,
      message: "Invalid form data. Please check your entries.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  console.log("[v0] Form validation passed")

  const { fullName, phone, address, zip, state } = validatedFields.data

  if (state) {
    const normalizedState = state.toUpperCase().trim()
    if (!["GA", "AL", "GEORGIA", "ALABAMA"].includes(normalizedState)) {
      console.error("[v0] State validation failed:", normalizedState)
      return {
        success: false,
        message: "We currently only service properties in Georgia and Alabama.",
      }
    }
  }

  if (!validateZipCode(address, zip)) {
    console.error("[v0] Zip code validation failed")
    return {
      success: false,
      message: "Please include a valid zip code in your address.",
    }
  }

  console.log("[v0] All validations passed, attempting to send email via Resend...")

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      subject: `New Website Lead: ${fullName}`,
      reply_to: "no-reply@resend.dev",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9fafb; padding: 30px; border-radius: 8px; margin-top: 20px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e40af; display: block; margin-bottom: 5px; }
              .value { color: #333; }
              .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Website Lead</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Full Name:</span>
                  <span class="value">${fullName}</span>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
                <div class="field">
                  <span class="label">Address:</span>
                  <span class="value">${address}</span>
                </div>
                <div class="field">
                  <span class="label">State:</span>
                  <span class="value">${state}</span>
                </div>
              </div>
              <div class="footer">
                <p>This lead was submitted through your website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend API Error:", error)
      return { success: false, message: "Failed to send email. Please try again." }
    }

    console.log("[v0] Email sent successfully via Resend!")
    console.log("[v0] Resend response data:", data)

    return { success: true, message: "Thank you! Your quote request has been sent." }
  } catch (error) {
    console.error("[v0] Unexpected error during email send:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
