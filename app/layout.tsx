import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'McLean Tutors — SAT & Math Tutoring',
  description:
    '1-on-1 tutoring for SAT Math, SAT English, and Math from Pre-Algebra through Calculus BC. Book a free consultation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-white`}>
        {children}
      </body>
    </html>
  )
}
