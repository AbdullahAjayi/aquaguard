import type { Metadata } from "next"
import localFont from "next/font/local"
import clsx from "clsx"

import "./globals.css"

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Aquaguard",
  description: "A real-time monitoring and control system for water quality and aquatic life.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={clsx("bg-green h-full max-w-screen overflow-x-hidden", inter.variable)}
      >
        {children}
      </body>
    </html>
  )
}
