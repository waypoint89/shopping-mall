import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const notoSerifKr = Noto_Serif_KR({
  weight: ['400', '500'],
  variable: '--font-noto-serif-kr',
  preload: false,
})

const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500'],
  variable: '--font-noto-sans-kr',
  preload: false,
})

export const metadata: Metadata = {
  title: 'MAISON ODETTE | 일상을 위한 우아한 셀렉션',
  description:
    '30대 여성을 위한 감도 높은 의류, 가방, 주얼리, 라이프스타일 셀렉트숍 메종 오데뜨.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${notoSerifKr.variable} ${notoSansKr.variable}`}
    >
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
