import { pricingFaqs } from '@/lib/pricing-faqs';
import { pageMetadata } from '@/lib/seo';
import { PricingSection } from '@/components/pricing/pricing-section';
import { PricingFAQ } from '@/components/pricing/pricing-faq';

export const metadata = pageMetadata(
  'Pricing - Lite, Pro & Max Plans',
  'Compare clinic plans from ₹249/month. Annual INR plans save 10%; USD prices have no discount. No per-doctor or per-staff fees. Portals included from Pro.',
  '/pricing/'
);

const pricingFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqJsonLd) }}
      />
      <PricingSection />
      <PricingFAQ />
    </div>
  );
}
