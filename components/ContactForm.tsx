'use client'

import { useState } from 'react'
import { CheckIcon } from '@/components/icons'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): Record<string, string> {
  const errors: Record<string, string> = {}
  if (!data.get('name')) errors.name = 'Name is required'
  const email = data.get('email') as string
  if (!email) {
    errors.email = 'Email is required'
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!data.get('message')) errors.message = 'Message is required'
  return errors
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
          _hp: data.get('_hp'),
        }),
      })
      setState(res.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-12" role="status">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-ink mb-2">Message sent!</h3>
        <p className="text-ink-light">
          We'll get back to you within 12 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot: visually hidden, bots fill it, real users don't */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <input name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-ink mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full bg-card border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder-ink-light/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-ink mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full bg-card border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder-ink-light/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-ink mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full bg-card border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder-ink-light/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full bg-card border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder-ink-light/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
          placeholder="Tell McLean Tutoring Center about your goals..."
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      {state === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or email directly.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full bg-brand text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-50"
      >
        {state === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
