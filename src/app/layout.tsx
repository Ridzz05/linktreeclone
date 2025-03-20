import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyLinks - Your Digital Identity',
  description: 'Kumpulan link penting Anda dalam satu tempat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
