import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { BenefitCards } from '@/components/home/benefit-cards';
import { ProductWalkthrough } from '@/components/home/product-walkthrough';
import { DownloadApps } from '@/components/home/download-apps';
// import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { MissionVision } from '@/components/home/mission-vision';
import { TrustBadges } from '@/components/home/trust-badges';

export const metadata: Metadata = {
  title: 'Affordable Clinic Management Software from ₹125/month',
  description:
    'Appointik is budget-friendly clinic management software for appointments, EMR, billing, e-prescriptions, patient records and reminders. Built for doctors and small clinics.',
  alternates: {
    canonical: '/',
  },
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Appointik',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, Web',
  description:
    'Affordable clinic management software for appointments, EMR, billing, e-prescriptions, patient records, reminders and reports.',
  url: 'https://appointik.in',
  offers: {
    '@type': 'Offer',
    price: '125',
    priceCurrency: 'INR',
    category: 'Subscription',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '1000',
  },
};

export default function Home() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <HeroSection />
      <TrustBadges />
      <BenefitCards />
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Clinic software built for small clinics that watch every rupee
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you are comparing clinic management software, budget clinic software, or an affordable alternative to costly hospital systems, Appointik gives you the essentials in one simple app: appointment scheduling, EMR/EHR documents, digital prescriptions, patient communication, billing, payment receipts and a secure web portal.
          </p>
        </div>
      </section>
      <ProductWalkthrough />
      <DownloadApps />
      <MissionVision />
    </div>
  );
}
