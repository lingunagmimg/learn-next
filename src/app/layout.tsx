import { Comforter, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Comforter({
  weight: '400',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.className} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
