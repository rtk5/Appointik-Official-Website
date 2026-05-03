import { Metadata } from 'next';
import { SuccessStoriesSection } from '@/components/success-stories/success-stories-section';
import { CaseStudiesGrid } from '@/components/success-stories/case-studies-grid';
import { MetricsOverview } from '@/components/success-stories/metrics-overview';

export const metadata: Metadata = {
  title: 'Clinic Software Success Stories',
  description: 'Discover how 1,000+ healthcare professionals use Appointik clinic management software to manage appointments, patient records, reminders and billing.',
  alternates: {
    canonical: '/success-stories',
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="pt-16">
      <SuccessStoriesSection />
      <MetricsOverview />
    </div>
  );
}
