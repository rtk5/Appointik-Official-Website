import { Metadata } from 'next';
import { FeaturesSection } from '@/components/features/features-section';

export const metadata: Metadata = {
  title: 'Clinic Management Software Features',
  description: 'Explore Appointik clinic software features: Clinic Web App, Android app, iPhone installable web app, Patient App, custom booking portals, EMR, billing and multilingual reminders.',
  alternates: {
    canonical: '/features/',
  },
};

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <FeaturesSection />
    </div>
  );
}
