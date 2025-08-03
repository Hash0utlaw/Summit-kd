import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text, Tailwind } from "@react-email/components"
import type * as React from "react"

interface ContactFormEmailProps {
  fullName: string
  phone: string
  address: string
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ fullName, phone, address }) => (
  <Html>
    <Head />
    <Preview>New Free Quote Request from {fullName}</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans">
        <Container className="bg-white border border-solid border-gray-200 rounded-lg my-10 mx-auto p-10 w-full max-w-2xl">
          <Heading className="text-2xl font-bold text-gray-800 text-center">New Free Quote Request</Heading>
          <Text className="text-base text-gray-600">
            You have received a new quote request from your website contact form.
          </Text>
          <Hr className="border-gray-300 my-6" />
          <Section>
            <Text className="text-lg font-semibold text-gray-700">Customer Details:</Text>
            <div className="mt-4">
              <Text className="text-base text-gray-800">
                <strong>Name:</strong> {fullName}
              </Text>
              <Text className="text-base text-gray-800">
                <strong>Phone:</strong> {phone}
              </Text>
              <Text className="text-base text-gray-800">
                <strong>Address:</strong> {address}
              </Text>
            </div>
          </Section>
          <Hr className="border-gray-300 my-6" />
          <Text className="text-sm text-gray-500">This email was sent from the Summit Roofing website.</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)
