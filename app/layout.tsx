import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Productivity Dashboard - Task Management',
  description: 'A modern, feature-rich productivity dashboard for managing tasks and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
