import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'
import NextAuthProvider from '@/providers/NextAuthProvider' // สมมติว่ามีตัวนี้อยู่แล้ว
import ReduxProvider from '@/redux/ReduxProvider' // 1. Import ReduxProvider เข้ามา

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Venue Explorer',
  description: 'Book your perfect venue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. ครอบทับ children ด้วย ReduxProvider */}
        <ReduxProvider>
          <NextAuthProvider>
            <TopMenu />
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}