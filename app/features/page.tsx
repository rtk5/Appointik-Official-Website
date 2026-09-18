import { pageMetadata } from '@/lib/seo';
import { FeaturesSection } from '@/components/features/features-section';

export const metadata = pageMetadata(
  'Clinic Software Features',
  'Explore Android apps in 20 languages, EMR and billing. Pro adds booking and Aggregator Portals; Max adds unlimited staff accounts and multi-clinic support.',
  '/features/'
);

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <FeaturesSection />
    </div>
  );
}
