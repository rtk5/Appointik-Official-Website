import { pageMetadata } from '@/lib/seo';
import { SuccessStoriesSection } from '@/components/success-stories/success-stories-section';
import { MetricsOverview } from '@/components/success-stories/metrics-overview';

export const metadata = pageMetadata(
  'Clinic Software Success Stories',
  'Read how healthcare professionals use Appointik for appointments, patient records, reminders and billing, with clinic software used in 15+ countries.',
  '/success-stories/'
);

export default function SuccessStoriesPage() {
  return (
    <div className="pt-16">
      <SuccessStoriesSection />
      <MetricsOverview />
    </div>
  );
}
