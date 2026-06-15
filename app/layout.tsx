import 'katex/dist/katex.min.css'
import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Applied New Worlds',
    template: '%s | Applied New Worlds',
  },
  description:
    'A small studio for research, software, and digital creation.',
  openGraph: {
    title: 'Applied New Worlds',
    description:
      'A small studio for research, software, and digital creation.',
    url: baseUrl,
    siteName: 'Applied New Worlds',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-neutral-800 dark:bg-[#EDEDED]"
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto font-[_Helvetica,'Helvetica_Neue',_Arial,_sans-serif]">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
