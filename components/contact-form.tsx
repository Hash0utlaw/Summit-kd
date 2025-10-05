"use client"

import { useActionState, useEffect, useState } from "react"
import { useFormStatus } from "react-dom"
import { sendContactEmail } from "@/app/actions/send-contact-email"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void
  }
}

const initialState = {
  success: false,
  message: "",
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Get My Free Quote"}
    </Button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState)
  const [formKey, setFormKey] = useState(Date.now())

  useEffect(() => {
    if (state.success) {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-16871498775/hjiyCKHZnqcbEJfI-uw-",
        })
      }

      // Reset the form by changing the key
      setFormKey(Date.now())
    }
  }, [state.success])

  return (
    <div className="w-full max-w-md mx-auto">
      <form key={formKey} action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
        <div>
          <Label htmlFor="address">Property Address</Label>
          <Textarea id="address" name="address" required />
        </div>
        <SubmitButton />
      </form>
      {state.message && (
        <p className={`mt-4 text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      )}
    </div>
  )
}
