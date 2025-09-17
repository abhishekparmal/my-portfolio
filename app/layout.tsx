import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Suspense } from "react"
import Loading from "@/components/loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhishek Parmal - Software Developer",
  description: "Portfolio website of Abhishek Parmal, a Software Developer",
  icons: {
    icon: [
      { url: '/Abhishek2.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/Abhishek2.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/Abhishek2.ico', sizes: '16x16', type: 'image/png' },
      { url: '/Abhishek2.ico', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/Abhishek2.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abhishek All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}