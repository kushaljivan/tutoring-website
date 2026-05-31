import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'McLean Tutors — Math & English Tutoring, SAT Prep',
  description:
    '1-on-1 Math and English tutoring for elementary through high school students in McLean, VA — plus SAT prep. Serving Langley HS, McLean HS, Cooper MS, Longfellow MS, and more. Starting at $45/hr.',
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
