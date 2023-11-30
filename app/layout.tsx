import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['400', '700'],
style: ['normal', 'italic'],
subsets: ['latin'],
display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ranking da Comunidade',
  description: 'Criado para escolher o melhor time de CS semanalmente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
