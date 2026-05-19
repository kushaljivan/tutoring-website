import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
  _hp?: string
}

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

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    // TODO: Replace with a verified domain sender before going live (see Resend dashboard)
    from: 'Contact Form <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    replyTo: email as string,
    subject: subject ? `Contact: ${subject}` : `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
