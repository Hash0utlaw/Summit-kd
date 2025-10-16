"use client"

import type React from "react"

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
    gm_authFailure?: () => void
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
  const [addressError, setAddressError] = useState<string>("")
  const [addressComponents, setAddressComponents] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  })
  const [autocompleteAvailable, setAutocompleteAvailable] = useState(true)

  useEffect(() => {
    window.gm_authFailure = () => {
      console.log(
        "[v0] Google Maps API key restricted for this domain. Address autocomplete disabled, manual entry enabled.",
      )
      setAutocompleteAvailable(false)
    }
  }, [])

  useEffect(() => {
    const initAutocomplete = () => {
      if (
        typeof window !== "undefined" &&
        window.google &&
        window.google.maps &&
        window.google.maps.places &&
        addressInputRef.current
      ) {
        try {
          const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
            types: ["address"],
            componentRestrictions: { country: ["us"] },
          })

          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace()

            if (place.address_components && addressInputRef.current) {
              let street = ""
              let city = ""
              let state = ""
              let zip = ""

              place.address_components.forEach((component: any) => {
                const types = component.types

                if (types.includes("street_number")) {
                  street = component.long_name + " "
                }
                if (types.includes("route")) {
                  street += component.long_name
                }
                if (types.includes("locality")) {
                  city = component.long_name
                }
                if (types.includes("administrative_area_level_1")) {
                  state = component.short_name
                }
                if (types.includes("postal_code")) {
                  zip = component.long_name
                }
              })

              setAddressComponents({ street, city, state, zip })

              if (place.formatted_address) {
                addressInputRef.current.value = place.formatted_address
              }

              setAddressError("")
            }
          })

          setAutocompleteAvailable(true)
        } catch (error) {
          console.log("[v0] Google Maps autocomplete initialization failed. Manual entry enabled.")
          setAutocompleteAvailable(false)
        }
      }
    }

    if (window.google?.maps?.places) {
      initAutocomplete()
    } else {
      const checkGoogleMaps = setInterval(() => {
        if (window.google?.maps?.places) {
          initAutocomplete()
          clearInterval(checkGoogleMaps)
        }
      }, 100)

      setTimeout(() => {
        clearInterval(checkGoogleMaps)
        if (!window.google?.maps?.places) {
          console.log("[v0] Google Maps API not loaded. Manual address entry enabled.")
          setAutocompleteAvailable(false)
        }
      }, 5000)
    }
  }, [formKey])

  useEffect(() => {
    if (state.success) {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-16871498775/hjiyCKHZnqcbEJfI-uw-",
        })
      }

      setAddressComponents({ street: "", city: "", state: "", zip: "" })
      setAddressError("")
      setFormKey(Date.now())
    }
  }, [state.success])

  const parseManualAddress = (address: string) => {
    const zipMatch = address.match(/\b\d{5}(?:-\d{4})?\b/)
    return zipMatch ? zipMatch[0] : ""
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (autocompleteAvailable) {
      if (!addressComponents.street || !addressComponents.city || !addressComponents.state || !addressComponents.zip) {
        e.preventDefault()
        setAddressError("Please select a complete address from the dropdown suggestions, including zip code.")
        return
      }
    } else {
      const addressValue = addressInputRef.current?.value || ""
      const zip = parseManualAddress(addressValue)

      if (!zip) {
        e.preventDefault()
        setAddressError("Please include a zip code in your address (e.g., 123 Main St, Atlanta, GA 30301)")
        return
      }

      setAddressComponents((prev) => ({ ...prev, zip }))
    }

    setAddressError("")
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form key={formKey} action={formAction} onSubmit={handleSubmit} className="space-y-4">
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
            placeholder={
              autocompleteAvailable ? "Start typing your address..." : "Enter your full address with zip code"
            }
            className={addressError ? "border-red-500" : ""}
          />
          <input type="hidden" name="street" value={addressComponents.street} />
          <input type="hidden" name="city" value={addressComponents.city} />
          <input type="hidden" name="state" value={addressComponents.state} />
          <input type="hidden" name="zip" value={addressComponents.zip} />
          {addressError && <p className="text-sm text-red-600 mt-1">{addressError}</p>}
          {!autocompleteAvailable && (
            <p className="text-xs text-muted-foreground mt-1">
              Please enter your complete address including street, city, state, and zip code
            </p>
          )}
        </div>
        <SubmitButton />
      </form>
      {state.message && (
        <p className={`mt-4 text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      )}
    </div>
  )
}
