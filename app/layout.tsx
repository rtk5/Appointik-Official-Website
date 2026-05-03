import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppWidget } from '@/components/ui/whatsapp-widget';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Appointik',
  legalName: 'Samrith Technologies',
  url: 'https://appointik.in',
  logo: 'https://appointik.in/logo-square.png',
  email: 'appointikteam@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://play.google.com/store/apps/details?id=com.samrithtech.appointik',
    'https://play.google.com/store/apps/details?id=com.samrithtech.appointik.patient',
    'https://appointik.blogspot.com/',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Appointik',
  url: 'https://appointik.in',
  description:
    'Affordable clinic management software for appointments, EMR, billing, prescriptions and patient records.',
  publisher: {
    '@type': 'Organization',
    name: 'Appointik',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL('https://appointik.in'),
  title: {
    template: '%s | Appointik Clinic Software',
    default: 'Appointik - Affordable Clinic Management Software',
  },
  description: 'Affordable clinic management software loved by 1,000+ healthcare professionals. Manage appointments, EMR, billing, prescriptions and patient records from ₹125/month.',
  
  // ✅ FAVICON ADDED HERE
  icons: {
    icon: '/logo-square-removebg-preview.png',
    shortcut: '/logo-square-removebg-preview.png',
    apple: '/logo-square-removebg-preview.png',
  },

  keywords: [
    'clinic management software',
    'clinic software',
    'affordable clinic software',
    'budget clinic software',
    'cheap clinic software',
    'appointment scheduling',
    'EMR software',
    'healthcare software',
    'clinic software India',
    'patient management',
    'medical billing software',
  ],
  authors: [{ name: 'Appointik' }],
  creator: 'Appointik',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://appointik.in',
    title: 'Appointik - Affordable Clinic Management Software',
    description: 'Budget-friendly clinic software for appointments, EMR, billing, prescriptions and patient records. Plans start at ₹125/month.',
    siteName: 'Appointik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Appointik - Clinic Management Software',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Appointik - Affordable Clinic Management Software',
    description: 'Budget-friendly clinic software for appointments, EMR, billing, prescriptions and patient records.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
