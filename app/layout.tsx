import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apex Nexus - Find Your Perfect Squad',
  description: 'The ultimate cross-platform teammate finder for Apex Legends players',
  keywords: ['Apex Legends', 'teammates', 'squad', 'gaming', 'LFG'],
  authors: [{ name: 'Apex Nexus Team' }],
  openGraph: {
    title: 'Apex Nexus - Find Your Perfect Squad',
    description: 'Connect with Apex Legends players across all platforms',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
