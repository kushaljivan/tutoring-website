'use client'

import Script from 'next/script'
import { PencilIllustration } from '@/components/illustrations'

export default function BookSession() {
  return (
    <section id="book" className="bg-cream py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <PencilIllustration className="w-16 h-16 mx-auto mb-4" />
        <h2 className="font-serif text-3xl font-bold text-ink mb-4">
          Schedule Your Free Consultation
        </h2>
        <p className="text-ink-light text-lg mb-10 max-w-2xl mx-auto">
          Book a free 30-minute call to discuss your goals, your current level,
          and how we can work together to get results.
        </p>
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-ink/10 shadow-card"
          data-url="https://calendly.com/kjivan525?hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  )
}
