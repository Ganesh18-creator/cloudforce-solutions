import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloudForce Solutions | Salesforce Consulting & Development',
  description: 'Leading Salesforce consulting and development partner delivering innovative, scalable, and high-quality solutions tailored to your business needs',
  keywords: 'Salesforce, Apex, LWC, Lightning Web Components, Salesforce CPQ, Sales Cloud, Salesforce Development, Salesforce Consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
