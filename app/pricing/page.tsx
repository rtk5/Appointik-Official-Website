import { Metadata } from 'next';
import { PricingSection } from '@/components/pricing/pricing-section';
import { PricingFAQ } from '@/components/pricing/pricing-faq';

export const metadata: Metadata = {
  title: 'Pricing - Budget Clinic Software from ₹125/month',
  description: 'Affordable clinic management software pricing for doctors and small clinics. Start at ₹125/month with appointments, EMR, billing, prescriptions and reminders.',
  alternates: {
    canonical: '/pricing',
  },
};

const pricingFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a free trial available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Basic Plan starts at ₹125/month. Higher plans also include free trial periods so clinics can explore features before committing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Appointik good for clinics looking for budget or cheap clinic software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Appointik is affordable clinic software for small clinics and independent doctors who need core clinic management features without costly setup, long contracts, or complex enterprise systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Appointik offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Appointik works offline for appointments, patient records, prescriptions and billing, then syncs automatically when the clinic is back online.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can patients book appointments online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Each clinic gets a branded online booking portal where patients can see availability and book appointments.',
      },
    },
  ],
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
