import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
  _hp?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE_LENGTH = 5000

export async function POST(request: Request) {
  let body: ContactBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { name, email, subject, message, _hp } = body

  // Honeypot: bots fill hidden fields; real users leave them blank
  if (_hp) return NextResponse.json({ success: true })

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'Message too long' }, { status: 400 })
  }

  const contactEmail = process.env.CONTACT_EMAIL
  if (!contactEmail) {
    console.error('CONTACT_EMAIL env var is not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Contact Form <kjivan525@gmail.com>',
    to: contactEmail,
    replyTo: email,
    subject: subject ? `Contact: ${subject}` : `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
