"use client"

import type React from "react"

import { useActionState, useEffect, useState, useRef, useTransition } from "react"
import { useFormStatus } from "react-dom"
import { sendContactEmail } from "@/app/actions/send-contact-email"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone } from "lucide-react"

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
  const [isPending, startTransition] = useTransition()
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
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState<string>("")

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "")
    const limitedNumber = phoneNumber.slice(0, 10)
    if (limitedNumber.length <= 3) {
      return limitedNumber
    } else if (limitedNumber.length <= 6) {
      return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`
    } else {
      return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
    if (phoneError) {
      setPhoneError("")
    }
  }

  const validatePhone = (phoneValue: string) => {
    const digits = phoneValue.replace(/\D/g, "")
    return digits.length === 10
  }

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

              const normalizedState = state.toUpperCase().trim()
              const validStates = ["GA", "AL", "GEORGIA", "ALABAMA"]
              if (state && !validStates.includes(normalizedState)) {
                setAddressError(
                  "We currently only service properties in Georgia and Alabama. Please enter a valid GA or AL address.",
                )
                setAddressComponents({ street: "", city: "", state: "", zip: "" })
                return
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
      setPhone("")
      setPhoneError("")
      setFormKey(Date.now())
    }
  }, [state.success])

  const parseManualAddress = (address: string) => {
    const zipMatch = address.match(/\b\d{5}(?:-\d{4})?\b/)
    return zipMatch ? zipMatch[0] : ""
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number")
      return
    }

    if (autocompleteAvailable) {
      if (!addressComponents.street || !addressComponents.city || !addressComponents.state || !addressComponents.zip) {
        setAddressError("Please select a complete address from the dropdown suggestions, including zip code.")
        return
      }

      const normalizedState = addressComponents.state.toUpperCase().trim()
      const validStates = ["GA", "AL", "GEORGIA", "ALABAMA"]
      if (!validStates.includes(normalizedState)) {
        setAddressError(
          "We currently only service properties in Georgia and Alabama. Please enter a valid GA or AL address.",
        )
        return
      }
    } else {
      const addressValue = addressInputRef.current?.value || ""
      const zip = parseManualAddress(addressValue)

      if (!zip) {
        setAddressError("Please include a zip code in your address (e.g., 123 Main St, Atlanta, GA 30301)")
        return
      }

      setAddressComponents((prev) => ({ ...prev, zip }))
    }

    setAddressError("")
    setPhoneError("")

    const formData = new FormData(e.currentTarget)

    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 p-4 md:p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-base font-bold text-blue-900 leading-tight">Service Areas</p>
            <p className="text-base md:text-lg font-semibold text-blue-700 leading-tight">Georgia & Alabama</p>
          </div>
        </div>
      </div>

      <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="(123) 456-7890"
            required
            className={phoneError ? "border-red-500" : ""}
          />
          {phoneError && <p className="text-sm text-red-600 mt-1">{phoneError}</p>}
          {phone && !phoneError && validatePhone(phone) && (
            <p className="text-xs text-green-600 mt-1">✓ Valid phone number</p>
          )}
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

      <div className="mt-6 p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-300 shadow-md">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-base font-bold text-orange-900 mb-1">Outside our service area?</p>
            <p className="text-sm text-orange-800">Contact us directly for special requests or inquiries.</p>
          </div>
        </div>
        <a href="tel:+17045784756" className="block">
          <Button
            variant="default"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-sm"
            type="button"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call (704) 578-4756
          </Button>
        </a>
      </div>
    </div>
  )
}
