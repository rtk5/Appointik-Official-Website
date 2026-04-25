import { Metadata } from 'next';
import { PricingSection } from '@/components/pricing/pricing-section';
import { PricingFAQ } from '@/components/pricing/pricing-faq';

export const metadata: Metadata = {
  title: 'Pricing - Affordable Clinic Management Software',
  description: 'Choose the perfect plan for your clinic. Starting at ₹175/month with free trial. Pay-as-you-go, Own Device Plan, and SMS plans available.',
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingSection />
      <PricingFAQ />
    </div>
  );
}
