import './globals.css';
import type { Metadata } from 'next';
import { socialImage } from '@/lib/seo';
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
    addressLocality: 'Bengaluru',
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
    'Affordable clinic management software with multi-clinic support, multi-role staff access, transparent pricing, appointments, EMR, billing, expense reports, clinic letters, prescriptions, invoices, reminders, patient apps and booking portals.',
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
  description: 'Affordable clinic management software trusted by clinics in 15+ countries. Manage appointments, EMR, billing, multi-clinic branches, multi-role staff access, expenses, prescriptions, invoices, reminders, patient apps and booking portals from ₹249/month.',
  
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
    'clinic letters software',
    'medical certificate software',
    'referral letter software',
    'healthcare software',
    'clinic software India',
    'clinic management software worldwide',
    'multi clinic software',
    'multi-clinic clinic management software',
    'multi role clinic software',
    'role based staff access clinic software',
    'clinic branch management software',
    'multilingual clinic software',
    'clinic prescriptions invoices and reminders in 20 languages',
    'secure clinic software',
    'PIN protected patient records',
    'patient booking portal',
    'clinic web app',
    'Android Clinic App',
    'clinic software for iPhone',
    'patient management',
    'medical billing software',
    'clinic expense tracker',
    'clinic expense reports',
    'transparent pricing clinic software',
    'no hidden costs clinic software',
    'instant renewal clinic software',
    'instant signup clinic software',
    'most affordable clinic software',
  ],
  authors: [{ name: 'Appointik' }],
  creator: 'Appointik',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://appointik.in',
    title: 'Appointik - Affordable Clinic Management Software',
    description: 'Budget-friendly clinic software for appointments, EMR, billing, multi-clinic branch support, multi-role staff access, expense reports, clinic letters, prescriptions, invoices, reminders, patient apps and booking portals. Trusted in 15+ countries.',
    siteName: 'Appointik',
    images: [socialImage],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Appointik - Affordable Clinic Management Software',
    description: 'Budget-friendly clinic software for appointments, EMR, billing, multi-clinic branch support, multi-role staff access, expense reports, clinic letters, prescriptions, invoices, reminders, patient apps and booking portals.',
    images: [socialImage],
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
