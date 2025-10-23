"use server"

import { Resend } from "resend"
import { z } from "zod"

const resendApiKey = process.env.RESEND_API_KEY
const toEmail = process.env.TO_EMAIL

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
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
  phoneValidated: z.string().optional(),
  phoneActivityScore: z.string().optional(),
  phoneValidationStatus: z.string().optional(),
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

  const phoneValidated = formData.get("phoneValidated")
  const phoneActivityScore = formData.get("phoneActivityScore")
  const phoneValidationStatus = formData.get("phoneValidationStatus")

  console.log("[v0] Form data received:", {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    state: formData.get("state"),
    zip: formData.get("zip"),
    phoneValidated,
    phoneActivityScore,
    phoneValidationStatus,
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
    email: formData.get("email"),
    address: formData.get("address"),
    street: formData.get("street"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
    phoneValidated: formData.get("phoneValidated"),
    phoneActivityScore: formData.get("phoneActivityScore"),
    phoneValidationStatus: formData.get("phoneValidationStatus"),
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

  const { fullName, phone, email, address, zip, state } = validatedFields.data

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

  let phoneWarning = ""
  const activityScore = phoneActivityScore ? Number.parseInt(phoneActivityScore) : null

  if (activityScore === null || Number.isNaN(activityScore)) {
    // API failed or didn't return a score - show warning
    phoneWarning = `
      <div class="field" style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px;">
        <span class="label" style="color: #f59e0b;">⚠️ PHONE NOT VALIDATED</span>
        <span class="value" style="color: #92400e;">Unable to verify phone quality (API unavailable). Treat with caution and verify before calling.</span>
      </div>
    `
  } else if (activityScore < 70) {
    phoneWarning = `
      <div class="field" style="background-color: #fee2e2; padding: 15px; border-left: 4px solid #dc2626; border-radius: 4px;">
        <span class="label" style="color: #dc2626;">⚠️ SUSPICIOUS PHONE NUMBER</span>
        <span class="value" style="color: #991b1b;">Activity Score: ${activityScore}/100 - This number may be disconnected or invalid. Verify before calling.</span>
      </div>
    `
  } else if (activityScore < 85) {
    phoneWarning = `
      <div class="field" style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px;">
        <span class="label" style="color: #f59e0b;">⚠️ MODERATE ACTIVITY PHONE</span>
        <span class="value" style="color: #92400e;">Activity Score: ${activityScore}/100 - Moderate activity. May want to verify.</span>
      </div>
    `
  } else {
    phoneWarning = `
      <div class="field" style="background-color: #d1fae5; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
        <span class="label" style="color: #10b981;">✓ VERIFIED PHONE</span>
        <span class="value" style="color: #065f46;">Activity Score: ${activityScore}/100 - Highly active number</span>
      </div>
    `
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      subject: `New Website Lead: ${fullName}${activityScore !== null && !Number.isNaN(activityScore) && activityScore < 70 ? " ⚠️ SUSPICIOUS PHONE" : activityScore === null || Number.isNaN(activityScore) ? " ⚠️ PHONE NOT VALIDATED" : ""}`,
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
                ${phoneWarning}
                <div class="field">
                  <span class="label">Full Name:</span>
                  <span class="value">${fullName}</span>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
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
