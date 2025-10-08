"use client"

import { useActionState, useEffect, useState, useRef } from "react"
import { useFormStatus } from "react-dom"
import { sendContactEmail } from "@/app/actions/send-contact-email"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void
    google?: any
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
  const addressInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const initAutocomplete = () => {
      if (
        typeof window !== "undefined" &&
        window.google &&
        window.google.maps &&
        window.google.maps.places &&
        addressInputRef.current
      ) {
        const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
          types: ["address"],
          componentRestrictions: { country: ["us"] },
        })

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace()
          if (place.formatted_address && addressInputRef.current) {
            addressInputRef.current.value = place.formatted_address
          }
        })
      }
    }

    // Check if Google Maps is already loaded
    if (window.google?.maps?.places) {
      initAutocomplete()
    } else {
      // Wait for Google Maps to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google?.maps?.places) {
          initAutocomplete()
          clearInterval(checkGoogleMaps)
        }
      }, 100)

      // Clear interval after 5 seconds to prevent infinite checking
      setTimeout(() => clearInterval(checkGoogleMaps), 5000)
    }
  }, [formKey])

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
          <Input
            id="address"
            name="address"
            ref={addressInputRef}
            required
            placeholder="Start typing your address..."
          />
        </div>
        <SubmitButton />
      </form>
      {state.message && (
        <p className={`mt-4 text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      )}
    </div>
  )
}
