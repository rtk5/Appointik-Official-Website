import { pageMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/home/hero-section';
import { BenefitCards } from '@/components/home/benefit-cards';
import { ProductWalkthrough } from '@/components/home/product-walkthrough';
import { DownloadApps } from '@/components/home/download-apps';
// import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { MissionVision } from '@/components/home/mission-vision';
import { TrustBadges } from '@/components/home/trust-badges';

export const metadata = pageMetadata(
  'Clinic Management Software from ₹249/month',
  'Appointik clinic software from ₹249 per clinic/month. Android apps in 20 languages, EMR, billing and booking portals. No per-doctor or per-staff fees.',
  '/'
);

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Appointik',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, Web, iOS',
  description:
    'Clinic management software with Android Clinic and Patient Apps in 20 languages, appointments, EMR and billing. Pro includes booking and Aggregator Portals. Max includes unlimited staff accounts. Pricing is per clinic.',
  url: 'https://appointik.in',
  offers: {
    '@type': 'Offer',
    price: '249',
    priceCurrency: 'INR',
    category: 'Subscription',
    name: 'Lite Plan — monthly subscription per clinic',
    url: 'https://appointik.in/pricing/',
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
            Complete clinic management software for growing clinics worldwide
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you are comparing clinic management software, budget clinic software, or an affordable alternative to costly hospital systems, Appointik gives you a complete package: Clinic Web App, Android Clinic App, Android Patient App, iOS installable Web App, multi-clinic branch support, multi-role staff access, custom appointment booking portals, EMR/EHR documents, digital prescriptions in the patient&apos;s preferred language, clinic letters and certificates, reminders in 20 languages, PIN-protected sensitive information, billing, payment receipts, expense tracking and reports.
          </p>
        </div>
      </section>
      <ProductWalkthrough />
      <DownloadApps />
      <MissionVision />
    </div>
  );
}
