import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
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
