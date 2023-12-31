import { Inter } from 'next/font/google'
import "./index.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fode Casamentos',
  description: 'FODEU O CASAMENTO MESMO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
