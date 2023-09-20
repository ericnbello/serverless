import '../styles/styles.css';
import type { Metadata } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import  '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';

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
