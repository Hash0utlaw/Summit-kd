"use server"

import { Resend } from "resend"
import { z } from "zod"

const resendApiKey = process.env.RESEND_API_KEY
const toEmail = process.env.TO_EMAIL
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  address: z.string().min(5, "Please enter a valid address."),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  recaptchaToken: z.string().optional(),
})

const validateZipCode = (address: string, zip?: string): boolean => {
  if (zip && /^\d{5}(-\d{4})?$/.test(zip)) {
    return true
  }

  const zipMatch = address.match(/\b\d{5}(?:-\d{4})?\b/)
  return zipMatch !== null
}

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  if (!recaptchaSecretKey) {
    console.error("RECAPTCHA_SECRET_KEY environment variable is not set.")
    return { success: false, error: "reCAPTCHA not configured" }
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${recaptchaSecretKey}&response=${token}`,
    })

    const data = await response.json()

    if (!data.success) {
      console.error("reCAPTCHA verification failed:", data["error-codes"])
      return { success: false, error: "reCAPTCHA verification failed" }
    }

    return { success: true, score: data.score }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return { success: false, error: "reCAPTCHA verification error" }
  }
}

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
    recaptchaToken: formData.get("recaptchaToken"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your entries.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { fullName, phone, address, zip, recaptchaToken } = validatedFields.data

  if (recaptchaToken && recaptchaSecretKey) {
    const recaptchaResult = await verifyRecaptcha(recaptchaToken)

    if (!recaptchaResult.success) {
      console.error("reCAPTCHA verification failed for submission")
      return {
        success: false,
        message: "Security verification failed. Please try again.",
      }
    }

    if (recaptchaResult.score !== undefined && recaptchaResult.score < 0.3) {
      // Log blocked submission details for analysis
      console.log("[v0] 🚫 BLOCKED SUBMISSION - reCAPTCHA score too low")
      console.log("[v0] Score:", recaptchaResult.score)
      console.log("[v0] Name:", fullName)
      console.log("[v0] Phone:", phone)
      console.log("[v0] Address:", address)
      console.log("[v0] Timestamp:", new Date().toISOString())

      return {
        success: false,
        message: "Security verification failed. Please try again later.",
      }
    }

    // Log successful verification with score
    console.log(`[v0] ✅ PASSED - reCAPTCHA score: ${recaptchaResult.score}`)
  }

  if (!validateZipCode(address, zip)) {
    return {
      success: false,
      message: "Please include a valid zip code in your address.",
    }
  }

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
      console.error("Resend API Error:", error)
      return { success: false, message: "Failed to send email. Please try again." }
    }

    return { success: true, message: "Thank you! Your quote request has been sent." }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
