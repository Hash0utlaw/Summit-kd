import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components"
import type * as React from "react"

interface ContactFormEmailProps {
  fullName: string
  phone: string
  address: string
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ fullName, phone, address }) => (
  <Html>
    <Head />
    <Preview>New Quote Request from {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Quote Request</Heading>
        <Text style={paragraph}>You have received a new inquiry from your website contact form.</Text>
        <Hr style={hr} />
        <Section>
          <Text style={details}>
            <strong>Name:</strong> {fullName}
          </Text>
          <Text style={details}>
            <strong>Phone:</strong> {phone}
          </Text>
          <Text style={details}>
            <strong>Address:</strong> {address}
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the Summit Roofing website contact form.</Text>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
}

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "0",
  textAlign: "center" as const,
  color: "#1a202c",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#4a5568",
}

const details = {
  ...paragraph,
  fontSize: "18px",
  lineHeight: "28px",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
}
