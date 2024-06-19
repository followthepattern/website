import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
      <head>
        <Script src="https://followthepattern.s3.us-east-2.amazonaws.com/fp/fp-analytics.js"></Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
