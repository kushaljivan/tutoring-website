import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'McLean Tutoring Center — K-12 Tutoring & SAT Prep, All Subjects',
  description:
    '1-on-1 tutoring in Math, English, Science, and History for elementary through high school students in McLean, VA — plus SAT prep. Serving Langley HS, McLean HS, Cooper MS, Longfellow MS, and more. Starting at $50/hr.',
  openGraph: {
    siteName: 'McLean Tutoring Center',
    title: 'McLean Tutoring Center — K-12 Tutoring & SAT Prep, All Subjects',
    description:
      '1-on-1 tutoring in Math, English, Science, History, and SAT prep for K-12 students in McLean, VA. Starting at $50/hr.',
    url: 'https://mcleantutoringcenter.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${lora.variable} bg-cream text-ink`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
