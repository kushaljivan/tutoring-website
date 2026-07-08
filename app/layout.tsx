import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'McLean Tutoring Center — Math & English Tutoring, SAT Prep',
  description:
    '1-on-1 Math and English tutoring for elementary through high school students in McLean, VA — plus SAT prep. Serving Langley HS, McLean HS, Cooper MS, Longfellow MS, and more. Starting at $45/hr.',
  openGraph: {
    siteName: 'McLean Tutoring Center',
    title: 'McLean Tutoring Center — Math & English Tutoring, SAT Prep',
    description:
      '1-on-1 Math and English tutoring for K-12 students in McLean, VA — plus SAT prep. Starting at $45/hr.',
    url: 'https://mcleantutoringcenter.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-white`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
