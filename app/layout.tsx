import '../styles/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eric Bello Cloud Resume',
  description: 'Serverless website created using AWS services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
