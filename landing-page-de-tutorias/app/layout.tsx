import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Geist } from 'next/font/google'
import { SITE } from '@/lib/site'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _bricolage = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: `${SITE.name} — Tutorías universitarias entre estudiantes`,
  description:
    'Encuentra un tutor para tu materia, paga y agenda en minutos, y toma tu asesoría en la Biblioteca o por Google Meet.',
  generator: 'v0.app',
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

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f9fafc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
