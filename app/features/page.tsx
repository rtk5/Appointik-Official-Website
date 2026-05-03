import { Metadata } from 'next';
import { FeaturesSection } from '@/components/features/features-section';

export const metadata: Metadata = {
  title: 'Clinic Management Software Features',
  description: 'Explore Appointik clinic software features: patient management, appointment scheduling, EMR/EHR, billing, e-prescriptions, reminders, reports and web portal.',
  alternates: {
    canonical: '/features',
  },
};

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <FeaturesSection />
    </div>
  );
}
