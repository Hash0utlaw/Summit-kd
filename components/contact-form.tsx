"use client"
import { useActionState } from "react"
import { CheckCircle, LoaderCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { sendContactEmail, type FormState } from "@/app/actions/send-contact-email"

const initialState: FormState = {
  success: false,
  message: "",
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)

  if (state.success) {
    return (
      <Card>
        <CardContent className="p-8 text-center flex flex-col items-center justify-center">
          <CheckCircle className="w-16 h-16 text-green-600 bg-green-100 rounded-full p-2 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            We've received your request and will contact you shortly to schedule your free inspection.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get a Free, No-Obligation Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" name="fullName" required placeholder="John Doe" />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
          </div>

          <div>
            <Label htmlFor="address">Customer Address *</Label>
            <Input id="address" name="address" required placeholder="123 Main St, Anytown, USA" />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 flex items-center gap-2"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <LoaderCircle className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Get My Free Quote"
            )}
          </Button>

          {!state.success && state.message && <p className="text-sm text-red-600 text-center">{state.message}</p>}

          <p className="text-sm text-gray-600 text-center">
            * Required fields. We'll call you to schedule your free quote.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
