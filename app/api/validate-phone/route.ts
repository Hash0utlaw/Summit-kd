import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()

    console.log("[v0] Phone validation requested for:", phone)

    // Validate input
    if (!phone || typeof phone !== "string") {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
    }

    // Extract digits only
    const digits = phone.replace(/\D/g, "")

    // Must be 10 digits for US numbers
    if (digits.length !== 10) {
      return NextResponse.json(
        {
          valid: false,
          error: "Phone number must be 10 digits",
          activityScore: 0,
          status: "invalid_format",
        },
        { status: 200 },
      )
    }

    // Check for Trestle API key
    const apiKey = process.env.TRESTLE_API_KEY

    if (!apiKey) {
      console.error("[v0] TRESTLE_API_KEY not found in environment variables")
      // Fallback: Accept with warning
      return NextResponse.json({
        valid: true,
        activityScore: null,
        status: "api_unavailable",
        warning: "Unable to verify phone quality",
        phone: digits,
      })
    }

    console.log("[v0] Calling Trestle API for phone:", digits)

    const trestleResponse = await fetch(
      `https://api.trestleiq.com/3.0/phone_intel?phone=${digits}&phone.country_hint=US`,
      {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
        },
      },
    )

    if (!trestleResponse.ok) {
      const errorText = await trestleResponse.text()
      console.error("[v0] Trestle API error:", trestleResponse.status, errorText)

      // Fallback: Accept with warning
      return NextResponse.json({
        valid: true,
        activityScore: null,
        status: "api_error",
        warning: "Unable to verify phone quality",
        phone: digits,
      })
    }

    const trestleData = await trestleResponse.json()
    console.log("[v0] Trestle API response:", trestleData)

    // Extract relevant data
    const activityScore = trestleData.activity_score || 0
    const isValid = trestleData.is_valid !== false
    const lineType = trestleData.line_type || "unknown"
    const carrier = trestleData.carrier || "unknown"

    // Determine status based on activity score (updated threshold: 70)
    let status = "valid"
    let warning = null

    if (activityScore < 70) {
      status = "suspicious"
      warning = "This phone number appears to be disconnected or inactive"
    } else if (activityScore < 85) {
      status = "low_activity"
      warning = "This phone number shows moderate activity"
    }

    return NextResponse.json({
      valid: isValid,
      activityScore,
      status,
      warning,
      phone: digits,
      lineType,
      carrier,
    })
  } catch (error) {
    console.error("[v0] Phone validation error:", error)

    // Fallback: Accept with warning
    return NextResponse.json({
      valid: true,
      activityScore: null,
      status: "error",
      warning: "Unable to verify phone quality",
    })
  }
}
