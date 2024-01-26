import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Follow The Pattern',
  description: 'Solutions in software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
