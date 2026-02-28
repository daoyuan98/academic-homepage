import type { Metadata } from 'next'
import { Noto_Sans_SC, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _notoSansSC = Noto_Sans_SC({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"] });
const _sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  
  title: "Guangzhi Wang's Homepage",
  description: "Personal homepage of Guangzhi Wang",
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
