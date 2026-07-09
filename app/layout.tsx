import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  metadataBase: new URL('https://mcleantutoringcenter.com'),
  title: 'McLean Tutoring Center — Tutoring, Test Prep, & College Admissions',
  description:
    'Affordable 1-on-1 tutoring in Math, English, Science, and History — plus SAT/ACT prep and college admissions coaching for K-12 students in McLean, VA. Free 30 min consultation.',
  openGraph: {
    siteName: 'McLean Tutoring Center',
    title: 'McLean Tutoring Center — Tutoring, Test Prep, & College Admissions',
    description:
      'Affordable 1-on-1 tutoring in Math, English, Science, and History — plus SAT/ACT prep and college admissions coaching for K-12 students in McLean, VA.',
    url: 'https://mcleantutoringcenter.com',
    type: 'website',
  },
}

// Tells Google to show "McLean Tutoring Center" as the site name in search
// results (instead of the bare domain) and where the business is located.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://mcleantutoringcenter.com/#website',
      url: 'https://mcleantutoringcenter.com/',
      name: 'McLean Tutoring Center',
    },
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://mcleantutoringcenter.com/#organization',
      name: 'McLean Tutoring Center',
      url: 'https://mcleantutoringcenter.com/',
      logo: 'https://mcleantutoringcenter.com/logo.png',
      telephone: '+1-571-449-7729',
      email: 'mcleantutors21@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'McLean',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
      areaServed: 'McLean, VA',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${lora.variable} bg-cream text-ink`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Nav />
        {children}
      </body>
    </html>
  )
}
